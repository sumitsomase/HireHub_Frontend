import AsyncStorage from "@react-native-async-storage/async-storage";

const USER_EMAIL_KEY = "userEmail";

export const saveUserEmail = async (email) => {
  try {
    await AsyncStorage.setItem(USER_EMAIL_KEY, email);
  } catch (error) {
    console.error("Failed to save user email to AsyncStorage", error);
  }
};

export const getUserEmail = async () => {
  try {
    return await AsyncStorage.getItem(USER_EMAIL_KEY);
  } catch (error) {
    console.error("Failed to fetch user email from AsyncStorage", error);
    return null;
  }
};

export const removeUserEmail = async () => {
  try {
    await AsyncStorage.removeItem(USER_EMAIL_KEY);
  } catch (error) {
    console.error("Failed to remove user email from AsyncStorage", error);
  }
};
