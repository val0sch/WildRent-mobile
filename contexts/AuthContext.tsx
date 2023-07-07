import { createContext, useEffect, useReducer, useState } from "react";
import * as SecureStore from "expo-secure-store";

export const AuthContext = createContext({
  async setUserData(data: any) {},
  logout() {},
  userInfos: {
    email: "",
  },
});

function ComponentWithInitialStateProvider({
  children,
  userData,
}: {
  children: JSX.Element;
  userData: any;
}) {
  const [state, dispatch] = useReducer(
    (prevState: any, action: any) => {
      switch (action.type) {
        case "LOG_IN":
          return {
            ...prevState,
            userData: action.userData,
          };
        case "LOG_OUT":
          return {
            ...prevState,
            userData: {},
          };
      }
    },
    {
      userData,
    }
  );

  useEffect(() => {}, [state]);
  const authContext = {
    setUserData: async (data: any) => {
      const { token, ...userData } = data;
      await SecureStore.setItemAsync("token", token);
      await SecureStore.setItemAsync("userData", JSON.stringify(userData));
      dispatch({ type: "LOG_IN", userData });
    },
    logout: async () => {
      await SecureStore.deleteItemAsync("token");
      await SecureStore.deleteItemAsync("userData");
      dispatch({ type: "LOG_OUT" });
    },
    userInfos: {
      ...state.userData,
    },
  };
  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
}

const AuthContextProvider = ({ children }: { children: JSX.Element }) => {
  const [data, setData] = useState<null | {}>(null);
  const getUserData = async () => {
    let result = await SecureStore.getItemAsync("userData");
    if (result) {
      setData(JSON.parse(result));
    } else {
      setData({});
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  if (!data) return null;
  return (
    <ComponentWithInitialStateProvider userData={data}>
      {children}
    </ComponentWithInitialStateProvider>
  );
};

export default AuthContextProvider;
