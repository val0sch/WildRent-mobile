import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { URISERVER } from "@env";
import AuthContextProvider from "./contexts/AuthContext";
import Home from "./components/Home";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const client = new ApolloClient({
    uri: URISERVER,
    cache: new InMemoryCache({ addTypename: false }),
  });

  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <AuthContextProvider>
          <View style={styles.container}>
            <StatusBar style="auto" />
            <Home />
          </View>
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
