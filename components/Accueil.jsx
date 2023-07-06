import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Accueil() {
  return (
    <View style={styles.container}>
      <Text>Accueil</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // color: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Accueil;
