import React, { useEffect, useState } from "react";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";
import { useRecoilState } from "recoil";
import { atomSearchedListing } from "../utils/recoil";
import { getAllUsers } from "../utils/server";
export const SearchListing = () => {
  const fetchListings = (input = "") => {
    getAllUsers({ nameStartsWith: input }).then(
      (response: { id: string; name: string }[]) => {
        const options = response.map((listing) => {
          return { ...listing, title: listing.name };
        });
        setOptions(options);
      }
    );
  };
  const [options, setOptions] = useState<any>([]);
  const [selectedItem, setSelectedItem] =
    useRecoilState<any>(atomSearchedListing);
  useEffect(() => {
    fetchListings();
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
