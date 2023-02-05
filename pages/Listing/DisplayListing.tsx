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
import { COLORS, FONT_SIZE, FONT_WEIGHT, SPACING } from "../..//utils/consts";
export const DisplayListing: React.FC<{
  listing: Listing;
}> = ({ listing }) => {
  const [imageHeight, setImageHeight] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);
  Image.getSize(listing.images, (width, height) => {
    const screenWidth = Dimensions.get("window").width;
    const scaleFactor = width / screenWidth;
    console.log(width);
    console.log(scaleFactor);
    console.log(height);
    setImageHeight(height / scaleFactor - 60);
    setImageWidth(Dimensions.get("window").width - 60);
  });
  return (
    <>
      <ScrollView>
        <View
          style={{
            borderRadius: 15,
            backgroundColor: COLORS.WHITE,
            margin: 15,
            marginTop: SPACING.MEDIUM,
          }}
        >
          <Text
            style={{
              fontSize: FONT_SIZE.LARGE,
              fontWeight: FONT_WEIGHT.BOLD,
              textAlign: "center",
              paddingVertical: 5,
            }}
          >
            {listing.displayTitle}
          </Text>
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
          {/* <Text
            style={{
              fontSize: FONT_SIZE.X_LARGE,
              color: COLORS.WHITE,
              textAlign: "center",
            }}
          >
            {listing.name}
          </Text> */}
        </View>
        <View style={styles.textBubble}>
          <Text style={styles.label}>Category</Text>
          <Text style={styles.value}>{listing.category}</Text>
        </View>
        <View style={styles.textBubble}>
          <Text style={styles.label}>Description</Text>
          <Text style={styles.value}>{listing.description}</Text>
        </View>
        <View style={styles.textBubble}>
          <Text style={styles.label}>Address</Text>
          <Text style={styles.value}>{listing.address}</Text>
        </View>
        <View style={{ ...styles.textBubble, marginBottom: 20 }}>
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
  textBubble: {
    backgroundColor: "white",
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 15,
    padding: 5,
    paddingVertical: 10,
  },
});
