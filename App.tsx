import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { db } from "./db";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AdminPage } from "./pages/admin";
import { MainPage } from "./pages/main";
import { ROUTES } from "./utils/consts";
const Stack = createNativeStackNavigator();
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
