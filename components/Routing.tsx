import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { AdminPage } from "../pages/Admin/AdminPage";
import { ListingPage } from "../pages/Listing/ListingPage";
import { CreateNewUserPage } from "../pages/Login/CreateNewUserPage";
import { LoginPage } from "../pages/Login/LoginPage";
import { UserPage } from "../pages/User/UserPage";
import { needsToLoginOrCreateAccount, UserSession } from "../providers/Auth";
import { ROUTES } from "../utils/consts";
import { atomSession } from "../utils/recoil";
import { BottomNavigation } from "./BottomNavigation";
export const Routing = () => {
  const Stack = createNativeStackNavigator();
  const [userSession, setUserSession] =
    useRecoilState<UserSession>(atomSession);
  useEffect(() => {
    needsToLoginOrCreateAccount().then((user) => {
      console.log(user);
      setUserSession(user);
    });
  }, []);
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          {userSession.session && (
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
              <Stack.Screen
                name={ROUTES.LOGIN_PAGE}
                component={LoginPage}
                options={{ title: "Create Account", headerShown: false }}
              />
            </>
          )}
          {userSession.session && (
            <Stack.Screen
              name={ROUTES.CREATE_NEW_USER_PAGE}
              component={CreateNewUserPage}
              options={{ title: "Create Account", headerShown: false }}
            />
          )}
        </Stack.Navigator>
        <BottomNavigation />
      </NavigationContainer>
    </>
  );
};
