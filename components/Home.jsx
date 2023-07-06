import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Home() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
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
export default Home;
