import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useRecoilState } from "recoil";
import { Listing } from "../../../VentureWisconsinShared";
import { ImagePreview } from "../../components/ImagePreview";
import { UserSession } from "../../providers/Auth";
import { t } from "../../providers/providers";
import {
  FONT_SIZE,
  FONT_WEIGHT,
  globalStyles,
  SPACING,
  ROUTES,
  COLORS,
} from "../../utils/consts"; // get all listings that a user has bookmarked
import { atomSession } from "../../utils/recoil";

export const UserPins = () => {
  const [userPins, setUserPins] = useState<any[]>([]);

  const getUserPins = t.getUserPins.useMutation({});
  const [session, setUserSession] = useRecoilState<UserSession>(atomSession);
  useEffect(() => {
    if (session.email) {
      getUserPins.mutate(session.email, {
        onSuccess: (res) => {
          const pins = res.map((listing, i) => {
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
                  navigation.navigate(ROUTES.LISTING_PAGE, {
                    defaultListing: listing,
                  });
                }}
              >
                <ImagePreview imageURL={listing.image1} />
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
                  <Text>
                    Coupon {Math.random() > 0.5 ? "available" : "used"}
                  </Text>
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
          console.log(pins.length);
          setUserPins(pins);
        },
      });
    }
  }, [session]);
  const userUnPinListing = t.userUnPinListing.useMutation();
  const mockListing: Listing[] = [];
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View>
        <Text style={globalStyles.textBubbleHeader}>Pinned Activities</Text>
      </View>
      {userPins}
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
