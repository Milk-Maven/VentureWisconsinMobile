import { Listing } from "../../../VentureWisconsinShared";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  COLORS,
  FONT_SIZE,
  FONT_WEIGHT,
  globalStyles,
  SPACING,
} from "../..//utils/consts";
export const DisplayListing: React.FC<{
  listing: Listing;
}> = ({ listing }) => {
  const [imageHeight, setImageHeight] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);
  if (listing.images) {
    Image.getSize(listing.images, (width, height) => {
      const screenWidth = Dimensions.get("window").width;
      const scaleFactor = width / screenWidth;
      setImageHeight(height / scaleFactor - 60);
      setImageWidth(Dimensions.get("window").width - 60);
    });
  }
  return (
    <>
      <ScrollView>
        <View style={globalStyles.textBubble}>
          <Text style={globalStyles.textBubbleHeader}>
            {listing.displayTitle}
          </Text>
          {listing.images && (
            <Image
              progressiveRenderingEnabled={true}
              source={{
                uri: listing.images,
              }}
              style={{
                width: imageWidth,
                height: imageHeight,
                marginHorizontal: 15,
              }}
            />
          )}
          <Text
            style={{
              fontSize: FONT_SIZE.MEDIUM,
              textAlign: "center",
              paddingVertical: 10,
              color: COLORS.BLACK,
            }}
          >
            {listing.subTitle}
          </Text>
        </View>
        <View style={globalStyles.textBubble}>
          <Text style={styles.label}>Category</Text>
          <Text style={styles.value}>{listing.category}</Text>
        </View>
        <View style={globalStyles.textBubble}>
          <Text style={styles.label}>Description</Text>
          <Text style={styles.value}>{listing.description}</Text>
        </View>
        <View style={globalStyles.textBubble}>
          <Text style={styles.label}>Address</Text>
          <Text style={styles.value}>{listing.address}</Text>
        </View>
        <View style={{ ...globalStyles.textBubble, marginBottom: 20 }}>
          <Text style={styles.label}>Attributes</Text>
          <Text style={styles.value}>{listing.attributes}</Text>
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
    fontWeight: FONT_WEIGHT.BOLD,
  },
  value: { paddingHorizontal: SPACING.SMALL },
});
