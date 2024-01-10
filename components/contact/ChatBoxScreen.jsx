import { View, TextInput, StyleSheet, FlatList, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import MessageComponent from "./MessageComponent";
import useAuth from "../../hooks/useAuth";
import { socket } from "../../socketService";


const ChatBox = () => {
  const { userInfos } = useAuth();
  const userEmail = userInfos.email;
  const [input, onChangeInput] = useState("");
  const [listUsers, setListUsers] = useState([]);
  const [userMessages, setUserMessages] = useState([]);

  const sendMessage = () => {
    let adminId;

    const findAdminId = listUsers.find(
      (user) => user.userEmail === "admin@admin.fr"
    );
    if (findAdminId) {
      adminId = findAdminId.userID;
    }

    if (input !== "") {
      const messageData = {
        room: userEmail,
        author: userEmail,
        message: input,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      setUserMessages((prev) => [...prev, messageData]);

      socket.emit("privateMessage", {
        messageData,
        to: adminId,
      });
    }
    onChangeInput("");
  };

  useEffect(() => {
    socket.auth = { userEmail };
    socket.connect();

    socket.on("users", (users) => {
      setListUsers(users);
    });

    socket.on("privateMessage", ({ messageData, from }) => {
      setUserMessages((prev) => [...prev, messageData]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);


  return (
    <View style={styles.container}>
      <View style={styles.messageBox}>
        {userMessages && (
          <FlatList
            data={userMessages}
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
        <Pressable style={styles.button} onPress={() => sendMessage()}>
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
    padding: 10,
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
