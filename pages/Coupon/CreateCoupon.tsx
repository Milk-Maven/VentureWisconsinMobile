import React from "react";
import { Text, View } from "react-native";
import { z } from "zod";
import { FormGroup } from "../../components/FormGroup";
import { t } from "../../providers/providers";
import { SearchListing } from "../Listing/SearchListing";

export const createCouponSchema = z.object({
  name: z.string(),
  listingId: z.number().int(),
  deal: z.string(),
  expires: z.date(),
});
export const CreateCoupon = () => {
  const createCoupon = t.couponCreate.useMutation();
  return (
    <View>
      <View style={{ paddingHorizontal: 15 }}>
        <Text>Listing</Text>
        <SearchListing />
      </View>
      <FormGroup
        formDefaultValue={{}}
        formKeys={["name", "deal", "expires"]}
        formValidator={createCouponSchema}
        onSubmit={(coupon: any) => {
          console.log(coupon);
          // createCoupon.mutate(coupon);
        }}
      />
    </View>
  );
};
