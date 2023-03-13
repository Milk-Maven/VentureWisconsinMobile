import React, { useState } from "react";
import { View, Text } from "react-native";
import { FormGroup, listingSchema } from "../../components/FormGroup";
import { SegmentedButtons } from "../../components/SegmentedButtons";
import { DeleteListing } from "../Listing/DeleteListing";
import { UpdateListing } from "../Listing/UpdateListing";

import { Action, globalStyles, TableToModify } from "../../utils/consts";
export const ListerControl = () => {
  const [action, setAction] = useState<"create" | "update" | "delete">(
    Action.create
  );
  const [table, setFeature] = useState<TableToModify>(TableToModify.listings);
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
