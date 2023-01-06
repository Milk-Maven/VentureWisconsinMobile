import { StyleSheet } from "react-native";

export enum USER_ROLE {
  "ADMIN" = "ADMIN",
  "USER" = "USER",
}

export enum ROUTES {
  MAIN_PAGE = "MainPage",
  ADMIN_PAGE = "AdminPage",
}

export const containerStyles = StyleSheet.create({
  container: {
    flex: 1,
  },

  contentContainer: {
    flex: 1,
  },
});
