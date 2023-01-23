import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { db } from "./db";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AdminPage } from "./pages/Admin";
import { MainPage } from "./pages/Main";
import { ROUTES } from "./utils/consts";
import { RecoilRoot } from "recoil";
import { createContext } from "react";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "../VentureWisconsinDB";
const Stack = createNativeStackNavigator();
const defaultValue = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/trpc",
    }),
  ],
});

export const TrpcContext = createContext(defaultValue);
export default function App() {
  const [users, setUsers] = useState("");
  useEffect(() => {
    getUsers();
  });

  const getUsers = async () => {
    console.log("starting call");
    const response = await db.users.getAllUser().catch((e) => {});
    console.log(response);
    if (response) {
      setUsers(JSON.stringify(response));
    }
  };
  return (
    <TrpcContext.Provider value={defaultValue}>
      <RecoilRoot>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name={ROUTES.ADMIN_PAGE}
              component={AdminPage}
              options={{ title: "Admin" }}
            />
            <Stack.Screen
              name={ROUTES.MAIN_PAGE}
              component={MainPage}
              options={{ title: "Main" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </RecoilRoot>
    </TrpcContext.Provider>
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
