import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";
import { useRecoilState } from "recoil";
import { t } from "../providers/providers";
import { atomSearchedListing } from "../utils/recoil";
export const SearchListing = () => {
  const hook = t.listingGetAll.useQuery({ name: "" });
  const [selectedItem, setSelectedItem] =
    useRecoilState<any>(atomSearchedListing);
  useEffect(() => {}, []);
  return (
    <>
      <AutocompleteDropdown
        onChangeText={(input) => {}}
        clearOnFocus={false}
        closeOnBlur={true}
        closeOnSubmit={false}
        showClear={true}
        initialValue={""}
        onSelectItem={setSelectedItem}
        // @ts-ignore
        dataSet={
          hook?.data?.map((listing) => {
            return { ...listing, title: listing.name };
          }) || []
        }
      />
    </>
  );
};
