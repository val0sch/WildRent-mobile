import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Form from "./Form";
import ChatBoxScreen from "./ChatBoxScreen";
import ContactScreen from "./ContactScreen";

const ContactStack = () => {
  const ContactStack = createNativeStackNavigator();
  return (
    <ContactStack.Navigator>
      <ContactStack.Screen
        name="Contact"
        component={ContactScreen}
        options={{ headerShown: false }}
      />
      <ContactStack.Screen
        name="Form"
        component={Form}
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

export default ContactStack;
