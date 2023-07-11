import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import React, { useEffect, useState } from "react";
// import SocketIOClient from "socket.io-client";
import socket from "../../service/socketService";

const ChatBox = () => {
  // const socket = SocketIOClient("http://localhost:3001");

  const [message, onChangeTextMessage] = React.useState("");
  const [messageReceived, setMessageReceived] = React.useState("");

  const sendMessage = () => {
    // socket.emit("send_message", { message });
  };

  useEffect(() => {
    console.log("TEST", socket)
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
    socket.on("connect", () => {
      console.log("CONNECTE" , socket);
    });
    socket.on('connect_error', err => console.log(err.message))
    socket.on('connect_failed', err => console.log("err2", err))
    
    // console.log("socket", socket);
  }, []);

  console.log(messageReceived);
  return (
    <View style={styles.container}>
      <View styles={styles.messageBox}>
        <Text>{messageReceived}</Text>
      </View>
      <View style={styles.writingBox}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeTextMessage}
          value={message}
          placeholder="Votre message..."
        ></TextInput>
        <Button style={styles.button} onPress={sendMessage} title="IconSend" />
      </View>
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
  messageBox: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "red",
    justifyContent: "center",
    gap: 100,
  },
  writingBox: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
    gap: 100,
  },
});

export default ChatBox;
