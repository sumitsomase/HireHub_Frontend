import React, { useState } from "react";
import Zocial from "react-native-vector-icons/Zocial";
import AntDesign from "react-native-vector-icons/AntDesign";
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
  Dimensions,
} from "react-native";
const { width, height } = Dimensions.get("window");

const About = () => {
  const sendEmail = () => {
    Linking.openURL("mailto:sumitsomase65@gmail.com");
  };
  const sendEmailtwo = () => {
    Linking.openURL("mailto:pritampatil0125@gmail.com");
  };
  const handlelinkedinPress = () => {
    Linking.openURL(
      "https://www.linkedin.com/in/sumit-somase-214365241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    );
  };
  const handlelinkedinpritiPress = () => {
    Linking.openURL("https://www.linkedin.com/in/pritam-patil-261275228");
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.Productbased}>
          <View style={styles.cardforrtext}>
            <Text style={styles.jointext}>ABOUT US</Text>
          </View>

          <Text style={styles.hirehubtext}>About HireHub:</Text>

          <Text style={styles.brandtext}>Company Profile and Brand:</Text>

          <Text style={styles.brandonetext}>
            HireHub is a comprehensive resource platform for job seekers,
            founded in 2024 by Sumit Somase and Pritam Patil. We offer extensive
            information on various company career pages, clearly differentiating
            between product-based and service-based companies. Our app also
            provides a curated list of ongoing hackathons from different
            platforms, helping users stay engaged and enhance their skills.
          </Text>
          <Text style={styles.brandtwotext}>
            In addition to this, HireHub explains the differences between
            product-based and service-based companies, guiding users in making
            informed decisions about which type of company might be a better fit
            for them. We also feature a dedicated section on top websites and
            apps for job searching, providing users with a variety of options to
            explore job opportunities.
          </Text>

          <Text style={styles.brandthreetext}>
            Our platform includes detailed information on the TCS NQT
            registration process, complemented by helpful video tutorials.
            Designed specifically for students and freshers, HireHub aims to
            assist users in navigating the job market and making well-informed
            career choices.
          </Text>

          <Text style={styles.brandfourtext}>
            HireHub is built on the principles of accessibility, expertise, and
            support. We strive to empower individuals by bridging the gap
            between academia and industry, creating a supportive community for
            job seekers. Our mission is to facilitate technological advancement
            and growth in the dynamic job market, helping users achieve their
            career goals.
          </Text>

          <Text style={styles.profiletext}>Company Founders/Directors:</Text>

          <Text style={styles.profileonetext}>
            <Text style={styles.bold}>Sumit Somase</Text>, one of our founders,
            is a visionary entrepreneur with a deep understanding of the job
            market. His commitment to providing valuable resources for job
            seekers laid the foundation for HireHub. Sumit's innovative approach
            and dedication to excellence have been crucial to the platform's
            development and success. As a guiding force behind HireHub, Sumit
            continues to inspire the team to push boundaries and create
            impactful solutions for our users.
          </Text>
          <Text style={styles.profiletwotext}>
            <Text style={styles.bold}>Pritam Patil</Text>, our co-founder, has a
            remarkable track record in developing user-centric applications. His
            technical expertise and forward-thinking mindset have been
            instrumental in shaping HireHub into a comprehensive platform for
            job seekers. Pritam's unwavering commitment to quality and
            innovation drives the continuous improvement of HireHub, ensuring it
            remains a trusted resource for students and freshers entering the
            job market.
          </Text>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Text style={styles.linetext}>
              -----------------------------------
            </Text>

            <Text style={styles.ourtext}>Our</Text>

            <Text style={styles.teamtext}> Team</Text>
            <Text style={styles.linetext}>---------------------------</Text>
          </ScrollView>

          <View style={styles.forcard}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.cardprofile}>
                <Image
                  source={require("../assets/sumit.jpg")}
                  style={styles.sumit}
                ></Image>
              </View>

              <ScrollView>
                <Text style={styles.sumittext}>Sumit Somase</Text>

                <Text style={styles.sumittextone}>Founder & CEO</Text>

                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <Zocial
                    name="email"
                    size={20}
                    color="#0E46A3"
                    style={styles.gmailicon}
                  />
                  <Text style={styles.gmailtext} onPress={sendEmail}>
                    sumitsomase65@gmail.com
                  </Text>
                </ScrollView>

                <TouchableOpacity onPress={handlelinkedinPress}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <AntDesign
                      name="linkedin-square"
                      size={20}
                      style={styles.linkedinicon}
                    />
                    <Text style={styles.linkedintext}>Sumit Somase </Text>
                  </ScrollView>
                </TouchableOpacity>
              </ScrollView>
            </ScrollView>
          </View>

          <View style={styles.forcard}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <ScrollView>
                <Text style={styles.prititext}>Pritam Patil</Text>

                <Text style={styles.prititextone}>Co-Founder</Text>

                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <Zocial
                    name="email"
                    size={20}
                    color="#0E46A3"
                    style={styles.pritiicon}
                  />
                  <Text style={styles.pritiicontext} onPress={sendEmailtwo}>
                    pritampatil0125@gmail.com
                  </Text>
                </ScrollView>

                <TouchableOpacity onPress={handlelinkedinpritiPress}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <AntDesign
                      name="linkedin-square"
                      size={20}
                      style={styles.pritilinkedinicon}
                    />
                    <Text style={styles.pritilinkedintext}>Pritam Patil </Text>
                  </ScrollView>
                </TouchableOpacity>
              </ScrollView>

              <View style={styles.priticardprofile}>
                <Image
                  source={require("../assets/priti.jpg")}
                  style={styles.priti}
                ></Image>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "1%",
  },

  abouttext: {
    fontSize: 22,
    marginTop: 25,
    textAlign: "center",
    fontWeight: "bold",
    color: "#0E46A3",
  },

  hirehubtext: {
    fontSize: width * 0.045, // Adjust font size based on screen width
    marginTop: 45, // Adjust top margin based on screen height
    marginStart: width * 0.025, // Adjust start margin based on screen width
    fontWeight: "bold",
    color: "#0E46A3",
  },

  brandtext: {
    fontSize: width * 0.045, // Adjust font size based on screen width
    marginTop: 25, // Adjust top margin based on screen height
    marginStart: width * 0.025, // Adjust start margin based on screen width
    fontWeight: "normal", // Corrected font weight
    color: "#0E46A3",
  },

  brandonetext: {
    fontSize: width * 0.035, // Adjust font size based on screen width
    marginTop: height * 0.02, // Adjust top margin based on screen height
    lineHeight: height * 0.03, // Adjust line height based on screen height
    textAlign: "justify", // Justify the text for a cleaner look
    color: "black", // Optional: Set a color for the text
    marginStart: width * 0.025, // Adjust start margin based on screen width
    marginRight: width * 0.0125, // Adjust right margin based on screen width
  },

  brandtwotext: {
    fontSize: width * 0.035, // Adjust font size based on screen width
    marginTop: height * 0.015, // Adjust top margin based on screen height
    lineHeight: height * 0.03, // Adjust line height based on screen height
    textAlign: "justify", // Justify the text for a cleaner look
    color: "#74CCC", // Optional: Set a color for the text
    marginStart: width * 0.025, // Adjust start margin based on screen width
    marginRight: width * 0.0125, // Adjust right margin based on screen width
  },

  brandthreetext: {
    fontSize: width * 0.035, // Adjust font size based on screen width
    //marginTop: height * 0.01, // Adjust top margin based on screen height
    lineHeight: height * 0.03, // Adjust line height based on screen height
    textAlign: "justify", // Justify the text for a cleaner look
    color: "#74CCC", // Optional: Set a color for the text
    marginStart: width * 0.025, // Adjust start margin based on screen width
    marginRight: width * 0.0125, // Adjust right margin based on screen width
  },

  brandfourtext: {
    fontSize: width * 0.035, // Adjust font size based on screen width
    marginTop: height * 0.015, // Adjust top margin based on screen height
    lineHeight: height * 0.03, // Adjust line height based on screen height
    textAlign: "justify", // Justify the text for a cleaner look
    color: "#74CCC", // Optional: Set a color for the text
    marginStart: width * 0.025, // Adjust start margin based on screen width
    marginRight: width * 0.0125, // Adjust right margin based on screen width
  },

  profiletext: {
    fontSize: width * 0.045, // Adjust font size based on screen width
    marginTop: height * 0.02, // Adjust top margin based on screen height
    marginStart: width * 0.025, // Adjust start margin based on screen width
    fontWeight: "300", // Adjust font weight
    color: "#0E46A3", // Set text color
  },

  profileonetext: {
    fontSize: width * 0.035, // Adjust font size based on screen width
    marginTop: height * 0.02, // Adjust top margin based on screen height
    lineHeight: height * 0.03, // Adjust line height based on screen height
    textAlign: "justify", // Justify the text for a cleaner look
    color: "black", // Optional: Set a color for the text
    marginStart: width * 0.025, // Adjust start margin based on screen width
    marginRight: width * 0.0125, // Adjust right margin based on screen width
  },

  profiletwotext: {
    fontSize: width * 0.035, // Adjust font size based on screen width
    marginTop: height * 0.01, // Adjust top margin based on screen height
    lineHeight: height * 0.03, // Adjust line height based on screen height
    textAlign: "justify", // Justify the text for a cleaner look
    color: "#74CCC", // Optional: Set a color for the text
    marginStart: width * 0.025, // Adjust start margin based on screen width
    marginRight: width * 0.0125, // Adjust right margin based on screen width
  },
  bold: {
    fontWeight: "bold",
    color: "black",
  },

  cardprofile: {
    backgroundColor: "#CAF4FF",
    borderRadius: width * 0.025, // Adjust border radius based on screen width
    padding: 0,
    marginBottom: height * 0.055, // Adjust bottom margin based on screen height
    marginHorizontal: width * 0.025, // Adjust horizontal margin based on screen width
    marginTop: height * 0.035, // Adjust top margin based on screen height
    height: height * 0.2, // Adjust card height based on screen height
    width: width * 0.3, // Adjust card width based on screen width
    marginStart: width * 0.0125, // Adjust start margin based on screen width
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: height * 0.0025, // Adjust shadow offset based on screen height
    },
    shadowOpacity: 0.25,
    shadowRadius: width * 0.01, // Adjust shadow radius based on screen width
    elevation: 5,
  },

  priticardprofile: {
    backgroundColor: "#CAF4FF",
    borderRadius: width * 0.025, // Adjust border radius based on screen width
    padding: 0,
    marginBottom: height * 0.065, // Adjust bottom margin based on screen height
    marginHorizontal: width * 0.025, // Adjust horizontal margin based on screen width
    marginTop: height * 0.035, // Adjust top margin based on screen height
    height: height * 0.2, // Adjust card height based on screen height
    width: width * 0.3, // Adjust card width based on screen width
    marginStart: width * 0.0875, // Adjust start margin based on screen width
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: height * 0.0025, // Adjust shadow offset based on screen height
    },
    shadowOpacity: 0.25,
    shadowRadius: width * 0.01, // Adjust shadow radius based on screen width
    elevation: 5,
  },
  sumit: {
    height: height * 0.2, // Adjust height based on screen height
    width: width * 0.3, // Adjust width based on screen width
    borderRadius: width * 0.025, // Adjust border radius based on screen width
  },

  sumittext: {
    fontSize: width * 0.045, // Adjust font size based on screen width
    marginTop: height * 0.065, // Adjust top margin based on screen height
    marginStart: width * 0.15, // Adjust start margin based on screen width
    fontWeight: "400", // Corrected to a valid fontWeight
    color: "#0E46A3",
  },

  sumittextone: {
    fontSize: width * 0.03, // Adjust font size based on screen width
    marginTop: 0,
    lineHeight: height * 0.03, // Adjust line height based on screen height
    textAlign: "justify",
    color: "#74CCC",
    marginStart: width * 0.2, // Adjust start margin based on screen width
    marginRight: width * 0.0125, // Adjust right margin based on screen width
  },

  gmailicon: {
    height: height * 0.025, // Adjust height based on screen height
    width: width * 0.05, // Adjust width based on screen width
    marginStart: width * 0.125, // Adjust start margin based on screen width
    marginTop: height * 0.02, // Adjust top margin based on screen height
  },

  gmailtext: {
    fontSize: width * 0.03, // Adjust font size based on screen width
    marginTop: height * 0.02, // Adjust top margin based on screen height
    lineHeight: height * 0.03, // Adjust line height based on screen height
    textAlign: "justify",
    color: "#74CCC",
    marginStart: width * 0.0125, // Adjust start margin based on screen width
    marginRight: width * 0.0125, // Adjust right margin based on screen width
  },

  linkedinicon: {
    height: height * 0.025, // Adjust height based on screen height
    width: width * 0.05, // Adjust width based on screen width
    marginStart: width * 0.1225, // Adjust start margin based on screen width
    marginTop: 0,
  },

  linkedintext: {
    fontSize: width * 0.03, // Adjust font size based on screen width
    marginTop: 0,
    lineHeight: height * 0.03, // Adjust line height based on screen height
    textAlign: "justify",
    color: "#74CCC",
    marginStart: width * 0.0125, // Adjust start margin based on screen width
    marginRight: width * 0.0125, // Adjust right margin based on screen width
  },
  priti: {
    height: height * 0.2, // Adjust height based on screen height
    width: width * 0.3, // Adjust width based on screen width
    borderRadius: width * 0.025, // Adjust border radius based on screen width
  },

  prititext: {
    fontSize: width * 0.045, // Adjust font size based on screen width
    marginTop: height * 0.065, // Adjust top margin based on screen height
    marginStart: width * 0.1, // Adjust start margin based on screen width
    fontWeight: "400", // Corrected to a valid fontWeight
    color: "#0E46A3",
  },

  prititextone: {
    fontSize: width * 0.03, // Adjust font size based on screen width
    marginTop: 0,
    lineHeight: height * 0.03, // Adjust line height based on screen height
    textAlign: "justify",
    color: "#74CCC",
    marginStart: width * 0.15, // Adjust start margin based on screen width
    marginRight: width * 0.0125, // Adjust right margin based on screen width
  },

  pritiicon: {
    height: height * 0.025, // Adjust height based on screen height
    width: width * 0.05, // Adjust width based on screen width
    marginStart: width * 0.075, // Adjust start margin based on screen width
    marginTop: height * 0.02, // Adjust top margin based on screen height
  },

  pritiicontext: {
    fontSize: width * 0.03, // Adjust font size based on screen width
    marginTop: height * 0.02, // Adjust top margin based on screen height
    lineHeight: height * 0.03, // Adjust line height based on screen height
    textAlign: "justify",
    color: "#74CCC",
    marginStart: width * 0.0125, // Adjust start margin based on screen width
    marginRight: width * 0.0125, // Adjust right margin based on screen width
  },

  pritilinkedinicon: {
    height: height * 0.025, // Adjust height based on screen height
    width: width * 0.05, // Adjust width based on screen width
    marginStart: width * 0.0725, // Adjust start margin based on screen width
    marginTop: 0,
  },

  pritilinkedintext: {
    fontSize: width * 0.03, // Adjust font size based on screen width
    marginTop: 0,
    lineHeight: height * 0.03, // Adjust line height based on screen height
    textAlign: "justify",
    color: "#74CCC",
    marginStart: width * 0.0125, // Adjust start margin based on screen width
    marginRight: width * 0.0125, // Adjust right margin based on screen width
  },
  teamtext: {
    fontSize: width * 0.055, // Adjust font size based on screen width
    marginTop: height * 0.065, // Adjust top margin based on screen height
    textAlign: "center",
    fontWeight: "bold",
    color: "#850F8D",
    marginBottom: height * 0.025, // Adjust bottom margin based on screen height
  },

  ourtext: {
    fontSize: width * 0.055, // Adjust font size based on screen width
    marginTop: height * 0.065, // Adjust top margin based on screen height
    marginStart: 0,
    fontWeight: "bold",
    color: "#850F8D",
  },

  linetext: {
    fontSize: width * 0.03, // Adjust font size based on screen width
    marginTop: height * 0.075, // Adjust top margin based on screen height
    marginStart: 0,
    fontWeight: "bold",
    color: "#0E46A3",
  },
  cardforrtext: {
    backgroundColor: "rgb(140, 50, 62)",
    borderRadius: 0,
    padding: 0,
    marginBottom: 0,
    marginHorizontal: width * 0.025, // Adjust horizontal margin based on screen width
    marginTop: height * 0.04, // Adjust top margin based on screen height
    height: height * 0.06, // Adjust height based on screen height
    width: width * 0.85, // Adjust width based on screen width
    marginStart: width * 0.07, // Adjust start margin based on screen width
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
    marginStart: width * 0.35, // Adjust start margin based on screen width
    marginTop: height * 0.015, // Adjust top margin based on screen height
    fontWeight: "bold",
  },
});
