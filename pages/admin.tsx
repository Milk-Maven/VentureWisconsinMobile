import React from "react";
import { View } from "react-native";
import { BottomNavigation } from "../componets/bottomNavigation";
import { containerStyles } from "../utils/consts";
import { AdminListing } from "../componets/adminListing";
export const AdminPage = ({ navigation }: any) => {
  return (
    <View style={containerStyles.container}>
      <View style={containerStyles.contentContainer}>
        <AdminListing />
      </View>
      <BottomNavigation navigation={navigation}></BottomNavigation>
    </View>
  );
};
