import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { URISERVER } from "@env";
import Login from "./components/Login";
import AuthContextProvider from "./contexts/AuthContext";
import { CHECK_TOKEN } from "./graphql/auth.query";
import Home from "./components/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import useAuth from "./hooks/useAuth";
import Compte from "./components/Compte";
import Rentals from "./components/Rentals";
import Contact from "./components/Contact";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function App() {
  const client = new ApolloClient({
    uri: URISERVER,
    cache: new InMemoryCache({ addTypename: false }),
  });

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <AuthContextProvider>
          <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            {/*  Si on n'est pas connecté */}
            <Stack.Navigator>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ title: "Connexion" }}
              />
              {/* Si on est connecté :  */}
              {/* <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === "Rentals") {
                    iconName = focused ? "basket" : "basket-outline";
                  } else if (route.name === "Contact") {
                    iconName = focused
                      ? "chatbox-ellipses"
                      : "chatbox-ellipses-outline";
                  } else if (route.name === "Compte") {
                    iconName = focused ? "person" : "person-outline";
                  }
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "blue",
                tabBarInactiveTintColor: "gray",
              })}
            >
              <Tab.Screen
                name="Rentals"
                component={Rentals}
                options={{ title: "Réservations" }}
              />
              <Tab.Screen
                name="Contact"
                component={Contact}
                options={{ title: "Prendre contact" }}
              />
              <Tab.Screen
                name="Compte"
                component={Compte}
                options={{ title: "Mes informations" }}
              />
            </Tab.Navigator> */}
            </Stack.Navigator>
          </SafeAreaView>
        </AuthContextProvider>
      </ApolloProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
