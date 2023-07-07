import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";
import useAuth from "../hooks/useAuth";
import { useLoginLazyQuery } from "../generated";

function Login() {
  const { setUserData } = useAuth();

  const [login, { error, loading }] = useLoginLazyQuery({
    async onCompleted(data) {
      console.log("data", data);
      await setUserData(data.login);
    },
    onError(err) {
      console.error("error", err);
    },
  });
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.email && state.password) {
      login({
        variables: {
          infos: {
            ...state,
          },
        },
      });
    }
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
        secureTextEntry={true}
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
