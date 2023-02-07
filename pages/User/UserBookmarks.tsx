import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { ImagePreview } from "../../components/ImagePreview";
import {
  COLORS,
  FONT_SIZE,
  FONT_WEIGHT,
  globalStyles,
  mockListing,
  SPACING,
  ROUTES,
} from "../../utils/consts"; // get all listings that a user has bookmarked

export const UserBookmarks = () => {
  const navigation = useNavigation();
  const bookmarks = mockListing.map((listing, i) => {
    return (
      <Pressable
        key={i}
        style={{
          ...globalStyles.textBubble,
          padding: 20,
        }}
        onPress={() => {
          // @ts-ignore
          navigation.navigate(ROUTES.LISTING_PAGE, { defaultListing: listing });
        }}
      >
        <ImagePreview imageURL={listing.images} />
        {/* <View style={{ flex: 1, flexGrow: 1, width: 0 }}> */}
        <Text
          style={{
            fontSize: FONT_SIZE.MEDIUM,
            fontWeight: FONT_WEIGHT.BOLD,
            paddingTop: 10,
          }}
        >
          {listing.displayTitle}
        </Text>
        <Text style={{ paddingTop: 5, flexWrap: "wrap", flexShrink: 1 }}>
          Address {listing.address}
        </Text>
        <Text style={{ paddingTop: 5 }}>
          Coupon {Math.random() > 0.5 ? "available" : "used"}
        </Text>
        <Text style={{ paddingVertical: 5 }}>Phone {listing.phone}</Text>
        {/* </View> */}
      </Pressable>
    );
  });
  return (
    <ScrollView>
      <View style={{ ...globalStyles.textBubble }}>
        <Text style={globalStyles.textBubbleHeader}>Bookmarks</Text>
      </View>
      {bookmarks}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  bookmarkRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // borderColor: COLORS.GREY,
    color: "black",
    paddingRight: SPACING.SMALL,
    borderTopWidth: 1,
  },
});
