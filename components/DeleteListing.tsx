import React, { useEffect } from "react";
import { Button, View } from "react-native";
import { useRecoilState } from "recoil";
// import { t } from "../providers/providers";
import { atomSearchedListing } from "../utils/recoil";
import { SearchListing } from "./SearchListing";

export const DeleteListing = () => {
  const [selectedListing, setSelectedListing] =
    useRecoilState(atomSearchedListing);
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
            // t.listingRemove.useMutation();
          }}
        />
      )}
    </View>
  );
};
