import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
export interface SegmentedButton {
  text: string;
  onClick: Function;
}
export const SegmentedButtons: React.FC<{
  buttons: SegmentedButton[];
}> = ({ buttons }) => {
  const [selectedButton, setSelectedButton] = useState(0);
  const buttonElements = buttons.map((button, i) => {
    let buttonStyles = styles.segmentedButtons;
    if (i === 0) {
      buttonStyles = { ...buttonStyles, ...styles.firstSegmentedButton };
    }
    if (i === buttons.length - 1) {
      buttonStyles = { ...buttonStyles, ...styles.lastSegmentedButton };
    }
    return (
      <TouchableOpacity
        key={`${i}`}
        onPress={() => {
          setSelectedButton(i);
          button.onClick();
        }}
        style={{
          ...buttonStyles,
          backgroundColor: i === selectedButton ? "#FAF43D" : "#bababa",
        }}
      >
        <Text style={styles.text}>{button.text}</Text>
      </TouchableOpacity>
    );
  });
  return <View style={styles.container}>{buttonElements}</View>;
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  segmentedButtons: {
    paddingVertical: 5,
    alignContent: "center",
    flexGrow: 1,
    flex: 1,
    paddingHorizontal: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#000",
    borderRightWidth: 1,
    backgroundColor: "#bababa",
    borderLeftWidth: 1,
  },
  text: {
    textAlign: "center",
  },
  firstSegmentedButton: {
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderRightWidth: 0,
  },
  lastSegmentedButton: {
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: "orange",
    borderLeftWidth: 0,
  },
});
