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
  Dimensions,
} from "react-native";
const { width } = Dimensions.get("window");

const Getajob = () => {
  const handlelinkedinonPress = () => {
    Linking.openURL("https://www.linkedin.com/feed/");
  };
  const handleindeedonPress = () => {
    Linking.openURL("https://in.indeed.com/");
  };
  const handleglassdooronPress = () => {
    Linking.openURL("https://www.glassdoor.co.in/Community/index.htm");
  };
  const handlefounditonPress = () => {
    Linking.openURL("https://www.foundit.in/seeker/dashboard");
  };
  const handleinternshalaonPress = () => {
    Linking.openURL("https://internshala.com/student/dashboard");
  };
  const handlenaukrionPress = () => {
    Linking.openURL("https://www.naukri.com/");
  };
  const handlerecruiteronPress = () => {
    Linking.openURL("https://www.ziprecruiter.in/");
  };
  const handleunstoponPress = () => {
    Linking.openURL("https://unstop.com/");
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cardforrtext}>
          <Text style={styles.jointext}>YOU CAN FIND A JOB HERE</Text>
        </View>

        <View style={styles.forcard}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress={handlelinkedinonPress}>
              <View style={styles.cardlinkedin}>
                <Image
                  source={require("../assets/linkedin.png")}
                  style={styles.linkedin}
                ></Image>
              </View>
            </TouchableOpacity>

            <ScrollView>
              <Text style={styles.secondtext}>LinkedIn connects professio</Text>
              <Text style={styles.secondtext}>
                -nals with job opportunities
              </Text>
              <Text style={styles.secondtext}>and networking in various</Text>
              <Text style={styles.secondtext}> industries.</Text>
            </ScrollView>
          </ScrollView>
        </View>

        <View style={styles.forcard}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <ScrollView>
              <Text style={styles.indeedtextfirst}>Indeed is a job search</Text>
              <Text style={styles.indeedtextsecond}>engine connecting</Text>
              <Text style={styles.indeedtextsecond}>
                employers with job seekers
              </Text>
              <Text style={styles.indeedtextsecond}>
                {" "}
                globally and locally.
              </Text>
            </ScrollView>

            <TouchableOpacity onPress={handleindeedonPress}>
              <View style={styles.cardindeed}>
                <ImageBackground
                  source={require("../assets/indeedtwo.png")}
                  style={styles.indeed}
                  imageStyle={{ borderRadius: 10 }} // To match the card's border radius
                />
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.forcard}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress={handleglassdooronPress}>
              <View style={styles.cardglassdoor}>
                <ImageBackground
                  source={require("../assets/glassdoor.png")}
                  style={styles.glassdoor}
                  imageStyle={{ borderRadius: 10 }} // To match the card's border radius
                />
              </View>
            </TouchableOpacity>

            <ScrollView>
              <Text style={styles.glassdoortext}>Offers job listings</Text>
              <Text style={styles.glassdoortexttwo}>along with company</Text>
              <Text style={styles.glassdoortexttwo}>reviews and salary</Text>
              <Text style={styles.glassdoortexttwo}> information.</Text>
            </ScrollView>
          </ScrollView>
        </View>

        <View style={styles.forcard}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <ScrollView>
              <Text style={styles.foundittextfirst}>One of the oldest</Text>
              <Text style={styles.foundittextsecond}>job search sites,</Text>
              <Text style={styles.foundittextsecond}>
                offering a wide range
              </Text>
              <Text style={styles.foundittextsecond}>of listings.</Text>
            </ScrollView>

            <TouchableOpacity onPress={handlefounditonPress}>
              <View style={styles.cardfoundit}>
                <ImageBackground
                  source={require("../assets/foundit.png")}
                  style={styles.foundit}
                  imageStyle={{ borderRadius: 10 }} // To match the card's border radius
                />
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.forcard}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress={handleinternshalaonPress}>
              <View style={styles.cardinternshala}>
                <ImageBackground
                  source={require("../assets/internshala.jpeg")}
                  style={styles.internshala}
                  imageStyle={{ borderRadius: 10 }} // To match the card's border radius
                />
              </View>
            </TouchableOpacity>

            <ScrollView>
              <Text style={styles.internshalatext}>
                Internshala is a popular plat
              </Text>
              <Text style={styles.internshalatexttwo}>
                -form that connects students
              </Text>
              <Text style={styles.internshalatexttwo}>
                with internship opportunities
              </Text>
              <Text style={styles.internshalatexttwo}>
                across various industries.
              </Text>
            </ScrollView>
          </ScrollView>
        </View>

        <View style={styles.forcard}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <ScrollView>
              <Text style={styles.naukritextfirst}>
                Naukri.com is a leading
              </Text>
              <Text style={styles.naukritextsecond}>Indian job portal</Text>
              <Text style={styles.naukritextsecond}>
                connecting job seekers
              </Text>
              <Text style={styles.naukritextsecond}>with employers.</Text>
            </ScrollView>

            <TouchableOpacity onPress={handlenaukrionPress}>
              <View style={styles.cardnaukri}>
                <ImageBackground
                  source={require("../assets/naukri.png")}
                  style={styles.naukri}
                  imageStyle={{ borderRadius: 10 }} // To match the card's border radius
                />
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.forcard}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress={handlerecruiteronPress}>
              <View style={styles.cardrecruiter}>
                <ImageBackground
                  source={require("../assets/recruiter.jpg")}
                  style={styles.recruiter}
                  imageStyle={{ borderRadius: 10 }} // To match the card's border radius
                />
              </View>
            </TouchableOpacity>

            <ScrollView>
              <Text style={styles.recruitertext}>Known for its easy</Text>
              <Text style={styles.recruitertexttwo}>application process</Text>
              <Text style={styles.recruitertexttwo}>and extensive job</Text>
              <Text style={styles.recruitertexttwo}>database.</Text>
            </ScrollView>
          </ScrollView>
        </View>

        <View style={styles.forcard}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <ScrollView>
              <Text style={styles.unstoptextfirst}>Unstop is a platform</Text>
              <Text style={styles.unstoptextsecond}>
                connecting students with
              </Text>
              <Text style={styles.unstoptextsecond}>
                competitions, internships,
              </Text>
              <Text style={styles.unstoptextsecond}>
                and job opportunities.
              </Text>
            </ScrollView>

            <TouchableOpacity onPress={handleunstoponPress}>
              <View style={styles.cardunstop}>
                <ImageBackground
                  source={require("../assets/unstop.jpg")}
                  style={styles.unstop}
                  imageStyle={{ borderRadius: 10 }} // To match the card's border radius
                />
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Getajob;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "1%",
  },

  cardlinkedin: {
    backgroundColor: "#CAF4FF",
    borderRadius: 10,
    padding: 0,
    marginBottom: 14, // Adjust bottom margin based on screen height
    marginHorizontal: width * 0.025,
    height: 110,
    width: width * 0.4,
    marginStart: width * 0.05, // Adjust start margin based on screen width
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardindeed: {
    backgroundColor: "#F6F5F2",
    borderRadius: 10,
    padding: 0,
    marginBottom: 14,
    marginTop: 20,
    marginHorizontal: width * 0.025,
    //marginHorizontal: 10,
    height: 110,
    width: width * 0.4,
    marginStart: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  cardglassdoor: {
    backgroundColor: "#CAF4FF",
    borderRadius: 10,
    padding: 0,
    marginTop: 20,
    marginBottom: 14,
    marginHorizontal: width * 0.025,
    height: 110,
    width: width * 0.4,
    marginStart: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  cardfoundit: {
    backgroundColor: "#F6F5F2",
    borderRadius: 10,
    padding: 0,
    marginBottom: 14,
    marginTop: 20,
    marginHorizontal: width * 0.025,
    height: 110,
    width: width * 0.4,
    marginStart: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  cardinternshala: {
    backgroundColor: "#CAF4FF",
    borderRadius: 10,
    padding: 0,
    marginTop: 20,
    marginBottom: 14,
    marginHorizontal: width * 0.025,
    height: 100,
    width: width * 0.4,
    marginStart: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  cardnaukri: {
    backgroundColor: "#F6F5F2",
    borderRadius: 10,
    padding: 0,
    marginBottom: 14,
    marginTop: 20,
    marginHorizontal: width * 0.025,
    height: 110,
    width: width * 0.4,
    marginStart: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  cardrecruiter: {
    backgroundColor: "#CAF4FF",
    borderRadius: 10,
    padding: 0,
    marginTop: 20,
    marginBottom: 14,
    marginHorizontal: width * 0.025,
    height: 110,
    width: width * 0.4,
    marginStart: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  cardunstop: {
    backgroundColor: "#F6F5F2",
    borderRadius: 10,
    padding: 0,
    marginBottom: 44,
    marginTop: 20,
    marginHorizontal: width * 0.025,
    height: 110,
    width: width * 0.4,
    marginStart: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  secondtext: {
    fontSize: width * 0.04, // Adjust font size based on screen width
    marginTop: 0,
    lineHeight: width * 0.06, // Adjust line height based on screen width
    textAlign: "justify",
    color: "#555",
    marginStart: width * 0.01, // Adjust start margin based on screen width
    marginRight: width * 0.0125, // Adjust right margin based on screen width
  },

  indeedtextfirst: {
    fontSize: width * 0.04,
    marginTop: 18,
    lineHeight: width * 0.06,
    textAlign: "justify",
    color: "#555",
    marginStart: width * 0.04,
    marginRight: width * 0.0125,
  },
  indeedtextsecond: {
    fontSize: width * 0.04,
    marginTop: 0,
    lineHeight: width * 0.06,
    textAlign: "justify",
    color: "#555",
    marginStart: width * 0.04,
    marginRight: width * 0.0125,
  },
  linkedin: {
    height: width * 0.07,
    width: width * 0.3,
    marginTop: width * 0.1,
    marginLeft: width * 0.05,
  },
  indeed: {
    height: 110,
    width: width * 0.4,
    marginTop: 0,
    marginLeft: 0,
  },
  glassdoortext: {
    fontSize: width * 0.04,
    marginTop: 21,
    lineHeight: width * 0.06,
    textAlign: "justify",
    color: "#555",
    marginStart: width * 0.025,
    marginRight: width * 0.0125,
  },
  glassdoortexttwo: {
    fontSize: width * 0.04,
    marginTop: 0,
    lineHeight: width * 0.06,
    textAlign: "justify",
    color: "#555",
    marginStart: width * 0.025,
    marginRight: width * 0.0125,
  },
  glassdoor: {
    height: 110,
    width: width * 0.4,
    marginTop: 0,
    marginLeft: 0,
  },
  foundittextfirst: {
    fontSize: width * 0.04,
    marginTop: 21,
    lineHeight: width * 0.06,
    textAlign: "justify",
    color: "#555",
    marginStart: width * 0.065,
    marginRight: width * 0.0125,
  },
  foundittextsecond: {
    fontSize: width * 0.04,
    marginTop: 0,
    lineHeight: width * 0.06,
    textAlign: "justify",
    color: "#555",
    marginStart: width * 0.065,
    marginRight: width * 0.0125,
  },
  foundit: {
    height: 110,
    width: width * 0.4,
    marginTop: 0,
    marginLeft: 0,
  },
  internshalatext: {
    fontSize: width * 0.04,
    marginTop: 21,
    lineHeight: width * 0.06,
    textAlign: "justify",
    color: "#555",
    marginStart: 0,
    marginRight: width * 0.0125,
  },
  internshalatexttwo: {
    fontSize: width * 0.04,
    marginTop: 0,
    lineHeight: width * 0.06,
    textAlign: "justify",
    color: "#555",
    marginStart: 0,
    marginRight: width * 0.0125,
  },
  internshala: {
    height: 100,
    width: width * 0.4,
    marginTop: 0,
    marginLeft: 0,
  },
  naukritextfirst: {
    fontSize: width * 0.04,
    marginTop: 21,
    lineHeight: width * 0.06,
    textAlign: "justify",
    color: "#555",
    marginStart: width * 0.05,
    marginRight: width * 0.0125,
  },
  naukritextsecond: {
    fontSize: width * 0.04,
    marginTop: 0,
    lineHeight: width * 0.06,
    textAlign: "justify",
    color: "#555",
    marginStart: width * 0.05,
    marginRight: width * 0.0125,
  },
  naukri: {
    height: 110,
    width: width * 0.4,
    marginTop: 0,
    marginLeft: 0,
  },
  recruitertext: {
    fontSize: width * 0.04,
    marginTop: 21,
    lineHeight: width * 0.06,
    textAlign: "justify",
    color: "#555",
    marginStart: width * 0.05,
    marginRight: width * 0.0125,
  },
  recruitertexttwo: {
    fontSize: width * 0.04,
    marginTop: 0,
    lineHeight: width * 0.06,
    textAlign: "justify",
    color: "#555",
    marginStart: width * 0.05,
    marginRight: width * 0.0125,
  },
  recruiter: {
    height: 110,
    width: width * 0.4,
    marginTop: 0,
    marginLeft: 0,
  },
  unstoptextfirst: {
    fontSize: width * 0.04,
    marginTop: 21,
    lineHeight: width * 0.06,
    textAlign: "justify",
    color: "#555",
    marginStart: width * 0.05,
    marginRight: width * 0.0125,
  },
  unstoptextsecond: {
    fontSize: width * 0.04,
    marginTop: 0,
    lineHeight: width * 0.06,
    textAlign: "justify",
    color: "#555",
    marginStart: width * 0.05,
    marginRight: width * 0.0125,
  },
  unstop: {
    height: 110,
    width: width * 0.4,
    marginTop: 0,
    marginLeft: 0,
  },

  cardforrtext: {
    backgroundColor: "rgb(140, 50, 62)",
    borderRadius: 0,
    padding: 0,
    marginBottom: width * 0.125, // 50
    marginHorizontal: width * 0.025, // 10
    marginTop: width * 0.0875, // 35
    height: width * 0.125, // 50
    width: width * 0.8, // 320
    marginStart: width * 0.0875, // 35
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
    marginStart: width * 0.1925, // 77
    marginTop: width * 0.0325, // 13
    fontWeight: "bold",
  },
});
