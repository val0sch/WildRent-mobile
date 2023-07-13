import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function MessageComponent({ message, userInfos }) {
  return (
    <View
      style={userInfos.email === message.author ? styles.you : styles.other}
    >
      <Text style={styles.author}>
        <Ionicons name={"person-outline"} size={15} color="grey" />{" "}
        {userInfos.email === message.author ? "you" : message.author}
      </Text>
      <Text style={styles.message}>{message.message}</Text>
      <Text style={styles.time}>{message.time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  other: {
    backgroundColor: "#50a5b1",
    margin: 15,
    gap: 3,
    alignSelf: "flex-start",
    borderRadius: 8,
    padding: 8,
    width: 200,
  },
  you: {
    backgroundColor: "#1a265a",
    color: "white",
    margin: 15,
    gap: 3,
    alignSelf: "flex-end",
    borderRadius: 8,
    padding: 10,
    width: 200,
  },
  author: { color: "white", fontSize: 10, alignSelf: "flex-start" },
  message: {
    color: "white",
    fontSize: 20,
  },
  time: {
    fontSize: 8,
    alignSelf: "flex-end",
    color: "white",
  },
});
