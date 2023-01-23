import React, { useContext } from "react";
import { View } from "react-native";
import { containerStyles } from "../utils/consts";
import { BottomNavigation } from "../components/BottomNavigation";
import { AdminContainer } from "../components/AdminContainer";
import { TrpcContext } from "../App";
export const AdminPage = ({ navigation }: any) => {
  const t = useContext(TrpcContext);

  return (
    <View style={containerStyles.container}>
      <View style={containerStyles.contentContainer}>
        {/* <AdminListing /> */}
        <AdminContainer />
      </View>
      <BottomNavigation navigation={navigation}></BottomNavigation>
    </View>
  );
};
