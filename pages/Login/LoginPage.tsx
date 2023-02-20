import React from "react";
import { Text, View } from "react-native";
import { z } from "zod";
import { FormGroup } from "../../components/FormGroup";
import { t } from "../../providers/providers";
import { globalStyles } from "../../utils/consts";

export const LoginPage = () => {
  const hook = t.userLogin.useMutation();
  return (
    <View style={globalStyles.textBubble}>
      <Text style={globalStyles.textBubbleHeader}>Login</Text>
      <FormGroup
        formDefaultValue={{ username: "", password: "" }}
        formKeys={["username", "password"]}
        formValidator={loginSchema}
        onSubmit={(payload: any) => {
          // hook.mutate({ username: "tylerfischer", password: "helloasdfas" });
        }}
      />
    </View>
  );
};

export const loginSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(8),
});
