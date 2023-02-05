import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { COLORS, ROUTES } from "../utils/consts";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export const BottomNavigation: React.FC = () => {
  const [selectedRoute, setSelectedRoute] = useState<ROUTES>();
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.footer}>
        <MaterialIcons
          onPress={() => {
            // @ts-ignore
            navigation.navigate(ROUTES.ADMIN_PAGE);
            setSelectedRoute(ROUTES.ADMIN_PAGE);
          }}
          name="admin-panel-settings"
          size={40}
          color={COLORS.SECONDARY_RED}
          style={{
            ...styles.icon,
            color:
              selectedRoute === ROUTES.ADMIN_PAGE
                ? COLORS.SECONDARY_RED
                : COLORS.WHITE,
          }}
        />

        <MaterialIcons
          onPress={() => {
            // @ts-ignore
            navigation?.navigate(ROUTES.MAIN_PAGE, {});
            setSelectedRoute(ROUTES.MAIN_PAGE);
          }}
          name="explore"
          size={40}
          color={COLORS.SECONDARY_RED}
          style={{
            ...styles.icon,
            color:
              selectedRoute === ROUTES.MAIN_PAGE
                ? COLORS.SECONDARY_RED
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
