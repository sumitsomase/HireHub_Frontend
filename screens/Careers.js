import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Share,
  ScrollView,
  Image,
  Linking,
  TouchableOpacity,
  Alert,
  Dimensions,
} from "react-native";
const { width, height } = Dimensions.get("window");

const Careers = () => {
  const handleShareCV = () => {
    Alert.alert(
      "Share Your CV",
      "Please share your CV at sumitsomase65@gmail.com",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.cardforrtext}>
          <Text style={styles.jointext}>JOIN US IN OUR MISSION</Text>
        </View>

        <Text style={styles.createtext}>
          To #showcase your creativity with HireHub.
        </Text>

        <View style={styles.adjustimg}>
          <Image
            source={require("../assets/matrix.webp")}
            style={styles.imgone}
          ></Image>
        </View>

        <Text style={styles.brandtext}>Explore Internships:</Text>

        <TouchableOpacity onPress={handleShareCV}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.cardinternship}>
              <Image
                source={require("../assets/internship.jpeg")}
                style={styles.intern}
              ></Image>
            </View>

            <ScrollView>
              <Text style={styles.interntext}>HireHub Fresher Hiring</Text>
              <Text style={styles.internonetext}>React Intern</Text>
            </ScrollView>
          </ScrollView>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleShareCV}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.cardinternshiptwo}>
              <Image
                source={require("../assets/internshiptwo.jpeg")}
                style={styles.interntwo}
              ></Image>
            </View>

            <ScrollView>
              <Text style={styles.interntwotext}>HireHub Fresher Hiring</Text>
              <Text style={styles.internthreetext}>Node.js Intern</Text>
            </ScrollView>
          </ScrollView>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleShareCV}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.cardinternshipthree}>
              <Image
                source={require("../assets/internshipthree.jpeg")}
                style={styles.internthree}
              ></Image>
            </View>

            <ScrollView>
              <Text style={styles.internfivetext}>HireHub Fresher Hiring</Text>
              <Text style={styles.internfourtext}>Backend Intern</Text>
            </ScrollView>
          </ScrollView>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Careers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "1%",
  },

  imgone: {
    height: height * 0.4, // Adjust height based on screen height (e.g., 40% of screen height)
    width: width * 0.99, // Adjust width based on screen width (e.g., 90% of screen width)
    marginTop: height * 0.05, // Adjust top margin based on screen height (e.g., 5% of screen height)
  },

  cardforrtext: {
    backgroundColor: "rgb(140, 50, 62)",
    borderRadius: 0,
    padding: 0,
    marginBottom: 0,
    marginHorizontal: width * 0.025, // Adjust horizontal margin based on screen width (e.g., 2.5% of screen width)
    marginTop: height * 0.05, // Adjust top margin based on screen height (e.g., 5% of screen height)
    height: height * 0.06, // Adjust height based on screen height (e.g., 7% of screen height)
    width: width * 0.85, // Adjust width based on screen width (e.g., 85% of screen width)
    marginStart: width * 0.08, // Adjust start margin based on screen width (e.g., 10% of screen width)
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  cardinternship: {
    backgroundColor: "#CAF4FF",
    borderRadius: 10,
    padding: 0,
    marginBottom: height * 0.05, // Adjust bottom margin based on screen height (e.g., 5% of screen height)
    marginHorizontal: width * 0.025, // Adjust horizontal margin based on screen width (e.g., 2.5% of screen width)
    marginTop: height * 0.07, // Adjust top margin based on screen height (e.g., 7% of screen height)
    height: height * 0.1, // Adjust height based on screen height (e.g., 10% of screen height)
    width: width * 0.3, // Adjust width based on screen width (e.g., 30% of screen width)
    marginStart: width * 0.0125, // Adjust start margin based on screen width (e.g., 1.25% of screen width)
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardinternshiptwo: {
    backgroundColor: "#CAF4FF",
    borderRadius: 10,
    padding: 0,
    marginBottom: height * 0.05, // Adjust bottom margin based on screen height (e.g., 5% of screen height)
    marginHorizontal: width * 0.025, // Adjust horizontal margin based on screen width (e.g., 2.5% of screen width)
    marginTop: height * 0.01, // Adjust top margin based on screen height (e.g., 1% of screen height)
    height: height * 0.1, // Adjust height based on screen height (e.g., 10% of screen height)
    width: width * 0.3, // Adjust width based on screen width (e.g., 30% of screen width)
    marginStart: width * 0.0125, // Adjust start margin based on screen width (e.g., 1.25% of screen width)
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardinternshipthree: {
    backgroundColor: "#CAF4FF",
    borderRadius: 10,
    padding: 0,
    marginBottom: height * 0.05, // Adjust bottom margin based on screen height (e.g., 5% of screen height)
    marginHorizontal: width * 0.025, // Adjust horizontal margin based on screen width (e.g., 2.5% of screen width)
    marginTop: height * 0.01, // Adjust top margin based on screen height (e.g., 1% of screen height)
    height: height * 0.1, // Adjust height based on screen height (e.g., 10% of screen height)
    width: width * 0.3, // Adjust width based on screen width (e.g., 30% of screen width)
    marginStart: width * 0.0125, // Adjust start margin based on screen width (e.g., 1.25% of screen width)
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  jointext: {
    color: "white",
    marginStart: width * 0.2, // Adjust start margin based on screen width (e.g., 20% of screen width)
    marginTop: height * 0.015, // Adjust top margin based on screen height (e.g., 1.5% of screen height)
    fontWeight: "bold",
  },

  createtext: {
    color: "black",
    marginStart: width * 0.16, // Adjust start margin based on screen width (e.g., 20% of screen width)
    marginTop: height * 0.015, // Adjust top margin based on screen height (e.g., 1.5% of screen height)
  },
  brandtext: {
    fontSize: width * 0.05, // Adjust font size based on screen width (e.g., 5% of screen width)
    marginTop: height * 0.03, // Adjust top margin based on screen height (e.g., 3% of screen height)
    marginStart: width * 0.025, // Adjust start margin based on screen width (e.g., 2.5% of screen width)
    fontWeight: "400", // Changed from "30" to "300" for valid fontWeight value
    color: "black",
  },

  intern: {
    height: height * 0.1, // Adjust height based on screen height (e.g., 10% of screen height)
    width: width * 0.3, // Adjust width based on screen width (e.g., 30% of screen width)
    borderRadius: 10,
  },
  interntext: {
    fontSize: width * 0.045, // Responsive font size
    marginTop: height * 0.07, // Responsive top margin
    marginStart: width * 0.025, // Responsive start margin
    fontWeight: "300",
    color: "black",
  },
  internonetext: {
    fontSize: width * 0.045, // Responsive font size
    marginTop: height * 0.01, // Responsive top margin
    marginStart: width * 0.025, // Responsive start margin
    fontWeight: "300",
    color: "black",
  },
  interntwo: {
    height: height * 0.1, // Responsive height
    width: width * 0.3, // Responsive width
    borderRadius: 10,
  },
  interntwotext: {
    fontSize: width * 0.045, // Responsive font size
    marginTop: height * 0.01, // Responsive top margin
    marginStart: width * 0.025, // Responsive start margin
    fontWeight: "300",
    color: "black",
  },
  internthreetext: {
    fontSize: width * 0.045, // Responsive font size
    marginTop: height * 0.01, // Responsive top margin
    marginStart: width * 0.025, // Responsive start margin
    fontWeight: "300",
    color: "black",
  },
  internthree: {
    height: height * 0.1, // Responsive height
    width: width * 0.3, // Responsive width
    borderRadius: 10,
  },
  internfivetext: {
    fontSize: width * 0.045, // Responsive font size
    marginTop: height * 0.01, // Responsive top margin
    marginStart: width * 0.025, // Responsive start margin
    fontWeight: "300",
    color: "black",
  },
  internfourtext: {
    fontSize: width * 0.045, // Responsive font size
    marginTop: height * 0.01, // Responsive top margin
    marginStart: width * 0.025, // Responsive start margin
    fontWeight: "300",
    color: "black",
  },
});
