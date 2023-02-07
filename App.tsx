import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES } from "./utils/consts";
import { RecoilRoot } from "recoil";
import { t } from "./providers/providers";
import { httpBatchLink } from "@trpc/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BottomNavigation } from "./components/BottomNavigation";
import { UserPage } from "./pages/User/UserPage";
import { AdminPage } from "./pages/Admin/AdminPage";
import { ListingPage } from "./pages/Listing/ListingPage";

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
                options={{ title: "Admin", headerShown: false }}
              />
              <Stack.Screen
                name={ROUTES.LISTING_PAGE}
                component={ListingPage}
                options={{ title: "Main", headerShown: false }}
              />
              <Stack.Screen
                name={ROUTES.USER_PAGE}
                component={UserPage}
                options={{ title: "User", headerShown: false }}
              />
            </Stack.Navigator>
            <BottomNavigation />
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
