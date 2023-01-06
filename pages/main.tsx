import React from "react";
import { Text, View } from "react-native";
import { BottomNavigation } from "../componets/bottomNavigation";
import { containerStyles } from "../utils/consts";

export const MainPage = ({ navigation }: any) => {
  return (
    <View style={containerStyles.container}>
      <View style={containerStyles.contentContainer}>
        <Text>Main</Text>
      </View>
      <BottomNavigation navigation={navigation}></BottomNavigation>
    </View>
  );
};
