import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { RecoilRoot } from "recoil";
import { t } from "./providers/providers";
import { httpBatchLink } from "@trpc/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES } from "./utils/consts";
import { AdminPage } from "./pages/Admin/AdminPage";
import { ListingPage } from "./pages/Listing/ListingPage";
import { UserPage } from "./pages/User/UserPage";
import { BottomNavigation } from "./components/BottomNavigation";
import { needsToLoginOrCreateAccount, UserSession } from "./providers/Auth";
import { CreateNewUserPage } from "./pages/Login/CreateNewUserPage";
export default function App() {
  const Stack = createNativeStackNavigator();
  const [session, setUserSession] = useState<UserSession>({
    email: null,
    session: null,
  });
  useEffect(() => {
    needsToLoginOrCreateAccount().then((user) => {
      console.log(user);
      setUserSession(user);
    });
  }, []);
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

  return (
    <t.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <NavigationContainer>
            <Stack.Navigator>
              {session.session && (
                <>
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
                </>
              )}
              {!session.session && (
                <>
                  <Stack.Screen
                    name={ROUTES.CREATE_NEW_USER_PAGE}
                    component={CreateNewUserPage}
                    options={{ title: "Create Account", headerShown: false }}
                  />
                </>
              )}
            </Stack.Navigator>
            <BottomNavigation />
          </NavigationContainer>
        </RecoilRoot>
      </QueryClientProvider>
    </t.Provider>
  );
}

export const fetchUser = () => {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
