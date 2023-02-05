import React, { useEffect, useState } from "react";
import { Listing } from "../../VentureWisconsinShared";
import { DisplayListing } from "../pages/Listing/DisplayListing";
import { t } from "../providers/providers";
const mockListing: Listing = {
  id: 0,
  images: `https://fastly.4sqi.net/img/general/600x600/7582041_YW-cY_0Lh04QKuHCHaH5nXOs50JFMGUc5GKBS_79TDY.jpg`,
  attributes: "cozy blue collar college",
  city: "Hales Corners",
  displayTitle: "D PUB",
  subTitle: "1 dollar beers",
  address: "430 N Main St, Oshkosh, WI 54901",
  name: "Bar 430",
  email: "bar430@oshkosh.com",
  website: "bar430.com",
  phone: "(920) 230-1114",
  category: "bars",
  zipcode: "53130",
  description:
    "Venue for classic bar fare with some creative twists, a robust drink menu & brunch on weekends.",
};
export const DisplayListingContainer = () => {
  const getListings$ = t.listingGetAll.useQuery({ name: "" });
  const [listing, setListing] = useState({} as Listing);
  useEffect(() => {
    const listing = (getListings$?.data?.[0] || {}) as Listing;
    setListing(mockListing);
  }, []);
  return (
    <>
      <DisplayListing listing={listing}></DisplayListing>
    </>
  );
};
