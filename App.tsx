import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AdminPage } from "./pages/Admin";
import { MainPage } from "./pages/Main";
import { ROUTES } from "./utils/consts";
import { RecoilRoot } from "recoil";
import { t } from "./providers/providers";
import { httpBatchLink } from "@trpc/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Stack = createNativeStackNavigator();
export default function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    t.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:3000",
        }),
      ],
    })
  );
  const [users, setUsers] = useState("");
  useEffect(() => {
    // getUsers();
  }, []);

  return (
    <t.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </t.Provider>
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
