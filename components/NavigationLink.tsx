import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";
import { ROUTES } from "../utils/consts";

export const NavigationLink: React.FC<{ text: string; route: ROUTES }> = ({
  text,
  route,
}) => {
  const navigation = useNavigation();
  return (
    <Text
      style={{ color: "blue", textAlign: "center" }}
      onPress={() => {
        // @ts-ignore
        navigation.navigate(route, {});
      }}
    >
      {text}
    </Text>
  );
};
