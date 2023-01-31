import { atom } from "recoil";
import { Listing } from "../../VentureWisconsinShared";

export const atomSearchedListing = atom({
  key: "searchedListing", // unique ID (with respect to other atoms/selectors)
  default: { id: 0, name: "" } as Listing, // default value (aka initial value)
});
