import React, { useEffect } from "react";
import { View } from "react-native";
import { useRecoilState } from "recoil";
import { Listing } from "../../../VentureWisconsinShared";
import { atomSearchedListing } from "../../utils/recoil";
import { SearchListing } from "./SearchListing";
import { FormGroup } from "../../components/FormGroup";

export const UpdateListing = () => {
  useEffect(() => {
    setSelectedListing({ id: 0, name: "" } as Listing);
  }, []);
  const [selectedListing, setSelectedListing] =
    useRecoilState<Listing>(atomSearchedListing);
  return (
    <View>
      <SearchListing />
    </View>
  );
};
