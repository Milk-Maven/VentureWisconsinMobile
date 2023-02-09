import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { ImagePreview } from "../../components/ImagePreview";
import {
  FONT_SIZE,
  FONT_WEIGHT,
  globalStyles,
  mockListing,
  SPACING,
  ROUTES,
  COLORS,
} from "../../utils/consts"; // get all listings that a user has bookmarked

export const UserPins = () => {
  const navigation = useNavigation();
  const pins = mockListing.map((listing, i) => {
    return (
      <Pressable
        key={i}
        style={{
          padding: SPACING.SMALL,
          flexDirection: "row",
          backgroundColor: COLORS.WHITE,
          borderTopWidth: 1,
          borderColor: COLORS.GREY,
        }}
        onPress={() => {
          // @ts-ignore
          navigation.navigate(ROUTES.LISTING_PAGE, { defaultListing: listing });
        }}
      >
        <ImagePreview imageURL={listing.images} />
        <View
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: FONT_SIZE.MEDIUM,
              fontWeight: FONT_WEIGHT.BOLD,
            }}
          >
            {listing.displayTitle}
          </Text>
          <Text>Coupon {Math.random() > 0.5 ? "available" : "used"}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            flex: 1,
          }}
        >
          <MaterialIcons
            onPress={() => {
              // call api to remove from users bookmarks
            }}
            name="clear"
            size={30}
            style={{ color: COLORS.BLACK }}
          />
        </View>
      </Pressable>
    );
  });
  return (
    <ScrollView>
      <View>
        <Text style={globalStyles.textBubbleHeader}>Pinned Activities</Text>
      </View>
      {pins}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  bookmarkRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "black",
    paddingRight: SPACING.SMALL,
    borderTopWidth: 1,
  },
});
