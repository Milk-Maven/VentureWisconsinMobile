import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_KEYS } from "../utils/consts";
import { NativeModules } from "react-native";

export interface UserSession {
  email: string | null;
  session: string | null;
}
export const needsToLoginOrCreateAccount = async (): Promise<UserSession> => {
  const email = await AsyncStorage.getItem(STORAGE_KEYS.EMAIL);
  if (email === null) {
    return { session: null, email: null };
  }
  const session = await AsyncStorage.getItem(STORAGE_KEYS.SESSION);
  return { session, email };
};
export const getSession = async (): Promise<UserSession> => {
  const email = await AsyncStorage.getItem(STORAGE_KEYS.SESSION);
  const session = await AsyncStorage.getItem(STORAGE_KEYS.EMAIL);
  return { email, session };
};
export const clearSessionFromStorage = async (
  clearRecoil: Function
): Promise<void> => {
  clearRecoil({ email: null, session: null });
  AsyncStorage.removeItem(STORAGE_KEYS.SESSION);
  AsyncStorage.removeItem(STORAGE_KEYS.EMAIL);
  const email = await AsyncStorage.getItem(STORAGE_KEYS.SESSION);
  const session = await AsyncStorage.getItem(STORAGE_KEYS.EMAIL);
  NativeModules.DevSettings.reload();
};
