import { View, TextInput, StyleSheet, FlatList, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import socket from "../../service/socketService";
import useAuth from "../../hooks/useAuth";
import MessageComponent from "./MessageComponent";

const ChatBox = () => {
  // const { userInfos } = useAuth();
  // const [input, onChangeInput] = useState("");
  // const [messageReceived, setMessageReceived] = useState([]);
  // console.log(socket.id);
  // const sendMessage = () => {
  //   if (input !== "") {
  //     const messageData = {
  //       room: userInfos.email,
  //       author: userInfos.email,
  //       message: input,
  //       time:
  //         new Date(Date.now()).getHours() +
  //         ":" +
  //         new Date(Date.now()).getMinutes(),
  //     };
  //     // setMessageReceived((prev) => [...prev, messageData]);
  //     // socket.emit("send_message", messageData);
  //     console.log(messageData);
  //     socket.emit("message", messageData);
  //   }
  //   onChangeInput("");
  // };
  // useEffect(() => {
  //   const username = userInfos.email;
  //   socket.auth = { username };
  //   socket.connect();
  // }, [userInfos]);
  // useEffect(() => {
  //   socket.on("receive_message", (data) => {
  //     setMessageReceived((prev) => [...prev, data]);
  //   });
  // }, []);

  const { userInfos } = useAuth();
  const [input, onChangeInput] = useState("");
  const [messageReceived, setMessageReceived] = useState([]);

  const sendMessage = () => {
    if (input !== "") {
      const messageData = {
        author: userInfos.email,
        message: input,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      setMessageReceived((prev) => [...prev, messageData]);
      socket.emit("send_message", socket.id, messageData);
      onChangeInput("");
    }
  };

  useEffect(() => {
    socket.emit("create_room", socket.id);
  });

  // useEffect(() => {
  //   socket.on("receive_message", (message) => {
  //     setMessageReceived((prevMessages) => [...prevMessages, message]);
  //   });
  // });

  return (
    <View style={styles.container}>
      <View style={styles.messageBox}>
        {messageReceived && (
          <FlatList
            data={messageReceived}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <MessageComponent message={item} userInfos={userInfos} />
            )}
          />
        )}
      </View>

      <View style={styles.writingBox}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeInput}
          value={input}
          placeholder="Votre message..."
        />
        <Pressable style={styles.button} onPress={sendMessage}>
          <Ionicons name={"send-outline"} size={25} color="white" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingVertical: 20,
  },
  messageBox: {
    flex: 1,
    // backgroundColor: "red",
    padding: 10,
    //not working
    // justifyContent: "center",
  },
  writingBox: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 5,
    borderRadius: 10,
    paddingLeft: 10,
  },
  input: {
    flex: 1,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  button: {
    backgroundColor: "#f1600d",
    paddingStart: 15,
    paddingEnd: 12,
    paddingVertical: 5,
    borderRadius: 10,
  },
});

export default ChatBox;
