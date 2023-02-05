import { StyleSheet } from "react-native";

export enum USER_ROLE {
  "ADMIN" = "ADMIN",
  "USER" = "USER",
}

export enum ROUTES {
  MAIN_PAGE = "MainPage",
  ADMIN_PAGE = "AdminPage",
}

export const BASE_URL: Readonly<string> = "http://localhost:3000/";

export enum SPACING {
  LARGE = 50,
  MEDIUM = 30,
  SMALL = 10,
}

export enum FONT_WEIGHT {
  THIN = "200",
  MEDIUM = "400",
  BOLD = "600",
}

export enum COLORS {
  BLACK = "#545454",
  MAIN_YELLOW = "#fccf13",
  GREY = "#CFCFCE",
  SECONDARY_RED = "red",
  WHITE = "#fff",
}

export enum FONT_SIZE {
  X_LARGE = 32,
  LARGE = 24,
  MEDIUM = 16,
  SMALL = 12,
}

export const containerStyles = StyleSheet.create({
  pageContainer: {
    backgroundColor: "#e8e8e8",
    flex: 1,
    // borderRadius: 20,
    marginTop: 50,
  },

  contentContainer: {
    flex: 1,
  },
});
