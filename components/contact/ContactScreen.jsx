import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const ContactScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Form")}
      >
        <Text style={styles.text}>Envoyer un mail</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ChatBox")}
      >
        <Text style={styles.text}>Lancer une discussion en direct</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
    gap: 100,
  },
  button: {
    width: 300,
    //turquoise
    backgroundColor: "#50a5b1",
    // blue navy
    // backgroundColor: "#1a265a",
    // orange
    // backgroundColor: "#f1600d",
    borderRadius: 10,
    paddingVertical: 20,
    alignContent: "center",
  },
  text: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
  },
});

export default ContactScreen;
