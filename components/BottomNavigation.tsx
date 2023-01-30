import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { ROUTES } from "../utils/consts";
import { useNavigation } from "@react-navigation/native";

export const BottomNavigation: React.FC = () => {
  const [selectedRoute, setSelectedRoute] = useState<ROUTES>();
  // const navigation = React.useContext(NavigationContext);
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.footer}>
        <Pressable
          style={{
            ...styles.button,
            borderRightColor: "#fff",
            borderRightWidth: 1,
          }}
          onPress={() => {
            // @ts-ignore
            navigation.navigate(ROUTES.ADMIN_PAGE);
            setSelectedRoute(ROUTES.ADMIN_PAGE);
          }}
        >
          <Text
            style={{
              ...styles.buttonText,
              color: selectedRoute === ROUTES.ADMIN_PAGE ? "yellow" : "#fff",
            }}
          >
            Admin
          </Text>
        </Pressable>
        <Pressable
          style={{ ...styles.button }}
          onPress={() => {
            // @ts-ignore
            navigation?.navigate(ROUTES.MAIN_PAGE, {});
            setSelectedRoute(ROUTES.MAIN_PAGE);
          }}
        >
          <View>
            <Text
              style={{
                ...styles.buttonText,
                color: selectedRoute === ROUTES.MAIN_PAGE ? "yellow" : "#fff",
              }}
            >
              Main
            </Text>
          </View>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#525252",
  },
  button: {
    height: "100%",
    flex: 1,
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
});
