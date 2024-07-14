import React, { useState } from "react";
import { WebView } from "react-native-webview";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Linking,
} from "react-native";

const { width } = Dimensions.get("window");

const Tcsnqt = () => {
  const handletcsnqtonPress = () => {
    Linking.openURL("https://www.tcsion.com/hub/national-qualifier-test/");
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.Productbased}>
          <Text style={styles.firsttext}>TCS NQT Registration Process</Text>

          <Text style={styles.secondtext}>
            <Text style={styles.bold}>Step 1:</Text> Go to the official website
            of the TCS NQT portal.
          </Text>

          <Text style={styles.threetext}>
            <Text style={styles.bold}>Step 2:</Text> Once you are on the
            homepage, click on the 'Register/Login' tab.
          </Text>

          <Text style={styles.fourtext}>
            <Text style={styles.bold}>Step 3:</Text> A new webpage will open up
            that will ask you to register for free using your respective Email
            IDs.
          </Text>

          <Text style={styles.sixtext}>
            <Text style={styles.bold}>Step 4:</Text> Use your email ID and set a
            strong password. Do not share these credentials with anyone.{" "}
          </Text>

          <Text style={styles.seventext}>
            <Text style={styles.bold}>Step 5:</Text> Do not forget to save your
            credentials for future logins.
          </Text>

          <Text style={styles.eighttext}>
            <Text style={styles.bold}>Step 6:</Text> Now the candidate will be
            directed to a new webpage where they will be asked to submit their
            personal details including Name, Mobile Number, Educational
            Qualifications, etc. Enter all these details carefully.
          </Text>

          <Text style={styles.ninetext}>
            <Text style={styles.bold}>Step 7:</Text> Proofread the details
            before hitting the submit option.
          </Text>

          <Text style={styles.tentext}>
            <Text style={styles.bold}>Step 8:</Text> A OTP (One Time Password)
            will be sent to your Registered Email ID and Mobile Number for the
            completion of the verification process.
          </Text>

          <Text style={styles.oneonetext}>
            <Text style={styles.bold}>Step 9:</Text> Enter the required OTP
            before it expires. You’ll receive an official notification saying
            that you have been officially registered under the TCS NQT portal as
            an applicant for the upcoming TCS NQT exams.{" "}
          </Text>

          <Text style={styles.twotwotext}>
            <Text style={styles.bold}>Step 10:</Text> Use your registered email
            and password to access your account and carry out any other
            functions in the future.{" "}
          </Text>
        </View>

        <View style={styles.videoContainer}>
          <WebView
            style={styles.video}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            allowsFullscreenVideo={true}
            source={{
              uri: "https://www.youtube.com/embed/lomZ1JboH_c?si=qDeYziJ8W93gtIYU",
            }}
            mediaPlaybackRequiresUserAction={false}
          />
        </View>

        <View style={styles.visit}>
          <Text style={styles.visittext}>TCS|NQT</Text>

          <TouchableOpacity
            style={styles.buttontwo}
            onPress={handletcsnqtonPress}
          >
            <Text style={styles.buttonText}>APPLY NOW</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Tcsnqt;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "1%",
  },

  firsttext: {
    fontSize: 19,
    marginTop: 25,
    textAlign: "center",
    fontWeight: "bold",
    color: "#0E46A3",
  },

  secondtext: {
    fontSize: 16,
    marginTop: 40,
    lineHeight: 24,
    textAlign: "justify",
    color: "#555",
    marginStart: 10,
    marginRight: 5,
  },
  threetext: {
    fontSize: 16,
    marginTop: 10,
    lineHeight: 24,
    textAlign: "justify",
    color: "#555",
    marginStart: 10,
    marginRight: 5,
  },
  fourtext: {
    fontSize: 16,
    marginTop: 10,
    lineHeight: 24,
    textAlign: "justify",
    color: "#555",
    marginStart: 10,
    marginRight: 5,
  },

  sixtext: {
    fontSize: 16,
    marginTop: 0,
    lineHeight: 24,
    textAlign: "justify",
    color: "#555",
    marginStart: 10,
    marginRight: 5,
  },
  seventext: {
    fontSize: 16,
    marginTop: 0,
    lineHeight: 24,
    textAlign: "justify",
    color: "#555",
    marginStart: 10,
    marginRight: 5,
  },
  eighttext: {
    fontSize: 16,
    marginTop: 10,
    lineHeight: 24,
    textAlign: "justify",
    color: "#555",
    marginStart: 10,
    marginRight: 5,
  },
  ninetext: {
    fontSize: 16,
    marginTop: 20,
    lineHeight: 24,
    textAlign: "justify",
    color: "#555",
    marginStart: 10,
    marginRight: 5,
  },
  tentext: {
    fontSize: 16,
    marginTop: 20,
    lineHeight: 24,
    textAlign: "justify",
    color: "#555",
    marginStart: 10,
    marginRight: 5,
  },
  oneonetext: {
    fontSize: 16,
    marginTop: 20,
    lineHeight: 24,
    textAlign: "justify",
    color: "#555",
    marginStart: 10,
    marginRight: 5,
  },
  twotwotext: {
    fontSize: 16,
    marginTop: 0,
    lineHeight: 24,
    textAlign: "justify",
    color: "#555",
    marginStart: 10,
    marginRight: 5,
    marginBottom: 30,
  },

  bold: {
    fontWeight: "bold",
    color: "black",
  },

  videoContainer: {
    height: 230,
    marginTop: 30,
    marginBottom: 30,
  },
  video: {
    flex: 1,
  },

  visittext: {
    fontSize: 19,
    marginTop: 25,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },

  buttontwo: {
    backgroundColor: "#9947e5",
    paddingVertical: width * 0.03,
    paddingHorizontal: width * 0.25,
    borderRadius: 10,
    marginBottom: width * 0.1,
    marginStart: width * 0.075,
    marginEnd: width * 0.075,
  },

  buttonText: {
    color: "#fff",
    fontSize: width * 0.04,
    textAlign: "center",
    fontWeight: "bold",
  },
});
