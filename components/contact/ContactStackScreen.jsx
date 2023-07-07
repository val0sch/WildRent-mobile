import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContactForm from "./ContactForm";
import ChatBoxScreen from "./ChatBoxScreen";
import ContactScreen from "./ContactScreen";

const ContactStackScreen = ({ navigation }) => {
  const ContactStack = createNativeStackNavigator();
  return (
    <ContactStack.Navigator>
      <ContactStack.Screen
        name="Contact"
        component={ContactScreen}
        options={{ headerShown: false }}
      />
      <ContactStack.Screen
        name="ContactForm"
        component={ContactForm}
        options={{ title: "Formulaire de contact" }}
      />
      <ContactStack.Screen
        name="ChatBox"
        component={ChatBoxScreen}
        options={{ title: "Discussion en direct" }}
      />
    </ContactStack.Navigator>
  );
};
{
}

export default ContactStackScreen;
