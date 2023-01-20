import React, { useEffect } from "react";
import { Button, View } from "react-native";
import { useRecoilState } from "recoil";
import { atomSearchedListing } from "../utils/recoil";
import { listingsServer } from "../utils/server";
import { SearchListing } from "./SearchListing";

export const DeleteListing = () => {
  const [selectedListing, setSelectedListing] =
    useRecoilState<any>(atomSearchedListing);
  useEffect(() => {
    setSelectedListing({ id: 0, name: "" });
  }, []);

  useEffect(() => {
    console.log(selectedListing);
  }, [selectedListing, setSelectedListing]);
  return (
    <View>
      <SearchListing />
      {!!selectedListing?.id && (
        <Button
          title={`delete: ${selectedListing?.name}?`}
          onPress={() => {
            console.log(selectedListing);
            listingsServer.deleteListing(selectedListing);
          }}
        />
      )}
    </View>
  );
};
