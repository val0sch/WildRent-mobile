import { StyleSheet, View, Text, Button } from "react-native";
import React from "react";
import useAuth from "../hooks/useAuth";

const Compte = () => {
  const { userInfos, logout } = useAuth();
  return (
    <View>
      <View>
        <Text style={styles.logout}>Compte</Text>
      </View>
      <Button style={styles.logout} title="Déconnexion" onPress={logout} />
    </View>
  );
};

const styles = StyleSheet.create({
  logout: {
    backgroundColor: '#F1600D',
    color: 'white',
  }
});

export default Compte;
