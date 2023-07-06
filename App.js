import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import Constants from "expo-constants";
const { manifest } = Constants;

export default function App() {
  const uri =
    typeof manifest.packagerOpts === `object` && manifest.packagerOpts.dev
      ? manifest.debuggerHost.split(`:`).shift().concat(`:4000/graphql`)
      : `api.example.com`;
  console.log(uri);
  const client = new ApolloClient({
    uri: `http://${uri}`,
    cache: new InMemoryCache(),
  });

  client
    .query({
      query: gql`
        query User {
          users {
            email
            isAdmin
          }
        }
      `,
    })
    .then((result) => console.log(result.data.users.map((user) => user.email)));

  return (
    <View style={styles.container}>
      <Text>Hello !</Text>
      <StatusBar style="auto" />
    </View>
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
