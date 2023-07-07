import { View, Text, Button } from "react-native";
import React from "react";
import useAuth from "../hooks/useAuth";

const Compte = () => {
  const { userInfos, logout } = useAuth();
  return (
    <View>
      <Text>Compte</Text>
      <Button title="Déconnexion" onPress={logout} />
    </View>
  );
};

export default Compte;
