import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { FormGroup } from "../../components/FormGroup";
import { DeleteListing } from "../Listing/DeleteListing";
import { z } from "zod";
import { t } from "../../providers/providers";
import { SegmentedButtons } from "../../components/SegmentedButtons";
import { UpdateListing } from "../Listing/UpdateListing";

export const formValidator = z.object({
  // id: z.string().optional(),
  address: z.string().min(1),
  attributes: z.string().optional(),
  category: z.string().optional(),
  city: z.string().min(1),
  description: z.string().min(1),
  displayTitle: z.string().min(1),
  email: z.string().email().min(1),
  images: z.string().min(1),
  name: z.string().min(1),
  phone: z.string().min(10),
  subTitle: z.string().optional(),
  website: z.string().min(1),
  zipcode: z.string().min(5),
});
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
export const AdminContainer = () => {
  const [action, setAction] = useState<"create" | "update" | "delete">(
    Action.create
  );
  const [table, setFeature] = useState<TableToModify>(TableToModify.listings);
  const hook = t.listingCreate.useMutation();

  useEffect(() => {}, []);
  return (
    <View>
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
              formDefaultValue={{} as any}
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
              formValidator={formValidator}
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
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    display: "flex",
    alignContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
});
