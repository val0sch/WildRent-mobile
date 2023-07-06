import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";
import useAuth from "../hooks/useAuth";
import { useLoginLazyQuery } from "../generated";

function Login({ navigation }) {
  const { setUserData } = useAuth();

  const [login, { error, loading }] = useLoginLazyQuery({
    async onCompleted(data) {
      console.log("data", data);
      console.log("data.login", data.login);
      await setUserData(data.login);
      navigation.navigate("Accueil");
    },
    onError(err) {
      console.log("error", err);
    },
  });
  const [state, setState] = useState({
    email: "test@test.fr",
    password: "test",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.email && state.password) {
      console.log(state);
      login({
        variables: {
          infos: {
            ...state,
          },
        },
      });
    }
    console.log("hello");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="renseignez votre email"
        onChange={(event) =>
          setState({ ...state, email: event.nativeEvent.text })
        }
        value={state.email}
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="renseignez votre mot de passe"
        onChange={(event) =>
          setState({ ...state, password: event.nativeEvent.text })
        }
        value={state.password}
      ></TextInput>
      <Button
        style={styles.button}
        title="Se connecter"
        onPress={handleSubmit}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {},
});

export default Login;
