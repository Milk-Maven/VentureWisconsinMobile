import React from "react";
import { View } from "react-native";
import { DisplayListingContainer } from "../components/DisplayListingContainer";
import { containerStyles } from "../utils/consts";
export const MainPage = () => {
  return (
    <View style={containerStyles.pageContainer}>
      <DisplayListingContainer></DisplayListingContainer>
    </View>
  );
};
