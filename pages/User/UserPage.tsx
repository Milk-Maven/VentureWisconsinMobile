import React from "react";
import { View } from "react-native";
import { globalStyles } from "../../utils/consts";
import { UserPins } from "./UserPins";
export const UserPage = () => {
  return (
    <View style={globalStyles.pageContainer}>
      <UserPins></UserPins>
    </View>
  );
};
