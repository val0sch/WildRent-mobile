import { View, TextInput, StyleSheet, FlatList, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import Ionicons from "@expo/vector-icons/Ionicons";
import useAuth from "../../hooks/useAuth";
import MessageComponent from "./MessageComponent";

const socket = io("http://192.168.1.17:3001", {
  // transports: ["websocket"],
  autoConnect: false,
  // reconnection: true,
});

const ChatBox = () => {
  const { userInfos } = useAuth();
  const [input, onChangeInput] = useState("");
  const [messageReceived, setMessageReceived] = useState([]);
  const [listUsers, setListUsers] = useState([]);
  const userEmail = userInfos.email;
  const [adminSocket, setAdminSocket] = useState(null);

  const sendMessage = () => {
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
      setMessageReceived((prev) => [...prev, messageData]);

      socket.emit("privateMessage", {
        messageData,
        to: adminSocket,
      });
    }
    onChangeInput("");
  };

  console.log(adminSocket, "adminSocket");

  useEffect(() => {
    socket.auth = { userEmail };
    socket.connect();

    socket.on("connect_error", (err) => {
      if (err.message === "invalid username") {
        console.log("big error ", err.message);
      }
    });

    socket.on("users", (users) => {
      users.find((user) => {
        user.userEmail === "admin@admin.fr" && setAdminSocket(user.userID);
      });
    });

    socket.on("privateMessage", ({ messageData, from }) => {
      console.log("private message comming", messageData, from);
      console.log(adminSocket);
      if (from === adminSocket) {
        console.log("KPZKOPDJZAKAEKC");
        setMessageReceived((prev) => [...prev, messageData]);
        console.log("messageReceived", messageReceived);
      }
    });
  }, [messageReceived, userEmail]);

  // ****************$//////////////////////
  // const { userInfos } = useAuth();
  // const [input, onChangeInput] = useState("");
  // const [messageReceived, setMessageReceived] = useState([]);

  // const sendMessage = () => {
  //   if (input !== "") {
  //     const messageData = {
  //       author: userInfos.email,
  //       message: input,
  //       time:
  //         new Date(Date.now()).getHours() +
  //         ":" +
  //         new Date(Date.now()).getMinutes(),
  //     };
  //     setMessageReceived((prev) => [...prev, messageData]);
  //     socket.emit("send_message", socket.id, messageData);
  //     onChangeInput("");
  //   }
  // };

  // useEffect(() => {
  // socket.emit("create_room", socket.id);
  // });

  // useEffect(() => {
  //   socket.on("receive_message", (message) => {
  //     setMessageReceived((prevMessages) => [...prevMessages, message]);
  //   });
  // });
  console.log(messageReceived);

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
