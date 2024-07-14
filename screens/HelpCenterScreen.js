// HelpCenterScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";

// Enable LayoutAnimation for Android
if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const HelpCenterScreen = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (expanded === index) {
      setExpanded(null);
    } else {
      setExpanded(index);
    }
  };

  const faqData = [
    {
      question: "How do I reset my password?",
      answer:
        "Click on 'Forgot Password' on the login screen and follow the instructions.",
    },
    {
      question: "How do I contact support?",
      answer: "Navigate to the 'Contact Support' section in the Settings menu.",
    },
    {
      question: "How do I update my profile information?",
      answer: "Go to 'Profile Information' in the Account Settings section.",
    },
    {
      question: "How do I change my email address?",
      answer:
        "Visit the Account Settings and choose the option to update email.",
    },
    {
      question: "Is my information secure?",
      answer: "Yes, we use industry-standard encryption to protect your data.",
    },
    {
      question: "Can I use multiple devices with my account?",
      answer:
        "Yes, you can access your account from any device with your login credentials.",
    },
    {
      question: "How do I delete my account?",
      answer:
        "Contact support and request an account deletion. Please note, this action is irreversible.",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.background}>
        <Text style={styles.title}>Help Center</Text>

        {/* Frequently Asked Questions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>

          {faqData.map((faq, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() => toggleExpand(index)}
              style={[
                styles.faqItem,
                expanded === index && styles.faqItemExpanded,
              ]}
            >
              <Text style={styles.question}>{faq.question}</Text>
              {expanded === index && (
                <Text style={styles.answer}>{faq.answer}</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* Contact Us Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Us</Text>
          <Text style={styles.contactItem}>
            <Text style={styles.contactTitle}>Email:</Text>{" "}
            hirehub3022@gmail.com
          </Text>
          <Text style={styles.contactItem}>
            <Text style={styles.contactTitle}>Phone:</Text> +917219718979
          </Text>
          <Text style={styles.contactItem}>
            <Text style={styles.contactTitle}>Address:</Text>Pune
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0", // Light background color
  },
  background: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#007bff", // Blue text color
  },
  section: {
    marginVertical: 20,
    backgroundColor: "#f9f9f9", // Light gray background color
    borderRadius: 15,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333333", // Darker text color
  },
  faqItem: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#ffffff", // White background color
    borderWidth: 1,
    borderColor: "#e0e0e0", // Light gray border color
  },
  faqItemExpanded: {
    borderWidth: 1,
    borderColor: "#007bff", // Blue border color when expanded
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333", // Dark text color
  },
  answer: {
    fontSize: 16,
    marginTop: 10,
    color: "#666666", // Gray text color
  },
  contactItem: {
    fontSize: 16,
    marginBottom: 8,
  },
  contactTitle: {
    fontWeight: "bold",
    color: "#007bff", // Blue color for titles
  },
});

export default HelpCenterScreen;
