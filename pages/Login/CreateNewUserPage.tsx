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
          onSubmit={async (user: User) => {
            const response = (await hook.mutate(
              user as any
            )) as unknown as User; // trpc being dumb
            console.log(response);
            AsyncStorage.setItem(STORAGE_KEYS.EMAIL, response.email);
            AsyncStorage.setItem(STORAGE_KEYS.SESSION, response.password);
          }}
        />
      </View>
    </View>
  );
};
