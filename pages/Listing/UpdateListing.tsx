import React, { useEffect } from "react";
import { View } from "react-native";
import { useRecoilState } from "recoil";
import { Listing } from "../../../VentureWisconsinShared";
import { t } from "../../providers/providers";
import { atomSearchedListing } from "../../utils/recoil";
import { SearchListing } from "./SearchListing";
import { FormGroup } from "../../components/FormGroup";
import { formValidator } from "../../utils/consts";

export const UpdateListing = () => {
  useEffect(() => {
    setSelectedListing({ id: 0, name: "" } as Listing);
  }, []);
  const [selectedListing, setSelectedListing] =
    useRecoilState<Listing>(atomSearchedListing);
  return (
    <View>
      <SearchListing />
      <FormGroup
        formDefaultValue={selectedListing}
        formKeys={
          Object.keys(formValidator.keyof().Values) as (keyof Listing)[]
        }
        formValidator={formValidator}
        onSubmit={t.listingUpdate.useMutation}
      />
    </View>
  );
};
