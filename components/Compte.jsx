import { StyleSheet, View, Text, TextInput, 
  TouchableOpacity, Pressable, Platform } from "react-native";
import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_USERDETAILS } from "../graphql/userDetails.mutation";
import {GET_USERDETAILS} from "../graphql/detailsUserConnect.query"
import DateTimePicker from '@react-native-community/datetimepicker';


const Compte = () => {
  const { userInfos, logout } = useAuth();

  const { data,loading } = useQuery(GET_USERDETAILS, {
    onCompleted(data) {
      console.log("Details du user", data);
      setAddress(data?.detailsConnectUser.address)
      setFirstname(data?.detailsConnectUser.firstname)
      setLastname(data?.detailsConnectUser.lastname)
      setBirthday(data?.detailsConnectUser?.birthday?.substr(0,10))
    },
    onError(error) {
      console.error(error);
    },
    fetchPolicy:
      "no-cache"
    ,
  });

  const [birthday, setBirthday] = useState(data?.detailsConnectUser?.birthday?.substr(0,10));
  const [showDatePicker, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const [address, setAddress] = useState(data?.detailsConnectUser.address);
  const [firstname, setFirstname] = useState(data?.detailsConnectUser.firstname);
  const [lastname, setLastname] = useState(data?.detailsConnectUser.lastname);

  const [updateUserDetails] = useMutation(UPDATE_USERDETAILS, {
    onCompleted(dataUserDetails) {
      console.log("Details du user", dataUserDetails);
    },
    onError(error) {
      console.error(error);
    },
  });

  const toggleDatePicker = () => {
    setShow(!showDatePicker);
  };

  const onChange = ({type}, selectedDate) => {
    console.log("TYPE", type);
    if(type === "set"){
      const currentDate = selectedDate;
      console.log("currentDate", currentDate);
      setBirthday(currentDate);
      if( Platform.OS === "android"){
        toggleDatePicker();
        setBirthday(currentDate.toDateString());
      }
    }else{
      toggleDatePicker();
    }
  };

  const confirmIOSDate = () => {
    setBirthday(new Date(birthday).toDateString());
    toggleDatePicker();
  };

  const handleUpdateDetails = () => {
    // const updatedBirthday = birthday === "" ? data?.detailsConnectUser.birthday : birthday; 
    // const updatedAddress = address === "" ? data?.detailsConnectUser.updateDetailsUser.address : address; 
    // const updatedFirstname = firstname === "" ? data?.detailsConnectUser.updateDetailsUser.firstname : firstname; 
    // const updatedLastname = lastname === "" ? data?.detailsConnectUser.updateDetailsUser.lastname : lastname; 
    updateUserDetails({
      variables: {
        updateDetailsUserId: data?.detailsConnectUser.id,
        infos: {
          birthday: birthday,
          address: address,
          firstname: firstname,
          lastname: lastname,
        },
      },
    })
      .then((response) => {
        console.log("Détails de l'utilisateur mis à jour avec succès :", response.data.updateDetailsUser);
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour des détails de l'utilisateur :", error);
      });
  };

  if(loading){
    return <Text>Chargement des données...</Text>
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Information sur les détails de l'utilisateur</Text>
  
        <Text style={styles.label}>Adresse:</Text>
        <TextInput
          style={styles.input}
          value={address}
          onChangeText={(text) => setAddress(text)}
        />
  
        <Text style={styles.label}>Prénom:</Text>
        <TextInput
          style={styles.input}
          value={firstname}
          onChangeText={(text) => setFirstname(text)}
        />
  
        <Text style={styles.label}>Nom:</Text>
        <TextInput
          style={styles.input}
          value={lastname}
          onChangeText={(text) => setLastname(text)}
        />

        <Text style={styles.label}>Date de naissance:</Text>
        {!showDatePicker && (<Pressable onPress={toggleDatePicker}>
          <TextInput
            style={styles.input}
            value={birthday}
            onChangeText={(text) => setBirthday(text)}
            editable={false}
            onPressIn={toggleDatePicker}
          />
        </Pressable>)}
        {showDatePicker && (<DateTimePicker
          mode="date"
          display="spinner"
          value={date}
          onChange={onChange}
          style={styles.datePicker}
          locale="fr-FR"
        />)}

        {showDatePicker && Platform.OS === "ios" &&(
          <View style={{flexDirection: "row",
            justifyContent: "space-around"}}>

            <TouchableOpacity style={styles.button} onPress={confirmIOSDate}>
              <Text style={styles.buttonText}>Valider</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={toggleDatePicker}>
              <Text style={styles.buttonText}>Annuler</Text>
            </TouchableOpacity>
          </View>
        )}
  
      <TouchableOpacity style={styles.button} onPress={handleUpdateDetails}>
        <Text style={styles.buttonText}>Mettre à jour</Text>
      </TouchableOpacity>
  
      <TouchableOpacity style={styles.button} onPress={logout}>
        <Text style={styles.buttonText}>Déconnexion</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red", 
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    width: "30%",
    fontWeight: "bold",
  },
  input: {
    flex: 0.2,
    backgroundColor: "blue", 
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
  },
  button: {
    backgroundColor: "#FFA500",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  datePicker:{
    height: 120,
  }
});

export default Compte;
