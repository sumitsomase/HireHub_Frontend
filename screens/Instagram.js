import React from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
  View,
  Image,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const Instagram = () => {
  const navigation = useNavigation();

  const handleInstaJoin = () => {
    Linking.openURL(
      "https://www.instagram.com/hirehub_family?igsh=ZGNsZGdodXVzNjB1"
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.fortext}>
        <Text style={styles.firsttext}>Join Us</Text>
      </View>

      <View style={styles.instajoin}>
        <View style={styles.instajoincard}>
          <Image source={require("../assets/insta.png")} style={styles.insta} />
          <Text style={styles.instajointext}>
            Stay connected with us for the latest in hiring opportunities and
            thrilling content updates.
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleInstaJoin}>
            <Text style={styles.buttonText}>HireHub_Family</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.additionalText}>
          Students or job seekers can join our Instagram community where we
          daily provide job and internship opportunities. This helps students
          secure job placements and gain valuable experience.
        </Text>
        <Text style={styles.headingText}>By joining our group, you'll:</Text>
        <View style={styles.bulletContainer}>
          <Text style={styles.bulletPoint}>• Receive daily job alerts</Text>
          <Text style={styles.bulletPoint}>
            • Get notified about internship openings
          </Text>
          <Text style={styles.bulletPoint}>
            • Connect with industry professionals
          </Text>
          <Text style={styles.bulletPoint}>• Access resume-building tips</Text>
          <Text style={styles.bulletPoint}>
            • Participate in exclusive webinars
          </Text>
          <Text style={styles.bulletPoint}>
            • Get career counseling from experts
          </Text>
          <Text style={styles.bulletPoint}>
            • Network with peers and mentors
          </Text>
          <Text style={styles.bulletPoint}>
            • Stay updated on hiring trends
          </Text>
          <Text style={styles.bulletPoint}>
            • Find mentorship opportunities
          </Text>
          <Text style={styles.bulletPoint}>
            • Enhance your employability skills
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Instagram;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: "5%",
    backgroundColor: "#f8f8f8",
  },
  fortext: {
    marginBottom: height * 0.05, // Responsive bottom margin
  },
  firsttext: {
    fontSize: width * 0.07, // Responsive font size
    marginTop: height * 0.03, // Responsive top margin
    textAlign: "center",
    fontWeight: "bold",
    color: "#333",
  },
  instajoin: {
    marginBottom: height * 0.06, // Responsive bottom margin
    alignItems: "center",
  },
  instajoincard: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: width * 0.05, // Responsive padding
    marginBottom: height * 0.02, // Responsive bottom margin
    width: width * 0.9, // Responsive width
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center",
  },
  instajointext: {
    fontSize: width * 0.045, // Responsive font size
    color: "#333",
    fontWeight: "bold",
    marginTop: height * 0.02, // Responsive top margin
    textAlign: "center",
  },
  insta: {
    height: height * 0.08, // Responsive height
    width: width * 0.45, // Responsive width
  },
  button: {
    backgroundColor: "#9239e3",
    paddingVertical: height * 0.015, // Responsive vertical padding
    paddingHorizontal: width * 0.25, // Responsive horizontal padding
    borderRadius: 10,
    marginTop: height * 0.04, // Responsive top margin
  },
  buttonText: {
    color: "#fff",
    fontSize: width * 0.04, // Responsive font size
    textAlign: "center",
    fontWeight: "bold",
  },
  additionalText: {
    fontSize: width * 0.04, // Responsive font size
    color: "#555",
    textAlign: "center",
    marginTop: height * 0.02, // Responsive top margin
    paddingHorizontal: width * 0.05, // Responsive horizontal padding
  },
  headingText: {
    fontSize: width * 0.05, // Responsive font size
    color: "#333",
    textAlign: "center",
    marginTop: height * 0.03, // Responsive top margin
    fontWeight: "bold",
  },
  bulletContainer: {
    marginTop: height * 0.02, // Responsive top margin
    paddingHorizontal: width * 0.05, // Responsive horizontal padding
  },
  bulletPoint: {
    fontSize: width * 0.04, // Responsive font size
    color: "#555",
    textAlign: "left",
    marginVertical: height * 0.005, // Responsive vertical margin
  },
});
