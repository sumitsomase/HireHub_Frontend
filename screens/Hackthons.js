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

const { width , height } = Dimensions.get('window');


const Hackthons = () => {
  const handletechgigonPress = () => {
    Linking.openURL("https://www.techgig.com/challenge");
  };
  const handleleetcodeonPress = () => {
    Linking.openURL("https://leetcode.com/contest/weekly-contest-356/");
  };
  const handlegfgonPress = () => {
    Linking.openURL(
      "https://www.geeksforgeeks.org/events/rec/gfg-weekly-coding-contest?itm_source=geeksforgeeks&itm_medium=main_header&itm_campaign=contests"
    );
  };
  const handlehackearthonPress = () => {
    Linking.openURL("https://www.hackerearth.com/challenges/");
  };
  const handlehackmitonPress = () => {
    Linking.openURL("https://hackmit.org/");
  };

  const handleindiaonPress = () => {
    Linking.openURL("https://www.sih.gov.in/");
  };

  const handlemlhonPress = () => {
    Linking.openURL("https://mlh.io/seasons/2024/events");
  };

  return (
    <View style={styles.container}>
            <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>

        <View style={styles.cardforrtext}>
          <Text style={styles.hackthontext}>Hackthon Festival </Text>
        </View>

        <Text style={styles.createtext}>
          Participate in ongoing #hackathons displayed at this festival to win
          #rewards and more.
        </Text>

        <View style={styles.adjustimg}>
          <Image
            source={require("../assets/hackthon.jpg")}
            style={styles.hackimg}
          ></Image>
        </View>

        <View style={styles.forcard}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress={handletechgigonPress}>
              <View style={styles.cardtechgig}>
                <Image
                  source={require("../assets/techgig.png")}
                  style={styles.techgig}
                ></Image>
                <Text style={styles.techgigtextone}>
                  Challenges and Hackathons
                </Text>
              </View>
            </TouchableOpacity>

            <ScrollView>
              <Text style={styles.techgigtagtext}>
                You can take the coding challenges{" "}
              </Text>
              <Text style={styles.techgigtagonetext}>
                in the programming language of
              </Text>
              <Text style={styles.techgigtagonetext}>
                your choice and also win exciting
              </Text>
              <Text style={styles.techgigtagonetext}>
                prizes and rewarding career{" "}
              </Text>
              <Text style={styles.techgigtagonetext}>
                opportunities in the process.{" "}
              </Text>
            </ScrollView>
          </ScrollView>
        </View>

        <View style={styles.forcard}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress={handleleetcodeonPress}>
              <View style={styles.cardleetcode}>
                <Image
                  source={require("../assets/leetcode.png")}
                  style={styles.leetcode}
                ></Image>
                <Text style={styles.leetcodetextone}>Leetcode Contest</Text>
              </View>
            </TouchableOpacity>

            <ScrollView>
              <Text style={styles.leetcodetagtext}>
                LeetCode may reach out to
              </Text>
              <Text style={styles.leetcodetagonetext}>
                eligible contest winners for
              </Text>
              <Text style={styles.leetcodetagonetext}>
                interview opportunity with
              </Text>
              <Text style={styles.leetcodetagonetext}>LeetCode.</Text>
            </ScrollView>
          </ScrollView>
        </View>

        <View style={styles.forcard}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress={handlegfgonPress}>
              <View style={styles.cardgfg}>
                <Image
                  source={require("../assets/gfg.png")}
                  style={styles.gfg}
                ></Image>
                <Text style={styles.gfgtextone}>GFG Weekly Coding Contest</Text>
              </View>
            </TouchableOpacity>

            <ScrollView>
              <Text style={styles.gfgtagtext}>
                Join us every Sunday at 7 pm
              </Text>
              <Text style={styles.gfgtagonetext}>
                to test your DSA skills,compete
              </Text>
              <Text style={styles.gfgtagonetext}>
                with others,and earn up to 700
              </Text>
              <Text style={styles.gfgtagonetext}>GeekBits!</Text>
            </ScrollView>
          </ScrollView>
        </View>

        <View style={styles.forcard}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress={handlehackearthonPress}>
              <View style={styles.cardhackearth}>
                <Image
                  source={require("../assets/hackearth.png")}
                  style={styles.hackearth}
                ></Image>
                <Text style={styles.hackearthtextone}>
                  Hackathons, Programming Challenges, And Coding Competitions
                </Text>
              </View>
            </TouchableOpacity>

            <ScrollView>
              <Text style={styles.hackearthtagtext}>
                HackerEarth hosts hackathons,
              </Text>
              <Text style={styles.hackearthtagonetext}>
                programming challenges, and
              </Text>
              <Text style={styles.hackearthtagonetext}>
                offering a platform for developers{" "}
              </Text>
              <Text style={styles.hackearthtagonetext}>
                {" "}
                to showcase skills and connect
              </Text>
              <Text style={styles.hackearthtagonetext}>with employers.</Text>
            </ScrollView>
          </ScrollView>
        </View>

        <View style={styles.forcard}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress={handlehackmitonPress}>
              <View style={styles.cardhackmit}>
                <Image
                  source={require("../assets/hackmit.png")}
                  style={styles.hackmit}
                ></Image>
              </View>
            </TouchableOpacity>

            <ScrollView>
              <Text style={styles.hackmittagtext}>
                As one of the largest undergraduate
              </Text>
              <Text style={styles.hackmittagonetext}>
                hackathons in the world, we
              </Text>
              <Text style={styles.hackmittagonetext}>
                typically bring in over 1000 students
              </Text>
              <Text style={styles.hackmittagonetext}>
                to MIT's campus each fall.
              </Text>
            </ScrollView>
          </ScrollView>
        </View>

        <View style={styles.forcard}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress={handleindiaonPress}>
              <View style={styles.cardindia}>
                <Image
                  source={require("../assets/smartindia.png")}
                  style={styles.india}
                ></Image>
              </View>
            </TouchableOpacity>

            <ScrollView>
              <Text style={styles.indiatagtext}>
                World’s biggest open platform for
              </Text>
              <Text style={styles.indiatagonetext}>
                the innovators or entrepreneurs of{" "}
              </Text>
              <Text style={styles.indiatagonetext}>
                tomorrow to start today towards a{" "}
              </Text>
              <Text style={styles.indiatagonetext}>smarter India.</Text>
            </ScrollView>
          </ScrollView>
        </View>

        <View style={styles.forcard}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress={handlemlhonPress}>
              <View style={styles.cardmlh}>
                <Image
                  source={require("../assets/mlh.png")}
                  style={styles.mlh}
                ></Image>
                <Text style={styles.mlhtextone}>Major League Hacking</Text>
              </View>
            </TouchableOpacity>

            <ScrollView>
              <Text style={styles.mlhtagtext}>
                Find, compete, and earn points
              </Text>
              <Text style={styles.mlhtagonetext}>
                at the largest, most diverse{" "}
              </Text>
              <Text style={styles.mlhtagonetext}>
                {" "}
                hacker events in the world.
              </Text>
            </ScrollView>
          </ScrollView>
        </View>

        <View style={styles.forcard}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Text style={styles.lovetext}>Code with</Text>
            <Image
              source={require("../assets/heartone.png")}
              style={styles.love}
            ></Image>

            <Text style={styles.loveonetext}>create magic</Text>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Hackthons;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "1%",

  },

  cardforrtext: {
    backgroundColor: "rgb(140, 50, 62)",
    borderRadius: 0,
    padding: 0,
    marginBottom: 0,
    marginHorizontal: width * 0.025, // Responsive horizontal margin
    marginTop: height * 0.04, // Responsive top margin
    height: height * 0.06, // Responsive height
    width: width * 0.8, // Responsive width
    marginStart: width * 0.09, // Responsive margin start
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  hackthontext: {
    color: "white",
    marginStart: width * 0.24, // Responsive margin start
    marginTop: height * 0.017, // Responsive top margin
    fontWeight: "bold",
    fontSize: width * 0.045, // Responsive font size
  },

  hackimg: {
    height: height * 0.35, // Responsive height
    width: width * 0.980, // Responsive width
    marginTop: height * 0.05, // Responsive top margin
  },
  createtext: {
    color: "black",
    marginStart: width * 0.12, // Responsive margin start
    marginEnd: width * 0.1, // Responsive margin end
    marginTop: height * 0.015, // Responsive top margin
  },

  cardtechgig: {
    backgroundColor: "#FFF2D7",
    borderRadius: 10,
    padding: 0,
    marginBottom: height * 0.02,
    marginHorizontal: width * 0.025,
    height: height * 0.14,
    width: width * 0.4,
    marginStart: width * 0.02,
    marginTop: height * 0.06,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  techgigtagtext: {
    fontSize: 13,
    marginTop: height * 0.075,
    color: "#0E46A3",
    marginStart: width * 0.005,
    marginRight: width * 0.01,
  },
  techgigtagonetext: {
    fontSize: 13,
    marginTop: 0,
    color: "#0E46A3",
    marginStart: width * 0.005,
    marginRight: width * 0.01,
  },
  techgig: {
    height: height * 0.035,
    width: width * 0.3,
    marginTop: height * 0.025,
    marginLeft: width * 0.05,
  },
  techgigtextone: {
    fontSize: 11,
    marginTop: height * 0.012,
    color: "#555",
    fontWeight: "bold",
    marginLeft: width * 0.025,
  },
  cardleetcode: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 0,
    marginBottom: height * 0.02,
    marginHorizontal: width * 0.025,
    height: height * 0.14,
    width: width * 0.4,
    marginStart: width * 0.02,
    marginTop: height * 0.04,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  leetcodetagtext: {
    fontSize: 13,
    marginTop: height * 0.0625,
    color: "#0E46A3",
    marginStart: width * 0.005,
    marginRight: width * 0.01,
  },
  leetcodetagonetext: {
    fontSize: 13,
    marginTop: 0,
    color: "#0E46A3",
    marginStart: width * 0.005,
    marginRight: width * 0.01,
  },
  leetcode: {
    height: height * 0.035,
    width: width * 0.3,
    marginTop: height * 0.03125,
    marginLeft: width * 0.05,
  },
  leetcodetextone: {
    fontSize: 11,
    marginTop: height * 0.012,
    color: "#555",
    fontWeight: "bold",
    marginLeft: width * 0.0875,
  },
  cardgfg: {
    backgroundColor: "#C3FF93",
    borderRadius: 10,
    padding: 0,
    marginBottom: height * 0.02,
    marginHorizontal: width * 0.025,
    height: height * 0.14,
    width: width * 0.4,
    marginStart: width * 0.02,
    marginTop: height * 0.04,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  gfgtagtext: {
    fontSize: 13,
    marginTop: height * 0.0625,
    color: "#0E46A3",
    marginStart: width * 0.005,
    marginRight: width * 0.01,
  },
  gfgtagonetext: {
    fontSize: 13,
    marginTop: 0,
    color: "#0E46A3",
    marginStart: width * 0.005,
    marginRight: width * 0.01,
  },
  gfg: {
    height: height * 0.035,
    width: width * 0.3,
    marginTop: height * 0.03125,
    marginLeft: width * 0.05,
  },
  gfgtextone: {
    fontSize: 11,
    marginTop: height * 0.012,
    color: "#555",
    fontWeight: "bold",
    marginLeft: width * 0.0625,
  },
  cardhackearth: {
    backgroundColor: "#CDE8E5",
    borderRadius: 10,
    padding: 0,
    marginBottom: height * 0.02,
    marginHorizontal: width * 0.025,
    height: height * 0.14,
    width: width * 0.4,
    marginStart: width * 0.02,
    marginTop: height * 0.04,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  hackearthtagtext: {
    fontSize: 13,
    marginTop: height * 0.05,
    color: "#0E46A3",
    marginStart: width * 0.005,
    marginRight: width * 0.01,
  },
  hackearthtagonetext: {
    fontSize: 13,
    marginTop: 0,
    color: "#0E46A3",
    marginStart: width * 0.005,
    marginRight: width * 0.01,
  },
  hackearth: {
    height: height * 0.035,
    width: width * 0.35,
    marginTop: height * 0.025,
    marginLeft: width * 0.025,
  },
  hackearthtextone: {
    fontSize: 11,
    marginTop: height * 0.012,
    color: "#555",
    fontWeight: "bold",
    marginLeft: width * 0.025,
  },
  cardhackmit: {
    backgroundColor: "#CAF4FF",
    borderRadius: 10,
    padding: 0,
    marginBottom: height * 0.02,
    marginHorizontal: width * 0.025,
    height: height * 0.14,
    width: width * 0.4,
    marginStart: width * 0.02,
    marginTop: height * 0.04,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  hackmittagtext: {
    fontSize: 13,
    marginTop: height * 0.0625,
    color: "#0E46A3",
    marginStart: width * 0.005,
    marginRight: width * 0.01,
  },
  hackmittagonetext: {
    fontSize: 13,
    marginTop: 0,
    color: "#0E46A3",
    marginStart: width * 0.005,
    marginRight: width * 0.01,
  },
  hackmit: {
    height: height * 0.125,
    width: width * 0.25,
    marginTop: height * 0.00375,
    marginStart: width * 0.075,
    marginLeft: width * 0.025,
  },
  hackmittextone: {
    fontSize: 11,
    marginTop: height * 0.012,
    color: "#555",
    fontWeight: "bold",
    marginLeft: width * 0.025,
  },
  cardindia: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 0,
    marginBottom: height * 0.02,
    marginHorizontal: width * 0.025,
    height: height * 0.14,
    width: width * 0.4,
    marginStart: width * 0.02,
    marginTop: height * 0.04,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  indiatagtext: {
    fontSize: 13,
    marginTop: height * 0.0625,
    color: "#0E46A3",
    marginStart: width * 0.005,
    marginRight: width * 0.01,
  },
  indiatagonetext: {
    fontSize: 13,
    marginTop: 0,
    color: "#0E46A3",
    marginStart: width * 0.005,
    marginRight: width * 0.01,
  },
  india: {
    height: height * 0.1125,
    width: width * 0.4,
    marginTop: 0,
    marginLeft: 0,
    borderRadius: 10,
  },
  indiatextone: {
    fontSize: 11,
    marginTop: height * 0.012,
    color: "#555",
    fontWeight: "bold",
    marginLeft: width * 0.0625,
  },
  cardmlh: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 0,
    marginBottom: height * 0.02,
    marginHorizontal: width * 0.025,
    height: height * 0.14,
    width: width * 0.4,
    marginStart: width * 0.02,
    marginTop: height * 0.04,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  mlhtagtext: {
    fontSize: 13,
    marginTop: height * 0.075,
    color: "#0E46A3",
    marginStart: width * 0.005,
    marginRight: width * 0.01,
  },
  mlhtagonetext: {
    fontSize: 13,
    marginTop: 0,
    color: "#0E46A3",
    marginStart: width * 0.005,
    marginRight: width * 0.01,
  },
  mlh: {
    height: height * 0.05,
    width: width * 0.325,
    marginTop: height * 0.025,
    marginLeft: width * 0.025,
    borderRadius: 10,
  },
  mlhtextone: {
    fontSize: 11,
    marginTop: height * 0.012,
    color: "#555",
    fontWeight: "bold",
    marginLeft: width * 0.05,
  },
  love: {
    height: height * 0.025,
    width: width * 0.05,
    marginTop: height * 0.05,
    marginLeft: 0,
  },
  lovetext: {
    fontSize: width * 0.035,
    marginTop: height * 0.05,
    color: "black",
    marginStart: width * 0.275,
    marginRight: width * 0.0125,
    marginBottom: height * 0.05,
    fontWeight: "bold",
  },
  loveonetext: {
    fontSize: width * 0.035,
    marginTop: height * 0.05,
    color: "black",
    marginStart: width * 0.0125,
    marginRight: width * 0.0125,
    fontWeight: "bold",
  },
});
