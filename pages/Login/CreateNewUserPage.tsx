import React from "react";
import { Text, View } from "react-native";
import { FormGroup } from "../../components/FormGroup";
import { t } from "../../providers/providers";
import {
  ERROR_MESSAGES,
  globalStyles,
  ROUTES,
  STORAGE_KEYS,
} from "../../utils/consts";
import { User } from "../../../VentureWisconsinShared";
import { z } from "zod";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationLink } from "../../components/NavigationLink";
import { useNavigation } from "@react-navigation/native";
import { useRecoilState } from "recoil";
import { UserSession } from "../../providers/Auth";
import { atomSession } from "../../utils/recoil";
import Toast from "react-native-toast-message";
const user: Omit<User, "createdAt" | "id" | "role"> = {
  firstName: "",
  lastName: "",
  password: "",
  email: "",
};
const formKeys = Object.keys(user);
export const createNewUserSchema = z.object({
  firstName: z
    .string()
    .regex(
      ERROR_MESSAGES.LETTERS_ONLY.REGEX,
      ERROR_MESSAGES.LETTERS_ONLY.MESSAGE
    ),
  lastName: z
    .string()
    .regex(
      ERROR_MESSAGES.LETTERS_ONLY.REGEX,
      ERROR_MESSAGES.LETTERS_ONLY.MESSAGE
    ),
  password: z.string().min(8).max(16),
  email: z.string().email(),
});

export const CreateNewUserPage = () => {
  const hook = t.userCreate.useMutation();
  const [session, setUserSession] = useRecoilState<UserSession>(atomSession);
  const onSubmit = async (user: any) => {
    const res = await hook.mutate(user, {
      onSuccess: (res) => {
        AsyncStorage.setItem(STORAGE_KEYS.EMAIL, res.email);
        AsyncStorage.setItem(STORAGE_KEYS.SESSION, res.session);

        setUserSession({ email: res.email, session: res.session });
        // @ts-ignore
        useNavigation(ROUTES.LISTING_PAGE, {});
      },

      onError: (err) => {
        Toast.show({
          type: "error",
          text1: "failed to create account, please try again",
          position: "bottom",
        });
      },
    });
  };
  return (
    <View style={globalStyles.pageContainer}>
      <View style={globalStyles.textBubble}>
        <Text style={globalStyles.textBubbleHeader}>Create Account</Text>
        <FormGroup
          formDefaultValue={user}
          formKeys={
            formKeys as Array<keyof Omit<User, "createdAt" | "id" | "role">>
          }
          formValidator={createNewUserSchema}
          onSubmit={onSubmit}
        />

        <NavigationLink
          text="Already have an account? Login here"
          route={ROUTES.LOGIN_PAGE}
        />
      </View>
    </View>
  );
};
