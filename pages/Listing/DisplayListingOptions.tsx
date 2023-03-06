import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Toast from "react-native-toast-message";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useRecoilState, useRecoilValue } from "recoil";
import { Listing } from "../../../VentureWisconsinShared";
import { UserSession } from "../../providers/Auth";
import { t } from "../../providers/providers";
import { COLORS, SPACING } from "../../utils/consts";
import { atomSelectedListing, atomSession } from "../../utils/recoil";
import openMap from "react-native-open-maps";
import { useIsFocused } from "@react-navigation/native";

type PinText = "pin it" | "unpin it";
export const DisplayListingOptions: React.FC<{
  onNext: Function;
  onPrevious: Function;
}> = ({ onNext, onPrevious }) => {
  const [pinText, setPinText] = useState<PinText>("pin it");
  const session = useRecoilValue<UserSession>(atomSession);
  const selectedListing = useRecoilValue<Listing | null>(atomSelectedListing);
  const pinListing = t.userPinListing.useMutation({});
  const userUnPinListing = t.userUnPinListing.useMutation();
  const getUserPins = t.getUserPins.useMutation({});
  const onPin = async () => {
    if (pinText === "pin it" && selectedListing) {
      await pinListing.mutate(
        {
          listingName: selectedListing.name,
          userEmail: session.email as string,
        },
        {
          onSuccess: () => {
            setPinText("unpin it");
            Toast.show({
              type: "success",
              text1: "successfully pinned",
              position: "bottom",
              visibilityTime: 1000,
            });
          },
        }
      );
    } else if (pinText === "unpin it" && selectedListing) {
      userUnPinListing.mutate(
        {
          listingName: selectedListing.name,
          userEmail: session.email as string,
        },
        {
          onSuccess: () => {
            setPinText("pin it");
            Toast.show({
              type: "success",
              text1: "successfully unpinned",
              position: "bottom",
              visibilityTime: 1000,
            });
          },
        }
      );
    }
  };
  useEffect(() => {
    console.log("uh");
  }, []);
  useEffect(() => {
    console.log("swap");
    if (session.email) {
      getUserPins.mutate(session.email, {
        onSuccess: (res) => {
          const isPinned = !!res.find((pin) => pin.id === selectedListing?.id);
          isPinned ? setPinText("unpin it") : setPinText("pin it");
        },
      });
    }
  }, [useIsFocused()]);
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
        onPress={() => onPrevious()}
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
        onPress={() => {
          openMap({ query: selectedListing?.name });
        }}
      >
        <MaterialIcons
          name="directions"
          size={25}
          style={{ textAlign: "center" }}
          color={COLORS.SECONDARY_RED}
        />
        <Text style={{ textAlign: "center" }}>directions</Text>
      </Pressable>
      <Pressable
        style={{ flex: 2, borderLeftWidth: 1 }}
        onPress={() => onPin()}
      >
        <MaterialIcons
          style={{ textAlign: "center" }}
          name="push-pin"
          size={25}
          color={COLORS.SECONDARY_RED}
        />
        <Text style={{ textAlign: "center" }}>{pinText}</Text>
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
        onPress={() => onNext()}
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
