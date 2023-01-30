import React, { useEffect } from "react";
import { View } from "react-native";
import { useRecoilState } from "recoil";
import { z } from "zod";
import { t } from "../providers/providers";
import { atomSearchedListing } from "../utils/recoil";
import { FormGroup } from "./FormGroup";
import { SearchListing } from "./SearchListing";

export const UpdateListing = () => {
  useEffect(() => {
    setSelectedListing({ id: 0, name: "" });
  }, []);
  const [selectedListing, setSelectedListing] =
    useRecoilState<any>(atomSearchedListing);
  return (
    <View>
      <SearchListing />
      <FormGroup
        listingToUpdate={selectedListing}
        formKeys={[
          "address",
          "attributes",
          "category",
          "city",
          "description",
          "displayTitle",
          "email",
          "images",
          "name",
          "phone",
          "subTitle",
          "website",
          "zipcode",
        ]}
        formValidator={z.object({
          name: z.string(),
          address: z.string(),
          category: z.string(),
          description: z.string(),
          email: z.string(),
          phone: z.string(),
          website: z.string(),
          city: z.string(),
          zipcode: z.string(),
          displayTitle: z.string(),
          attributes: z.string(),
          images: z.string(),
        })}
        onSubmit={t.listingUpdate.useMutation}
      />
    </View>
  );
};
