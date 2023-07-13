import React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import useAuth from "../hooks/useAuth";

import Login from "./Login";
import Rentals from "./Rentals";
import Contact from "./contact/ContactStack";
import Compte from "./Compte";

import Ionicons from "@expo/vector-icons/Ionicons";

function Home() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const { userInfos } = useAuth();

  return Object.keys(userInfos).length > 0 ? (
    <Tab.Navigator
      initialRouteName="Compte"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Rentals") {
            iconName = focused ? "list-circle" : "list-circle-outline", color="#1a265a";
          } else if (route.name === "Contact") {
            iconName = focused
              ? "chatbox-ellipses"
              : "chatbox-ellipses-outline", color="#1a265a";
          } else if (route.name === "Compte") {
            iconName = focused ? "person" : "person-outline", color="#1a265a";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#f1600d",
        tabBarInactiveTintColor: "#1a265a",
      })}
    >
      <Tab.Screen
        name="Rentals"
        component={Rentals}
        options={{ title: "Réservations" }}
      />
      <Tab.Screen
        name="Compte"
        component={Compte}
        options={{ title: "Mes informations" }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{ title: "Prendre contact" }}
      />
    </Tab.Navigator>
  ) : (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "Connexion" }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
