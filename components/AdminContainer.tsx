import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { FormGroup } from "./FormGroup";
import { DeleteListing } from "./DeleteListing";
import { UpdateListing } from "./UpdateListing";
import { z } from "zod";
import { t } from "../providers/providers";
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
      <View style={styles.buttonContainer}>
        <Button
          title={`table to modify: ${table}`}
          onPress={() => {
            if (table === TableToModify.listings) {
              setFeature(TableToModify.coupons);
            } else if (table === TableToModify.coupons) {
              setFeature(TableToModify.users);
            } else {
              setFeature(TableToModify.listings);
            }
            setAction(Action.create);
          }}
        ></Button>

        <Button
          title={`action to perform: ${action}`}
          onPress={() => {
            if (action === Action.create) {
              setAction(Action.update);
              return;
            }
            if (action === Action.update) {
              setAction(Action.delete);
              return;
            }
            if (action === Action.delete) {
              setAction(Action.create);
              return;
            }
          }}
        ></Button>
      </View>
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
});
