import { Button } from "react-native";
import { useRecoilState } from "recoil";
import { clearSessionFromStorage, UserSession } from "../providers/Auth";
import { atomSession } from "../utils/recoil";

export const Dev = () => {
  const [session, setUserSession] = useRecoilState<UserSession>(atomSession);
  return (
    <>
      <Button
        onPress={() => {
          clearSessionFromStorage(setUserSession);
        }}
        title="remove session token"
      />
    </>
  );
};
