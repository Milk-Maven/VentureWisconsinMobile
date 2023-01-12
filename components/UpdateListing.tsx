import React, { useEffect } from "react";
import { View } from "react-native";
import { useRecoilState } from "recoil";
import { atomSearchedListing } from "../utils/recoil";
import { CreateListing } from "./CreateListing";
import { SearchListing } from "./SearchListing";

export const UpdateListing = () => {
  useEffect(() => {
    setSelectedListing({ id: 0, name: "" });
  }, []);
  const [selectedListing, setSelectedListing] =
    useRecoilState<any>(atomSearchedListing);
  return (
    <View>
      <SearchListing />
      <CreateListing listingToUpdate={selectedListing} />
    </View>
  );
};
