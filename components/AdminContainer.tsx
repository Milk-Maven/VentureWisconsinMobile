import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { FormGroup } from "./FormGroup";
import { DeleteListing } from "./DeleteListing";
import { UpdateListing } from "./UpdateListing";
import { z } from "zod";
import { t } from "../providers/providers";
import { SegmentedButtons } from "./SegmentedButtons";

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
            onClick: () => {
              setFeature(TableToModify.listings);
            },
          },
          {
            text: TableToModify.coupons,
            onClick: () => {
              setFeature(TableToModify.coupons);
            },
          },
          {
            text: TableToModify.users,
            onClick: () => {
              setFeature(TableToModify.users);
            },
          },
        ]}
      />
      <SegmentedButtons
        buttons={[
          {
            text: Action.create,
            onClick: () => {
              setAction(Action.create);
            },
          },
          {
            text: Action.update,
            onClick: () => {
              setAction(Action.update);
            },
          },
          {
            text: Action.delete,
            onClick: () => {
              setAction(Action.delete);
            },
          },
        ]}
      />
      {table === TableToModify.listings && (
        <View>
          {action === Action.create && (
            <FormGroup
              listingToUpdate={{} as any}
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
