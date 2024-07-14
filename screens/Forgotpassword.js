import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

const API_URL = "https://hirehub-yc97.onrender.com/api/auth/forgot-password";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email }),
      });
      const data = await response.json();
      if (response.ok) {
        Alert.alert("Success", data.message);
        navigation.navigate("Verify Your OTP", { email: email });
      } else {
        Alert.alert("Error", data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      Alert.alert("Error", "Failed to reset password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <Text style={styles.instructions}>
        Enter your email address to reset your password:
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {loading ? (
        <ActivityIndicator size="large" color="#6200EE" />
      ) : (
        <Button
          title="Reset Password"
          onPress={handleForgotPassword}
          color="#6200EE"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#6200EE",
  },
  instructions: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#6200EE",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
  },
});

export default ForgotPassword;
