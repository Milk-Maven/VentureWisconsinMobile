import React, { useEffect, useState } from "react";
import { Listing } from "../../../VentureWisconsinShared";
import { DisplayListing } from "./DisplayListing";
import { t } from "../../providers/providers";
import { DisplayListingOptions } from "./DisplayListingOptions";
import { globalStyles } from "../../utils/consts";
import { Text, View } from "react-native";
import { useRecoilState } from "recoil";
import { atomSelectedListing } from "../../utils/recoil";
// @ts-ignore
export const ListingPage = ({ route }) => {
  const getListings$ = t.listingGetAll.useQuery(
    { name: "" },
    {
      onSuccess: (res) => {
        setListings(res);
      },
    }
  );
  const [listings, setListings] = useState<Listing[]>([]);
  const [selectedListing, setListing] = useRecoilState<Listing | null>(
    atomSelectedListing
  );

  useEffect(() => {
    const defaultListing =
      route?.params?.defaultListing || getListings$?.data?.[0];
    if (defaultListing) {
      setListing(defaultListing);
    }
  }, [getListings$.data]);
  return (
    <View style={globalStyles.pageContainer}>
      {selectedListing && (
        <>
          <DisplayListing listing={selectedListing}></DisplayListing>
          <DisplayListingOptions
            onNext={() => {
              const listingToShow = listings.reduce<Listing>(
                (prev, curr, index) => {
                  if (curr.id === selectedListing.id) {
                    return listings[index + 1] ?? listings[0];
                  }
                  return prev;
                },
                selectedListing
              );
              setListing(listingToShow ?? ({} as Listing));
            }}
            onPrevious={() => {
              const listingToShow = listings.reduce<Listing>(
                (prev, curr, index) => {
                  if (curr.id === selectedListing.id) {
                    return listings[index - 1] ?? listings[listings.length - 1];
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
