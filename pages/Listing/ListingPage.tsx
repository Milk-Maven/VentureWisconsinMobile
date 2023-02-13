import React, { useEffect, useState } from "react";
import { Listing } from "../../../VentureWisconsinShared";
import { DisplayListing } from "./DisplayListing";
import { t } from "../../providers/providers";
import { DisplayListingOptions } from "./DisplayListingOptions";
import { globalStyles, mockListing } from "../../utils/consts";
import { Text, View } from "react-native";

// @ts-ignore
export const ListingPage = ({ route }) => {
  const getListings$ = t.listingGetAll.useQuery({ name: "" });
  const [selectedListing, setListing] = useState<Listing | null>(null);
  useEffect(() => {
    const defaultListing =
      route?.params?.defaultListing || getListings$?.data?.[0];
    if (defaultListing) {
      setListing(defaultListing);
    }
  }, []);
  return (
    <View style={globalStyles.pageContainer}>
      {selectedListing && (
        <>
          <DisplayListing listing={selectedListing}></DisplayListing>
          <DisplayListingOptions
            onNext={() => {
              const listingToShow = getListings$.data?.reduce<Listing>(
                (prev, curr, index) => {
                  if (curr.id === selectedListing.id) {
                    return mockListing[index + 1] ?? mockListing[0];
                  }
                  return prev;
                },
                selectedListing
              );
              setListing(listingToShow ?? ({} as Listing));
            }}
            onPrevious={() => {
              const listingToShow = mockListing.reduce<Listing>(
                (prev, curr, index) => {
                  if (curr.id === selectedListing.id) {
                    return (
                      mockListing[index - 1] ??
                      mockListing[mockListing.length - 1]
                    );
                  }
                  return prev;
                },
                selectedListing
              );
              setListing(listingToShow);
            }}
          ></DisplayListingOptions>
        </>
      )}
      {!selectedListing && <Text>no listings found</Text>}
    </View>
  );
};
