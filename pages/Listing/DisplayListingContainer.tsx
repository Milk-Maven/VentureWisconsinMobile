import React, { useEffect, useState } from "react";
import { Listing } from "../../../VentureWisconsinShared";
import { DisplayListing } from "./DisplayListing";
import { t } from "../../providers/providers";
import { DisplayListingOptions } from "./DisplayListingOptions";
const mockListing: Listing[] = [
  {
    id: 0,
    images: `https://fastly.4sqi.net/img/general/600x600/7582041_YW-cY_0Lh04QKuHCHaH5nXOs50JFMGUc5GKBS_79TDY.jpg`,
    attributes: "cozy blue collar college",
    city: "Hales Corners",
    displayTitle: "Bar 430",
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
  },
  {
    id: 1,
    images:
      "https://lh3.googleusercontent.com/p/AF1QipO1NgOQV1FZIuSksxG20y4hzNxISHQW34onekQU=s1360-w1360-h1020",
    attributes: "college",
    city: "Oshkosh",
    displayTitle: "Mollys",
    subTitle: "asdf",
    zipcode: "53209",
    email: "mollys@oshkosh.com",
    website: "mollymcguiresoshkosh.com",
    phone: "(920) 233-3301",
    address: "539 Campus Pl, Oshkosh, WI 54901",
    name: "Molly McGuire's",
    category: "bars",
    description:
      "Pub grub, cocktails & draft beer served in a wood-paneled space with a pool table & arcade games.",
  },
  {
    id: 2,
    images:
      "https://s3-media0.fl.yelpcdn.com/bphoto/BpbRI-DJDoNJvRh8Gp52ug/348s.jpg",
    attributes: "college",
    city: "Oshkosh",
    displayTitle: "D PUB",
    subTitle: "additional info",
    zipcode: "53207",
    address: "515 N Main St, Oshkosh, WI 54901",
    name: "d pub",
    website: "https://www.facebook.com/DistilleryPub/",
    email: "dpub@oshkosh.com",
    phone: "(920) 233-2565",
    category: "bars",
    description:
      "Located in historic downtown Oshkosh. Quaint, laid back pub, full-service restaurant and amazing mugs of imported beer.",
  },
];
export const DisplayListingContainer = () => {
  const getListings$ = t.listingGetAll.useQuery({ name: "" });
  const [selectedListing, setListing] = useState({} as Listing);
  useEffect(() => {
    const listing = (getListings$?.data?.[0] || {}) as Listing;
    setListing(mockListing[0]);
  }, []);
  return (
    <>
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
    </>
  );
};
