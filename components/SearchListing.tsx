import React, { useEffect, useState } from "react";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";
import { useRecoilState } from "recoil";
import { t } from "../providers/providers";
import { atomSearchedListing } from "../utils/recoil";
export const SearchListing = () => {
  const fetchListings = (input = "") => {
    // .then((listings) => {
    //   const options = listings.map((listing) => {
    //     return { ...listing, title: listing.name };
    //   });
    //   setOptions(options);
    // });
  };
  const [options, setOptions] = useState<any>([]);
  const [selectedItem, setSelectedItem] =
    useRecoilState<any>(atomSearchedListing);
  useEffect(() => {
    // fetchListings();
  }, []);

  return (
    <AutocompleteDropdown
      onChangeText={(input) => {
        fetchListings(input);
      }}
      clearOnFocus={false}
      closeOnBlur={true}
      closeOnSubmit={false}
      showClear={true}
      initialValue={""}
      onSelectItem={setSelectedItem}
      dataSet={options}
    />
  );
};
