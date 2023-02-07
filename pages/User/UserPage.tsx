import React from "react";
import { View } from "react-native";
import { globalStyles } from "../../utils/consts";
import { UserBookmarks } from "./UserBookmarks";
export const UserPage = () => {
  return (
    <View style={globalStyles.pageContainer}>
      <UserBookmarks></UserBookmarks>
    </View>
  );
};
