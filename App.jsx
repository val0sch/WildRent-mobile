import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
} from "@apollo/client";
import { URISERVER } from "@env";
import Login from "./components/Login";
import AuthContextProvider from "./contexts/AuthContext";
import { CHECK_TOKEN } from "./graphql/auth.query";
import Accueil from "./components/Accueil";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const client = new ApolloClient({
    uri: URISERVER,
    cache: new InMemoryCache({ addTypename: false }),
  });

  // const { data, refetch } = useQuery(CHECK_TOKEN);
  // const { userInfos, logout } = useAuth();
  // console.log(data, "data");

  // useEffect(() => {
  //   refetch();
  // }, [userInfos, refetch]);
  const Stack = createNativeStackNavigator();
  return (
    <ApolloProvider client={client}>
      <AuthContextProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar style="auto" />
          {/*  Si on n'est pas LOg */}
          <Login />
          {/*  Si on est LOg affiche page d'accueil et menu*/}
          {/* {data?.checkToken && <Accueil />} */}
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Accueil" component={Accueil} />
            </Stack.Navigator>
          </NavigationContainer>
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
