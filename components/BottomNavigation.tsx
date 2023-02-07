import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { COLORS, ROUTES } from "../utils/consts";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

export const BottomNavigation = () => {
  const [selectedRoute, setSelectedRoute] = useState<ROUTES>();
  const navigation = useNavigation();
  useEffect(() => {
    navigation.addListener("state", (s) => {
      if (s?.data?.state?.routes[s?.data?.state.routes.length - 1]) {
        setSelectedRoute(
          s?.data?.state.routes[s?.data?.state.routes.length - 1].name
        );
      }
    });
  }, []);
  return (
    <>
      <View style={styles.footer}>
        <MaterialIcons
          onPress={() => {
            // @ts-ignore
            navigation.navigate(ROUTES.ADMIN_PAGE);
          }}
          name="admin-panel-settings"
          size={40}
          style={{
            ...styles.icon,
            color:
              selectedRoute === ROUTES.ADMIN_PAGE
                ? COLORS.MAIN_YELLOW
                : COLORS.WHITE,
          }}
        />

        <MaterialIcons
          onPress={() => {
            // @ts-ignore
            navigation?.navigate(ROUTES.LISTING_PAGE, {});
          }}
          name="explore"
          size={40}
          style={{
            ...styles.icon,
            color:
              selectedRoute === ROUTES.LISTING_PAGE
                ? COLORS.MAIN_YELLOW
                : COLORS.WHITE,
          }}
        />

        <MaterialIcons
          onPress={() => {
            // @ts-ignore
            navigation?.navigate(ROUTES.USER_PAGE, {});
          }}
          name="person"
          size={40}
          style={{
            ...styles.icon,
            color:
              selectedRoute === ROUTES.USER_PAGE
                ? COLORS.MAIN_YELLOW
                : COLORS.WHITE,
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: COLORS.BLACK,
    shadowColor: COLORS.BLACK,
  },
  button: {
    height: "100%",
    flex: 1,
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    padding: 10,
    textAlign: "center",
    borderRightWidth: 1,
    flex: 1,
    borderRightColor: COLORS.BLACK,
  },
});
