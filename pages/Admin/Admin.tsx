import React, { useContext } from "react";
import { View } from "react-native";
import { containerStyles } from "../../utils/consts";
import { BottomNavigation } from "../../components/BottomNavigation";
import { AdminContainer } from "./AdminContainer";
export const AdminPage = ({ navigation }: any) => {
  return (
    <View style={containerStyles.pageContainer}>
      {/* <AdminListing /> */}
      <AdminContainer />
    </View>
  );
};
