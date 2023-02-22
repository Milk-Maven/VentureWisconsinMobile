import React from "react";
import { Text, View } from "react-native";
import { FormGroup } from "../../components/FormGroup";
import { t } from "../../providers/providers";
import { ERROR_MESSAGES, globalStyles, STORAGE_KEYS } from "../../utils/consts";
import { User } from "../../../VentureWisconsinShared";
import { z } from "zod";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
          onSubmit={(user: User) => {
            hook.mutate(user as any, {
              onSuccess: (res) => {
                console.log(res);
                // AsyncStorage.removeItem(STORAGE_KEYS.EMAIL);
                // AsyncStorage.removeItem(STORAGE_KEYS.SESSION);
                AsyncStorage.setItem(STORAGE_KEYS.EMAIL, res.email);
                AsyncStorage.setItem(STORAGE_KEYS.SESSION, res.password);
              },
            }); // trpc being dumb
          }}
        />
      </View>
    </View>
  );
};
