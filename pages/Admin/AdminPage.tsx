import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { FormGroup, listingSchema } from "../../components/FormGroup";
import { DeleteListing } from "../Listing/DeleteListing";
import { t } from "../../providers/providers";
import { SegmentedButtons } from "../../components/SegmentedButtons";
import { UpdateListing } from "../Listing/UpdateListing";
import { Action, globalStyles, TableToModify } from "../../utils/consts";
import { CreateListing } from "../Listing/CreateListing";
import { CreateCoupon } from "../Coupon/CreateCoupon";
import { UpdateCoupon } from "../Coupon/UpdateCoupon";
import { DeleteCoupon } from "../Coupon/DeleteCoupon";

export const AdminPage = () => {
  const [action, setAction] = useState<"create" | "update" | "delete">(
    Action.create
  );
  const [table, setFeature] = useState<TableToModify>(TableToModify.listings);

  useEffect(() => {}, []);
  return (
    <View style={globalStyles.pageContainer}>
      <View style={globalStyles.textBubble}>
        <Text style={globalStyles.textBubbleHeader}></Text>
        <SegmentedButtons
          buttons={[
            {
              text: TableToModify.listings,
              onPress: () => {
                setFeature(TableToModify.listings);
              },
            },
            {
              text: TableToModify.coupons,
              onPress: () => {
                setFeature(TableToModify.coupons);
              },
            },
            {
              text: TableToModify.users,
              onPress: () => {
                setFeature(TableToModify.users);
              },
            },
          ]}
        />
        <SegmentedButtons
          buttons={[
            {
              text: Action.create,
              onPress: () => {
                setAction(Action.create);
              },
            },
            {
              text: Action.update,
              onPress: () => {
                setAction(Action.update);
              },
            },
            {
              text: Action.delete,
              onPress: () => {
                setAction(Action.delete);
              },
            },
          ]}
        />
        {table === TableToModify.listings && (
          <View>
            {action === Action.create && <CreateListing />}
            {action === Action.update && <UpdateListing />}
            {action === Action.delete && <DeleteListing />}
          </View>
        )}

        {table === TableToModify.coupons && (
          <View>
            {action === Action.create && <CreateCoupon />}
            {action === Action.update && <UpdateCoupon />}
            {action === Action.delete && <DeleteCoupon />}
          </View>
        )}
        {table === TableToModify.users && <View></View>}
      </View>
    </View>
  );
};
