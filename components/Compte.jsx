import { StyleSheet, View, Text, TextInput, 
  TouchableOpacity, Pressable, Platform } from "react-native";
import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_USERDETAILS } from "../graphql/userDetails.mutation";
import {GET_USERDETAILS} from "../graphql/detailsUserConnect.query"
import DateTimePicker from '@react-native-community/datetimepicker';
import { useFonts } from 'expo-font';

const Compte = () => {
  const [fontsLoaded] = useFonts({
    'Poppins': require("../assets/Poppins-Regular.ttf")
  });

  if (!fontsLoaded) {
    return null;
  }

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
      <Text style={styles.title}>Détails</Text>
  
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
            style={styles.inputBirthday}
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
            justifyContent: "space-around", alignSelf: "center"}}>

            <TouchableOpacity style={styles.buttonSecondary} onPress={toggleDatePicker}>
              <Text style={styles.secondary}>Annuler</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonCalendar} onPress={confirmIOSDate}>
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
    fontFamily:'Poppins',
    alignSelf:'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    marginTop: 15,
    paddingLeft: 10,
    paddingBottom: 10,
    fontFamily:'Poppins',
    fontSize:"",
  },
  input: {
    flex: 0.2,
    backgroundColor: "white", 
    borderWidth: 1,
    borderColor: "#f1600d",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 0,
    width: "100%"
  },
  inputBirthday: {
    flex: 0.2,
    backgroundColor: "white", 
    borderWidth: 1,
    borderColor: "#f1600d",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: "center"
  },
  buttonCalendar: {
    backgroundColor: "#f1600d",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginBottom: 10,
  },
  button: {
    alignSelf:'center',
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
    alignSelf:'center',
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
    alignSelf:'center',
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
  datePicker:{
    height: 120,
  }
});

export default Compte;
