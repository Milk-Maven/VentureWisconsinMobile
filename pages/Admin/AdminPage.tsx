import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FormGroup, listingSchema } from "../../components/FormGroup";
import { DeleteListing } from "../Listing/DeleteListing";
import { z } from "zod";
import { t } from "../../providers/providers";
import { SegmentedButtons } from "../../components/SegmentedButtons";
import { UpdateListing } from "../Listing/UpdateListing";
import { globalStyles, mockListing } from "../../utils/consts";
import { Listing } from "../../../VentureWisconsinShared";

export enum TableToModify {
  "listings" = "listings",
  "coupons" = "coupons",
  "users" = "users",
}
export enum Action {
  "create" = "create",
  "update" = "update",
  "delete" = "delete",
}
export const AdminPage = () => {
  const [action, setAction] = useState<"create" | "update" | "delete">(
    Action.create
  );
  const [table, setFeature] = useState<TableToModify>(TableToModify.listings);
  const hook = t.listingCreate.useMutation();

  useEffect(() => {}, []);
  return (
    <View style={globalStyles.pageContainer}>
      <View style={globalStyles.textBubble}>
        <Text style={globalStyles.textBubbleHeader}>Admin Panel</Text>
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
            {action === Action.create && (
              <FormGroup
                formDefaultValue={mockListing[0]}
                formKeys={[
                  "address",
                  "attributes",
                  "category",
                  "city",
                  "description",
                  "displayTitle",
                  "email",
                  "name",
                  "phone",
                  "subTitle",
                  "website",
                  "zipcode",
                  "image1",
                  "image2",
                  "image3",
                  "image4",
                ]}
                formValidator={listingSchema}
                onSubmit={hook.mutate}
              />
            )}
            {action === Action.update && <UpdateListing />}
            {action === Action.delete && <DeleteListing />}
          </View>
        )}

        {table === TableToModify.coupons && <View></View>}
        {table === TableToModify.users && <View></View>}
      </View>
    </View>
  );
};
