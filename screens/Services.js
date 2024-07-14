import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  Linking,
} from "react-native";

const { width, height } = Dimensions.get("window");

const serviceshirehub = [
  {
    category: "Web Development",
    items: [
      "Custom Website Development",
      "E-commerce Solutions",
      "Web Application Development",
      "Responsive Web Design",
      "API Integration",
    ],
  },
  {
    category: "Mobile App Development",
    items: [
      "Android App Development",
      "Cross-Platform App Development (React Native)",
      "Mobile App Design",
      "App Maintenance and Support",
    ],
  },
  {
    category: "UI/UX Design",
    items: ["User Interface (UI) Design", "User Experience (UX) Design"],
  },
  {
    category: "Software Development",
    items: [
      "Custom Software Development",
      "Enterprise Software Solutions",
      "SaaS Development",
      "Software Integration",
    ],
  },
  {
    category: "IT Consulting",
    items: [
      "IT Strategy and Planning",
      "Technology Consulting",
      "IT Project Management",
      "System Integration",
    ],
  },
  {
    category: "Maintenance and Support",
    items: [
      "Website Maintenance",
      "App Maintenance",
      "Software Maintenance",
      "Technical Support",
    ],
  },
];

const Services = () => {
  const sendEmail = () => {
    Linking.openURL("mailto:hirehub3022@gmail.com");
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Our Services</Text>
        </View>

        {serviceshirehub.map((service, index) => (
          <View key={index} style={styles.serviceCategory}>
            <Text style={styles.categoryTitle}>{service.category}</Text>
            {service.items.map((item, idx) => (
              <Text key={idx} style={styles.serviceItem}>
                {item}
              </Text>
            ))}
          </View>
        ))}

        <View style={styles.contactBox}>
          <Text style={styles.contactText}>Contact Us</Text>
          <Text style={styles.infoText}>Mobile: +917219718979</Text>
          <Text style={styles.infoText} onPress={sendEmail}>
            Email: hirehub3022@gmail.com
          </Text>
          <Text style={styles.messageText}>
            Send a WhatsApp message or email to get in touch with HireHub
            Services.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "1%",
  },
  titleContainer: {
    backgroundColor: "rgb(140, 50, 62)",
    paddingVertical: height * 0.017,
    marginVertical: height * 0.05,
    marginHorizontal: width * 0.025,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  serviceCategory: {
    backgroundColor: "#EEF7FF",
    borderRadius: 10,
    marginVertical: height * 0.0125,
    padding: height * 0.025,
    marginHorizontal: width * 0.025,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: height * 0.0125,
    color: "#0E46A3",
  },
  serviceItem: {
    fontSize: 16,
    color: "#555555",
    marginBottom: height * 0.0125,
  },
  contactBox: {
    backgroundColor: "#00509E",
    padding: height * 0.025,
    marginVertical: height * 0.05,
    marginHorizontal: width * 0.025,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  contactText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: height * 0.015,
  },
  infoText: {
    fontSize: 16,
    color: "white",
    marginBottom: height * 0.0125,
  },
  messageText: {
    fontSize: 16,
    color: "white",
    marginTop: height * 0.025,
  },
});

export default Services;
