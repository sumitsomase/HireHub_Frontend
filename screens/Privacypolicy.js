import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const PrivacyPolicyScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Welcome to HireHub!</Text>
        <Text style={styles.paragraph}>
          At HireHub, we prioritize your privacy and are committed to protecting
          your personal information. This Privacy Policy outlines how we
          collect, use, and safeguard your data when you use our mobile
          application. By using HireHub, you agree to the terms outlined in this
          Privacy Policy.
        </Text>

        <Text style={styles.subsectionTitle}>Information We Collect</Text>
        <Text style={styles.paragraph}>
          Registration Data: When you register on our App, we collect personal
          information such as your name, email address, and phone number.
        </Text>
        <Text style={styles.paragraph}>
          Profile Information: Additional details you provide in your profile,
          including educational background, skills, and interests.
        </Text>

        <Text style={styles.subsectionTitle}>Usage Data</Text>
        <Text style={styles.paragraph}>
          We collect information on how you interact with the App, such as pages
          visited, time spent on pages, and other diagnostic data.
        </Text>

        <Text style={styles.subsectionTitle}>Device Information</Text>
        <Text style={styles.paragraph}>
          Information about the device you use to access the App, including IP
          address, browser type and version, operating system, and mobile
          network information.
        </Text>

        <Text style={styles.sectionTitle}>How We Use Your Information</Text>
        <Text style={styles.paragraph}>
          To Provide Services: We use your personal information to create and
          manage your account, provide you with access to educational content,
          company career pages, hackathon arrangements, job search portals, and
          guidance on job searching.
        </Text>
        <Text style={styles.paragraph}>
          To Improve Our Services: We analyze usage data to improve the app's
          features and user experience.
        </Text>

        <Text style={styles.sectionTitle}>Data Sharing and Disclosure</Text>
        <Text style={styles.paragraph}>
          No Third-Party Sharing: We do not share your personal information with
          any third parties.
        </Text>
        <Text style={styles.paragraph}>
          Legal Requirements: We may disclose your information if required by
          law or to protect our rights.
        </Text>

        <Text style={styles.sectionTitle}>Data Security</Text>
        <Text style={styles.paragraph}>
          We implement appropriate technical and organizational measures to
          protect your personal information against unauthorized access,
          alteration, disclosure, or destruction. However, please note that no
          method of transmission over the internet or method of electronic
          storage is completely secure.
        </Text>

        <Text style={styles.sectionTitle}>User Rights</Text>
        <Text style={styles.paragraph}>
          Access and Correction: You have the right to access and update your
          personal information.
        </Text>
        <Text style={styles.paragraph}>
          Account Deletion: You can request to delete your account at any time.
        </Text>

        <Text style={styles.sectionTitle}>Age Requirements</Text>
        <Text style={styles.paragraph}>
          Our app is designed for students of all ages. We do not knowingly
          collect personal information from children under the age of 13 without
          parental consent.
        </Text>

        <Text style={styles.sectionTitle}>Changes to This Privacy Policy</Text>
        <Text style={styles.paragraph}>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated effective date.
        </Text>

        <Text style={styles.sectionTitle}>Contact Us</Text>
        <Text style={styles.paragraph}>
          If you have any questions about this Privacy Policy or our data
          practices, please contact us at:
        </Text>
        <Text style={styles.contactInfo}>
          HireHub Support Team {"\n"}
          Name: Sumit Somase {"\n"}
          Email: hirehub3022@gmail.com {"\n"}
          Address: Pune
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0", // Light background
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  content: {
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
    color: "#333333", // Dark gray
  },
  subsectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 15,
    color: "#333333", // Dark gray
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 22,
    textAlign: "justify",
    color: "#666666", // Medium gray
  },
  contactInfo: {
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 22,
    marginTop: 10,
    color: "#666666", // Medium gray
  },
});

export default PrivacyPolicyScreen;
