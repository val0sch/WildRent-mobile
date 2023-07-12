import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import AuthContextProvider from "./contexts/AuthContext";
import Home from "./components/Home";
import { NavigationContainer } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";
import {setContext} from "@apollo/client/link/context"

export default function App() {
  const uri = process.env.EXPO_PUBLIC_URISERVER;

  const httpLink = createHttpLink({
    uri: uri,
    credentials: "same-origin",
  });

  const authLink = setContext( async(_, { headers }) => {
    //on va modifier les headers envoyés pour chaque requête
  
    //on récupère le token dans le localStorage préalablement stocké lors d'un login
    const token = await SecureStore.getItemAsync("token");
  
    //pour finir on retourne les headers modifiés
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "", // on y injecte le token
      },
    };
  });

  const client = new ApolloClient({
    uri: uri,
    cache: new InMemoryCache({ addTypename: false }),
    link: authLink.concat(httpLink),
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
