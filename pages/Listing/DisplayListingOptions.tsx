import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { COLORS, SPACING } from "../../utils/consts";

export const DisplayListingOptions: React.FC<{
  onNext: Function;
  onPrevious: Function;
}> = ({ onNext, onPrevious }) => {
  return (
    <View
      style={{
        ...styles.textBubble,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        padding: SPACING.SMALL,
      }}
    >
      <Pressable
        style={{
          flex: 1,
        }}
        onPress={() => {
          onPrevious();
        }}
      >
        <MaterialIcons
          name="keyboard-arrow-left"
          style={{ textAlign: "left" }}
          size={40}
          color={COLORS.SECONDARY_RED}
        />
      </Pressable>
      <Pressable
        style={{
          flex: 2,
          borderLeftWidth: 1,
        }}
        onPress={() => {}}
      >
        <MaterialIcons
          name="directions"
          size={25}
          style={{ textAlign: "center" }}
          color={COLORS.SECONDARY_RED}
        />
        <Text style={{ textAlign: "center" }}>directions</Text>
      </Pressable>
      <Pressable style={{ flex: 2, borderLeftWidth: 1 }} onPress={() => {}}>
        <MaterialIcons
          style={{ textAlign: "center" }}
          name="push-pin"
          size={25}
          color={COLORS.SECONDARY_RED}
        />
        <Text style={{ textAlign: "center" }}>Pin it</Text>
      </Pressable>
      <Pressable style={{ flex: 2, borderLeftWidth: 1 }} onPress={() => {}}>
        <MaterialIcons
          name="description"
          style={{
            textAlign: "center",
            borderColor: COLORS.GREY,
            // bro,
          }}
          size={25}
          color={COLORS.SECONDARY_RED}
        />
        <Text style={{ textAlign: "center" }}>coupon</Text>
      </Pressable>
      <Pressable
        style={{ flex: 1, borderLeftWidth: 1 }}
        onPress={() => {
          onNext();
        }}
      >
        <MaterialIcons
          name="keyboard-arrow-right"
          style={{ textAlign: "right" }}
          size={40}
          color={COLORS.SECONDARY_RED}
        />
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  textBubble: {
    backgroundColor: "white",
    borderTopWidth: 2,
    borderColor: COLORS.GREY,
  },
});
