import { atom } from "recoil";

export const atomSearchedListing = atom({
  key: "searchedListing", // unique ID (with respect to other atoms/selectors)
  default: { id: 0, name: "" }, // default value (aka initial value)
});
