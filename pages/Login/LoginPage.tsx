import React from "react";
import { Text, View } from "react-native";
import { useRecoilState } from "recoil";
import { z } from "zod";
import { FormGroup } from "../../components/FormGroup";
import { NavigationLink } from "../../components/NavigationLink";
import { UserSession } from "../../providers/Auth";
import { t } from "../../providers/providers";
import { globalStyles, ROUTES } from "../../utils/consts";
import { atomSession } from "../../utils/recoil";
import Toast from "react-native-toast-message";
export const LoginFormInput = { email: "", password: "" };
export const LoginPage = () => {
  const hook = t.userLogin.useMutation();
  const [session, setUserSession] = useRecoilState<UserSession>(atomSession);
  return (
    <View style={globalStyles.pageContainer}>
      <View style={globalStyles.textBubble}>
        <Text style={globalStyles.textBubbleHeader}>Login</Text>
        <FormGroup
          formDefaultValue={LoginFormInput}
          formKeys={["email", "password"]}
          formValidator={loginSchema}
          onSubmit={async ({ email, password }) => {
            const res = await hook.mutate(
              { email, password },
              {
                // @ts-ignore
                onSuccess: (res: UserSession) => {
                  if (res.email && res.session) {
                    setUserSession(res);
                  } else {
                    Toast.show({
                      type: "error",
                      text1: "Invalid password or email.",
                      position: "bottom",
                    });
                  }
                },
              }
            );
          }}
        />
        <NavigationLink
          text="Need to create an account?"
          route={ROUTES.CREATE_NEW_USER_PAGE}
        />
      </View>
    </View>
  );
};

export const loginSchema = z.object({
  email: z.string().min(1),
  password: z.string().min(8),
});
