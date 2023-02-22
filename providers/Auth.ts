import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_KEYS } from "../utils/consts";
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
