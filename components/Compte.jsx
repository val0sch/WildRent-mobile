import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Platform,
} from "react-native";
import useAuth from "../hooks/useAuth";
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_USERDETAILS } from "../graphql/detailsUser.mutation";
import { USER_DETAILS } from "../graphql/detailsUser.query";
import DateTimePicker from "@react-native-community/datetimepicker";

const Compte = () => {
  const { userInfos, logout } = useAuth();
  console.log("userInfos", userInfos);

  const [detailsUser, setDetailsUser] = useState({
    id: "",
    firstname: "",
    lastname: "",
    address: "",
    birthday: "",
  });
  const { loading } = useQuery(USER_DETAILS, {
    onCompleted(data) {
      console.log("Details du user", data);
      setDetailsUser({
        ...data.getDetailsUserConnected,
        birthday: data.getDetailsUserConnected?.birthday?.substr(0, 10),
      });
    },
    onError(error) {
      console.error(error);
    },
    fetchPolicy: "no-cache",
  });

  const [showDatePicker, setShow] = useState(false);
  const [date, setDate] = useState(new Date());

  const toggleDatePicker = () => {
    setShow(!showDatePicker);
  };

  const [updateUserDetails] = useMutation(UPDATE_USERDETAILS, {
    onCompleted(dataUserDetails) {
      console.log("Details du user", dataUserDetails);
    },
    onError(error) {
      console.error(error);
    },
  });

  const onChangeDate = ({ type }, selectedDate) => {
    console.log("TYPE", type);
    if (type === "set") {
      const currentDate = selectedDate;
      console.log("currentDate", currentDate);
      setDetailsUser({
        ...detailsUser,
        birthday: currentDate,
      });
      if (Platform.OS === "android") {
        toggleDatePicker();
        setDetailsUser({
          ...detailsUser,
          birthday: currentDate.toDateString(),
        });
      }
    } else {
      toggleDatePicker();
    }
  };
  const confirmIOSDate = () => {
    setDetailsUser({
      ...detailsUser,
      birthday: new Date(detailsUser.birthday).toDateString(),
    });
    toggleDatePicker();
  };

  const handleUpdateDetails = () => {
    console.log("detailsUser, handleUpdateDetails", detailsUser);
    updateUserDetails({
      variables: {
        updateDetailsUserId: detailsUser.id,
        infos: {
          birthday: detailsUser.birthday,
          address: detailsUser.address,
          firstname: detailsUser.firstname,
          lastname: detailsUser.lastname,
        },
      },
    })
      .then((response) => {
        console.log(
          "Détails de l'utilisateur mis à jour avec succès :",
          response.data.updateDetailsUser
        );
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la mise à jour des détails de l'utilisateur :",
          error
        );
      });
  };

  if (loading) {
    return <Text>Chargement des données...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Détails</Text>

      <Text style={styles.label}>Adresse:</Text>
      <TextInput
        style={styles.input}
        value={detailsUser.address}
        onChangeText={(text) =>
          setDetailsUser({ ...detailsUser, address: text })
        }
      />

      <Text style={styles.label}>Prénom:</Text>
      <TextInput
        style={styles.input}
        value={detailsUser.firstname}
        onChangeText={(text) =>
          setDetailsUser({ ...detailsUser, firstname: text })
        }
      />

      <Text style={styles.label}>Nom:</Text>
      <TextInput
        style={styles.input}
        value={detailsUser.lastname}
        onChangeText={(text) =>
          setDetailsUser({ ...detailsUser, lastname: text })
        }
      />

      <Text style={styles.label}>Date de naissance:</Text>
      {!showDatePicker && (
        <Pressable onPress={toggleDatePicker}>
          <TextInput
            style={styles.inputBirthday}
            value={detailsUser.birthday}
            onChangeText={(text) =>
              setDetailsUser({ ...detailsUser, birthday: text })
            }
            editable={false}
            onPressIn={toggleDatePicker}
          />
        </Pressable>
      )}
      {showDatePicker && (
        <DateTimePicker
          mode="date"
          display="spinner"
          value={date}
          onChange={onChangeDate}
          style={styles.datePicker}
          locale="fr-FR"
        />
      )}

      {showDatePicker && Platform.OS === "ios" && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignSelf: "center",
          }}
        >
          <TouchableOpacity
            style={styles.buttonSecondary}
            onPress={toggleDatePicker}
          >
            <Text style={styles.secondary}>Annuler</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonCalendar}
            onPress={confirmIOSDate}
          >
            <Text style={styles.buttonText}>Valider</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity style={styles.button} onPress={handleUpdateDetails}>
        <Text style={styles.buttonText}>Mettre à jour</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonLogout} onPress={logout}>
        <Text style={styles.logout}>Déconnexion</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    justifyContent: "center",
    alignItems: "left",
    padding: 10,
  },
  title: {
    alignSelf: "center",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    marginTop: 15,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  input: {
    flex: 0.2,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#f1600d",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 0,
    width: "100%",
  },
  inputBirthday: {
    flex: 0.2,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#f1600d",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: "center",
  },
  buttonCalendar: {
    backgroundColor: "#f1600d",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginBottom: 10,
  },
  button: {
    alignSelf: "center",
    backgroundColor: "#f1600d",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonSecondary: {
    marginRight: 5,
    marginBottom: 10,
    alignSelf: "center",
    borderRadius: 8,
    borderColor: "#f1600d",
    backgroundColor: "white",
    fontSize: 16,
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  secondary: {
    color: "#f1600d",
  },
  buttonLogout: {
    marginTop: 10,
    alignSelf: "center",
    borderRadius: 8,
    borderColor: "#f1600d",
    backgroundColor: "white",
    fontSize: 16,
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  logout: {
    color: "#f1600d",
  },
  datePicker: {
    height: 120,
  },
});

export default Compte;
