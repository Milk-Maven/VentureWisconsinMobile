import React, { useEffect, useState } from "react";
import { Listing } from "../../../VentureWisconsinShared";
import { DisplayListing } from "./DisplayListing";
import { t } from "../../providers/providers";
import { DisplayListingOptions } from "./DisplayListingOptions";
import { globalStyles, mockListing } from "../../utils/consts";
import { View } from "react-native";

// @ts-ignore
export const ListingPage = ({ route }) => {
  const getListings$ = t.listingGetAll.useQuery({ name: "" });
  const [selectedListing, setListing] = useState({} as Listing);
  useEffect(() => {
    setListing(route?.params?.defaultListing ?? mockListing[0]);
  }, []);
  return (
    <View style={globalStyles.pageContainer}>
      <DisplayListing listing={selectedListing}></DisplayListing>
      <DisplayListingOptions
        onNext={() => {
          const listingToShow = mockListing.reduce<Listing>(
            (prev, curr, index) => {
              if (curr.id === selectedListing.id) {
                return mockListing[index + 1] ?? mockListing[0];
              }
              return prev;
            },
            selectedListing
          );
          setListing(listingToShow);
        }}
        onPrevious={() => {
          const listingToShow = mockListing.reduce<Listing>(
            (prev, curr, index) => {
              if (curr.id === selectedListing.id) {
                return (
                  mockListing[index - 1] ?? mockListing[mockListing.length - 1]
                );
              }
              return prev;
            },
            selectedListing
          );
          setListing(listingToShow);
        }}
      ></DisplayListingOptions>
    </View>
  );
};
