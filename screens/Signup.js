import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  Dimensions,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const API_URL = "https://hirehub-yc97.onrender.com/api/auth/register";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useNavigation();

  const handleSignup = async () => {
    try {
      if (!username || !email || !password || !confirmPassword) {
        Alert.alert("Error", "Please fill in all fields.");
        return;
      }

      if (password !== confirmPassword) {
        Alert.alert("Error", "Password and confirm password do not match.");
        return;
      }

      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      if (!passwordRegex.test(password)) {
        Alert.alert(
          "Error",
          "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number."
        );
        return;
      }

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Success", data.message || "Registration successful.");
      } else {
        Alert.alert("Error", data.message || "Registration failed.");
      }
    } catch (error) {
      console.error("Error occurred during registration:", error);
      Alert.alert("Error", "An error occurred. Please try again later.");
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Create an Account</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={setUsername}
          value={username}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.loginContainer}>
          <Text style={styles.alreadyAccount}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Sign in")}>
            <Text style={styles.login}>Log In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: width * 0.05,
  },
  title: {
    fontSize: width * 0.1,
    color: "#333",
    fontWeight: "bold",
    marginTop: height * 0.1,
    marginBottom: height * 0.05,
  },
  input: {
    width: "100%",
    height: height * 0.07,
    marginBottom: height * 0.02,
    paddingHorizontal: width * 0.04,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
    fontSize: width * 0.04,
    color: "#333",
  },
  button: {
    width: "100%",
    height: height * 0.07,
    backgroundColor: "#007bff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: height * 0.02,
  },
  buttonText: {
    color: "#fff",
    fontSize: width * 0.05,
    fontWeight: "bold",
  },
  loginContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: height * 0.03,
  },
  alreadyAccount: {
    color: "#333",
    fontSize: width * 0.04,
    marginRight: width * 0.02,
  },
  login: {
    color: "#007bff",
    fontSize: width * 0.04,
    fontWeight: "bold",
  },
});
