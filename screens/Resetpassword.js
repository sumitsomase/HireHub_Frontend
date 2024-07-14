import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Text,
  Linking,
} from "react-native";

const API_URL = "https://hirehub-yc97.onrender.com/api/auth/reset-password";

const Resetpassword = ({ route, navigation }) => {
  const { email } = route.params;
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: newPassword }),
      });
      const data = await response.json();
      if (response.ok) {
        Alert.alert("Success", data.message);
        navigation.navigate("Sign in"); // Navigate to login screen
      } else {
        Alert.alert("Error", data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      Alert.alert("Error", "Failed to reset password");
    }
  };

  const handleEmailPress = () => {
    Linking.openURL("mailto:hirehub3022@gmail.com");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.note}>
        Note: It is under maintenance. Please reset your password after 1 to 2
        days. If it's urgent, send a request email to{" "}
        <Text style={styles.emailLink} onPress={handleEmailPress}>
          hirehub3022@gmail.com
        </Text>{" "}
        to reset your password.
      </Text>
      <Text style={styles.title}>Reset Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your new password"
        onChangeText={(text) => setNewPassword(text)}
        value={newPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  note: {
    fontSize: 14,
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  emailLink: {
    color: "#007bff",
    textDecorationLine: "underline",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#fff",
    marginBottom: 20,
    color: "#333",
  },
  button: {
    width: "80%",
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Resetpassword;
