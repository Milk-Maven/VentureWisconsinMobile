import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useRecoilState } from "recoil";
import { atomSearchedListing } from "../utils/recoil";
import { CreateListing } from "./CreateListing";
import { DeleteListing } from "./DeleteListing";
import { UpdateListing } from "./UpdateListing";
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
          {action === Action.create && <CreateListing />}
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
    // flexDirection: "row",
    // width: "100%",
    // display: "flex",
    // height: 20,
    // paddingTop: 5,
    // paddingHorizontal: 5,
    // justifyContent: "",
    alignContent: "center",
  },
});
