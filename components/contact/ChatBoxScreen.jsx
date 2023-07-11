import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import React, { useEffect, useState } from "react";
import socket from "../../service/socketService";
import useAuth from "../../hooks/useAuth";

const ChatBox = () => {
  const { userInfos } = useAuth();
  const [input, onChangeInput] = useState("");
  const [conversation, setConversation] = useState([]);
  const [messageReceived, setMessageReceived] = useState([]);
  
  const sendMessage = async () => {
    if (input !== "") {
      const messageData = {
        room: userInfos.email,
        author: userInfos.email,
        message: input,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", messageData);
    }
    // setConversation([...conversation, input]);
    // console.log("conversation", { conversation });
    // socket.emit("send_message", { conversation });
    onChangeInput("");
  };
  // useEffect(() => {
  //   socket.on("receive_message", (data) => {
  //     // setMessageReceived((prev) => [...prev, data]);
  //     console.log(data);
  //   });
  // }, []);
  console.log(input);
  console.log(conversation);

  return (
    <View style={styles.container}>
      <View styles={styles.messageBox}>
        <Text>hello</Text>
      </View>
      <View style={styles.writingBox}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeInput}
          value={input}
          placeholder="Votre message..."
        ></TextInput>
        <Button style={styles.button} onPress={sendMessage} title="Envoyer" />
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
