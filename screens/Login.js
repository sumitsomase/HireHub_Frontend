import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  View,
  Alert,
  Dimensions,
  ActivityIndicator,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { saveUserEmail, getUserEmail } from "./asyncstorage"; // Adjust the path as necessary

const API_URL = "https://hirehub-yc97.onrender.com/api/auth/login";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const storedEmail = await getUserEmail();
      if (storedEmail) {
        console.log("Stored Email:", storedEmail); // Log the stored email
        navigation.navigate("HomeScreen"); // Replace 'HomeScreen' with your home screen
      }
    };

    checkLoginStatus();
  }, [navigation]);

  const handleLogin = useCallback(async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const responseData = await response.json();

      if (response.ok && responseData.message === "Login success") {
        await saveUserEmail(email);
        console.log("Email saved to AsyncStorage:", email); // Log the email saved to AsyncStorage
        navigation.navigate("HomeScreen"); // Replace 'HomeScreen' with your home screen
      } else {
        Alert.alert(
          "Login Failed",
          responseData.message === "Email not exists"
            ? "Email does not exist."
            : responseData.message === "Wrong Password"
            ? "Incorrect password."
            : "An error occurred. Please try again."
        );
      }
    } catch (error) {
      console.error("Login Error:", error);
      Alert.alert(
        "Error",
        "An error occurred while logging in. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }, [email, password, navigation]);

  const handleGoogleLogin = useCallback(() => {
    Alert.alert(
      "Temporary Unavailability",
      "Sign in with Google is temporarily unavailable. Please use Sign Up."
    );
  }, []);

  return (
    <ImageBackground
      source={require("../assets/background_img_01.jpg")}
      style={styles.background}
    >
      <View style={styles.container}>
        <TextInput
          style={styles.inputone}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          autoFocus
          accessibilityLabel="Email Input"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          accessibilityLabel="Password Input"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Forgot password")}
        >
          <Text style={styles.Forgotpassword}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Login</Text>
          )}
        </TouchableOpacity>
        <View style={styles.signupContainer}>
          <Text style={styles.createAccount}>Don't have an Account?</Text>
          <Text
            style={styles.signup}
            onPress={() => navigation.navigate("Sign Up")}
          >
            Sign Up
          </Text>
        </View>
        <View style={styles.signinwithContainer}>
          {/* Enhanced Google login button */}
          <TouchableOpacity
            style={styles.googleButton}
            onPress={handleGoogleLogin}
          >
            <Image
              source={require("../assets/google_img_05.png")}
              style={styles.googleIcon}
            />
            <Text style={styles.googleButtonText}>Sign in with Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  inputone: {
    width: windowWidth * 0.9,
    height: 48,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: "#fffff0",
    fontWeight: "bold",
    marginTop: windowHeight * 0.2,
  },

  input: {
    width: windowWidth * 0.9,
    height: 48,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: "#fffff0",
    fontWeight: "bold",
    marginTop: 10,
  },

  button: {
    backgroundColor: "blue",
    width: windowWidth * 0.7,
    paddingVertical: 10.5,
    borderRadius: 15,
    marginTop: 4,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  Forgotpassword: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "flex-end",
    marginLeft: "50%",
  },
  signupContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 20,
  },
  createAccount: {
    marginRight: 5,
    fontWeight: "bold",
  },
  signup: {
    fontWeight: "bold",
    color: "red",
  },
  signinwithContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 60,
    marginBottom: 20,
  },
  googleButton: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  googleIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  googleButtonText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
  },
});
