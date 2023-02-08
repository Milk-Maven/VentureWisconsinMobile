import React from "react";
import { Text, View } from "react-native";
import { COLORS, FONT_WEIGHT } from "../utils/consts";

export const Pill: React.FC<{ text: string | null }> = ({ text }) => {
  if (!text) {
    return <></>;
  }
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: COLORS.BLACK,
        borderRadius: 20,
        backgroundColor: COLORS.MAIN_YELLOW,
        paddingHorizontal: 7,
        paddingVertical: 2,
        alignSelf: "flex-start",
      }}
    >
      <Text
        style={{
          fontWeight: FONT_WEIGHT.BOLD,
          color: COLORS.BLACK,
        }}
      >
        {text}
      </Text>
    </View>
  );
};
