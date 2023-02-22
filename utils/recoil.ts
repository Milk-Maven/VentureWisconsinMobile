import { atom } from "recoil";
import { Listing } from "../../VentureWisconsinShared";
import { UserSession } from "../providers/Auth";

export const atomSearchedListing = atom({
  key: "searchedListing", // unique ID (with respect to other atoms/selectors)
  default: { id: 0, name: "" } as Listing, // default value (aka initial value)
});

export const atomSession = atom<UserSession>({
  key: "session", // set the session
  default: { session: "", email: "" }, // default value (aka initial value)
});
