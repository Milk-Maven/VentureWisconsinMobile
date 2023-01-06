import React from "react";
import { Button, StyleSheet, Text, View, Pressable } from "react-native";
import { ROUTES } from "../utils/consts";

export const BottomNavigation: React.FC<{ navigation: any }> = ({
  navigation,
}: any) => {
  return (
    <>
      <View style={styles.footer}>
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate(ROUTES.ADMIN_PAGE, {});
          }}
        >
          <Text style={styles.buttonText}>Admin</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate(ROUTES.MAIN_PAGE, {});
          }}
        >
          <Text style={styles.buttonText}>Main</Text>
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
  },
  button: {
    height: "50%",
    paddingHorizontal: "5%",
    display: "flex",
    justifyContent: "center",
    // backgroundColor: "blue",
    // borderWidth: 1,
    // borderColor: "gray",
  },
  buttonText: {
    color: "gray",
    fontSize: 20,
  },
});
