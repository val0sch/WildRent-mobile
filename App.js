import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import { URISERVER } from "@env";
import Login from "./components/Login";
import AuthContextProvider from "./contexts/AuthContext";
export default function App() {
  const client = new ApolloClient({
    uri: URISERVER,
    cache: new InMemoryCache({ addTypename: false }),
  });
  console.log("URISERVER", URISERVER);

  return (
    <ApolloProvider client={client}>
      <AuthContextProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar style="auto" />
          <Login />
        </SafeAreaView>
      </AuthContextProvider>
    </ApolloProvider>
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
