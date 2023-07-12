import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function MessageComponent({ message }) {
  return (
    <View style={styles.container}>
      <Text style={styles.author}>
        <Ionicons name={"person-outline"} size={15} color="grey" />{" "}
        {message.author}
      </Text>
      <Text>{message.message}</Text>
      <Text style={styles.time}>{message.time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    gap: 3,
    alignItems: "flex-start",
  },

  author: {
    fontSize: 10,
    color: "grey",
  },
  time: {
    fontSize: 10,
    color: "grey",
    alignSelf: "flex-end",
  },
});
