import { Listing } from "../../../VentureWisconsinShared";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import {
  COLORS,
  FONT_SIZE,
  FONT_WEIGHT,
  globalStyles,
  SPACING,
} from "../..//utils/consts";
import { Pill } from "../../components/Pill";
import { ImageDisplay } from "./ImageDisplay";
export const DisplayListing: React.FC<{
  listing: Listing;
}> = ({ listing }) => {
  return (
    <>
      <ScrollView>
        <View style={globalStyles.textBubble}>
          <Text style={globalStyles.textBubbleHeader}>
            {listing.displayTitle}
          </Text>

          <ImageDisplay
            images={[
              listing.image1,
              listing.image2,
              listing.image3,
              listing.image4,
            ]}
          ></ImageDisplay>
          {listing.image2 && (
            <Text
              style={{
                fontSize: FONT_SIZE.MEDIUM,
                textAlign: "center",
                paddingVertical: 10,
                color: COLORS.BLACK,
                fontWeight: FONT_WEIGHT.X_BOLD,
              }}
            >
              {listing.city}
            </Text>
          )}
        </View>
        <View style={globalStyles.textBubble}>
          <Text style={{ ...styles.label, paddingTop: 5 }}>Category</Text>
          <Text style={styles.value}>{listing.category}</Text>

          <Text style={styles.label}>Description</Text>
          <Text style={styles.value}>{listing.description}</Text>

          <Text style={styles.label}>Address</Text>
          <Text style={styles.value}>{listing.address}</Text>

          <Text style={styles.label}>Attributes</Text>
          <View
            style={{
              paddingLeft: SPACING.SMALL,
              paddingVertical: SPACING.SMALL,
            }}
          >
            <Pill text={listing.attributes}></Pill>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  roundButton: {
    backgroundColor: COLORS.SECONDARY_RED,
    borderRadius: 100,
    width: 90,
    height: 90,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  label: {
    paddingLeft: SPACING.SMALL,
    paddingTop: SPACING.SMALL,
    fontWeight: FONT_WEIGHT.BOLD,
  },
  value: { paddingHorizontal: SPACING.SMALL },
});
