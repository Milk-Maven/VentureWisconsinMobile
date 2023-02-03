import { Listing } from "../../VentureWisconsinShared";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { COLORS, FONT_SIZE, FONT_WEIGHT, SPACING } from "../utils/consts";

export const DisplayListing: React.FC<{ listing: Listing }> = ({ listing }) => {
  const [imageHeight, setImageHeight] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);
  Image.getSize(listing.images, (width, height) => {
    // calculate image width and height
    const screenWidth = Dimensions.get("window").width;
    const scaleFactor = width / screenWidth;
    setImageHeight(height / scaleFactor - 30);
    setImageWidth(Dimensions.get("window").width - 30);
  });
  return (
    <>
      <ScrollView>
        <Text
          style={{
            fontSize: FONT_SIZE.X_LARGE,
            textAlign: "center",
            padding: 5,
          }}
        >
          {listing.name}
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
            borderRadius: 15,
          }}
        />

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
        <View style={styles.textBubble}>
          <Text style={styles.label}>Attributes</Text>
          <Text style={styles.value}>{listing.attributes}</Text>
        </View>
        <View
          style={{
            ...styles.textBubble,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            padding: SPACING.SMALL,
            paddingHorizontal: SPACING.MEDIUM,
          }}
        >
          <RoundButton
            text="DIRECTIONS"
            onPress={() => {
              console.log("clicked");
            }}
          ></RoundButton>
          <RoundButton
            text="ADD TO ITINERARY"
            onPress={() => {
              console.log("clicked");
            }}
          ></RoundButton>

          <RoundButton
            text="DEAL [COUPON]"
            onPress={() => {
              console.log("clicked");
            }}
          ></RoundButton>
        </View>
      </ScrollView>
    </>
  );
};
export const RoundButton: React.FC<{ text: string; onPress: Function }> = ({
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      style={styles.roundButton}
    >
      <Text
        style={{
          textAlign: "center",
          fontWeight: FONT_WEIGHT.BOLD,
          color: "white",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  roundButton: {
    backgroundColor: COLORS.SECONDARY_RED,
    borderRadius: 100,
    width: 95,
    height: 95,
    display: "flex",
    justifyContent: "center",
  },
  label: {
    paddingLeft: SPACING.SMALL,
    paddingTop: SPACING.SMALL,
    fontWeight: FONT_WEIGHT.BOLD,
  },
  value: { paddingHorizontal: SPACING.SMALL },
  textBubble: {
    backgroundColor: "white",
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 15,
    padding: 5,
  },
});
