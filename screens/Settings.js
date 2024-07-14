import React, { useContext, useState } from "react";
import {
  View,
  Text,
  Switch,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeContext } from "./themeContext";
import HelpCenterScreen from "./HelpCenterScreen"; // Import the new Help Center screen

const Settings = ({ navigation }) => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  const [isPushEnabled, setIsPushEnabled] = useState(true); // Assuming notifications are enabled by default

  const handlePushNotificationToggle = (value) => {
    setIsPushEnabled(value);
  };

  const handleLogout = async () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to log out?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: async () => {
            try {
              await AsyncStorage.removeItem("userEmail");
              navigation.navigate("Sign in");
            } catch (error) {
              console.error(
                "Error removing user email from AsyncStorage",
                error
              );
            }
          },
        },
      ],
      { cancelable: false }
    );
  };

  const handleTemporaryUnavailable = () => {
    Alert.alert(
      "Temporary Unavailable",
      "Change Password feature is temporarily unavailable. Please try again later."
    );
  };

  const styles = createStyles(isDarkMode);

  return (
    <ScrollView style={styles.container}>
      {/* Account Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account Settings</Text>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.optionText}>Profile Information</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={handleTemporaryUnavailable}
        >
          <Text style={styles.optionText}>Change Password</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Notification Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notification Settings</Text>
        <View style={styles.option}>
          <Text style={styles.optionText}>Push Notifications</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={handlePushNotificationToggle}
            value={isPushEnabled}
          />
        </View>
      </View>

      {/* Dark Mode */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dark Mode</Text>
        <View style={styles.option}>
          <Text style={styles.optionText}>Dark Mode</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleDarkMode}
            value={isDarkMode}
          />
        </View>
      </View>

      {/* Support and Feedback */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support and Feedback</Text>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("HireHub Help Center")}
        >
          <Text style={styles.optionText}>Help Center</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("Feedback")}
        >
          <Text style={styles.optionText}>Feedback</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      </View>

      {/* Privacy Policy */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Privacy Policy</Text>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("Privacy Policy")}
        >
          <Text style={styles.optionText}>View Privacy Policy</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      </View>

      {/* App Version */}
      <View style={styles.versionSection}>
        <Text style={styles.versionText}>Version 1.0.0</Text>
      </View>
    </ScrollView>
  );
};

const createStyles = (isDarkMode) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? "#333333" : "#ffffff",
    },
    section: {
      marginVertical: 20,
      paddingHorizontal: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: isDarkMode ? "#ffffff" : "#000000",
      marginBottom: 10,
    },
    option: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical: 10,
      paddingVertical: 10,
      paddingHorizontal: 10,
      backgroundColor: isDarkMode ? "#444444" : "#f0f0f0",
      borderRadius: 5,
    },
    optionText: {
      fontSize: 16,
      color: isDarkMode ? "#ffffff" : "#000000",
    },
    button: {
      backgroundColor: "#007bff",
      padding: 10,
      borderRadius: 5,
      marginVertical: 5,
    },
    buttonText: {
      color: "#ffffff",
      textAlign: "center",
    },
    arrow: {
      color: "#007bff",
      fontSize: 18,
    },
    versionSection: {
      alignItems: "center",
      marginVertical: 20,
    },
    versionText: {
      fontSize: 16,
      color: "#808080",
    },
  });

export default Settings;
