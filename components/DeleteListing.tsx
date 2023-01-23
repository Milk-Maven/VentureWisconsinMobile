import React, { useContext, useEffect } from "react";
import { Button, View } from "react-native";
import { useRecoilState } from "recoil";
import { TrpcContext } from "../App";
import { atomSearchedListing } from "../utils/recoil";
import { SearchListing } from "./SearchListing";

export const DeleteListing = () => {
  const t = useContext(TrpcContext);
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
            t.listingRemove.mutate(selectedListing.name);
          }}
        />
      )}
    </View>
  );
};
