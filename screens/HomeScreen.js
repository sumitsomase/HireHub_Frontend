import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Image,
  Linking,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleJobathonPress = () => {
    Linking.openURL("https://www.geeksforgeeks.org/events/rec/job-a-thon");
  };

  const handleproductbased = () => {
    navigation.navigate("Product-Based Companies");
  };

  const handleservicebased = () => {
    navigation.navigate("Service-Based Companies");
  };

  const getajob = () => {
    navigation.navigate("Get-A-Job");
  };

  const tcsnqt = () => {
    navigation.navigate("Tcs|Nqt");
  };

  const resume = () => {
    navigation.navigate("Resumify");
  };

  const productvsservice = () => {
    navigation.navigate("Categories(Product & Service)");
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.fortext}>
          <Text style={styles.firsttext}>Welcome back !</Text>
        </View>

        <View style={styles.forcard}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress={productvsservice}>
              <View style={styles.cardproductservice}>
                <ImageBackground
                  source={require("../assets/company.png")}
                  style={styles.company}
                  imageStyle={{ borderRadius: 10 }} // To match the card's border radius
                />
              </View>
            </TouchableOpacity>

            <View style={styles.cardgetajob}>
              <Text style={styles.findjob}>Where can I find a job?</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <Image
                  source={require("../assets/linkedin.png")}
                  style={styles.linkedin}
                ></Image>
                <Image
                  source={require("../assets/indeed.png")}
                  style={styles.indeed}
                ></Image>
              </ScrollView>
              <TouchableOpacity style={styles.getajob} onPress={getajob}>
                <Text style={styles.getajobtext}>Get-A-Job</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.cardtcsnqt}>
              <Image
                source={require("../assets/tcsnqt.png")}
                style={styles.tcsnqt}
              ></Image>
              <Text style={styles.tcsnqttext}>
                Your Gateway to Thousands of Top Jobs
              </Text>

              <TouchableOpacity style={styles.tcsnqtapply} onPress={tcsnqt}>
                <Text style={styles.tcsnqtapplytext}>Apply Now</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.cardtcsnqt}>
              <Text style={styles.resumetext}>
                Build Your Resume with HireHub:
              </Text>
              <Text style={styles.resumetexttwo}>
                Create ATS-friendly resumes effortlessly.
              </Text>

              <TouchableOpacity style={styles.resumeapply} onPress={resume}>
                <Text style={styles.resumeapplytext}>Resumify</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.cardhackhub}>
              <Text style={styles.hackhubtext}>HackHub</Text>
              <Text style={styles.tcsnqttext}>
                Collaborative Tech Innovation Challenge
              </Text>
              <Image
                source={require("../assets/comingsoon.png")}
                style={styles.comingsoon}
              ></Image>
            </View>
          </ScrollView>
        </View>

        <View style={styles.onestep}>
          <Text style={styles.onesteptext}>
            One Step Close To Your Dream Company
          </Text>
        </View>

        <View style={styles.cardgfg}>
          <TouchableOpacity onPress={handleJobathonPress}>
            <View style={styles.cardgfgtwo}>
              <ImageBackground
                source={require("../assets/jobathon.png")}
                style={styles.jobathon}
              ></ImageBackground>
              <Text style={styles.jobthontext}>Job-a-Thon</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.recommended}>
          <Text style={styles.recommendedtext}>Recommended For You</Text>
        </View>

        <View style={styles.Productbased}>
          <View style={styles.Productbasedcard}>
            <Text style={styles.Productbasedtext}>
              Innovative technology solutions to enhance everyday life
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Image
                source={require("../assets/microsoft.png")}
                style={styles.microsoft}
              ></Image>
              <Image
                source={require("../assets/google.png")}
                style={styles.google}
              ></Image>
            </ScrollView>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Image
                source={require("../assets/ibm.png")}
                style={styles.ibm}
              ></Image>
              <Image
                source={require("../assets/amazon.png")}
                style={styles.amazon}
              ></Image>
              <Image
                source={require("../assets/cisco.png")}
                style={styles.cisco}
              ></Image>
            </ScrollView>

            <TouchableOpacity
              style={styles.button}
              onPress={handleproductbased}
            >
              <Text style={styles.buttonText}>Product-Based</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.servicebased}>
          <View style={styles.servicebasedcard}>
            <Text style={styles.Productbasedtext}>
              Customized solutions and support for a wide-ranging clientele
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Image
                source={require("../assets/tcs.png")}
                style={styles.tcs}
              ></Image>
              <Image
                source={require("../assets/infosys.png")}
                style={styles.infosys}
              ></Image>
            </ScrollView>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Image
                source={require("../assets/accenture.png")}
                style={styles.accenture}
              ></Image>
              <Image
                source={require("../assets/wipro.png")}
                style={styles.wipro}
              ></Image>
              <Image
                source={require("../assets/cognizant.png")}
                style={styles.cognizant}
              ></Image>
            </ScrollView>

            <TouchableOpacity
              style={styles.buttontwo}
              onPress={handleservicebased}
            >
              <Text style={styles.buttonTexttwo}>Service-Based</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Text style={styles.lovetext}>Built with</Text>

          <Image
            source={require("../assets/heartone.png")}
            style={styles.love}
          ></Image>
          <Text style={styles.loveonetext}>for Explore your Career</Text>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "1%",
  },

  fortext: {
    marginBottom: 42,
  },
  firsttext: {
    fontSize: 19,
    marginTop: 25,
    marginLeft: 27,
  },
  cardproductservice: {
    backgroundColor: "#ffffff",
    borderRadius: 10,

    marginBottom: 14,
    marginHorizontal: 10,
    height: 130,
    width: width * 0.6,

    marginStart: 20,
    shadowColor: "#000",
    shadowOffset: {
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  cardgetajob: {
    backgroundColor: "#F6F5F2",
    borderRadius: 10,

    marginBottom: 14,
    marginHorizontal: 10,
    height: 130,
    width: 230,
    marginStart: 20,
    shadowColor: "#000",
    shadowOffset: {
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  cardtcsnqt: {
    backgroundColor: "#F6F5F2",
    borderRadius: 10,

    marginBottom: 14,
    marginHorizontal: 10,
    height: 130,
    width: 230,
    marginStart: 20,
    shadowColor: "#000",
    shadowOffset: {
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  cardhackhub: {
    backgroundColor: "#F6F5F2",
    borderRadius: 10,

    marginBottom: 14,
    marginHorizontal: 10,
    height: 130,
    width: 230,
    marginStart: 20,
    shadowColor: "#000",
    shadowOffset: {
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  forcard: {
    height: 170,
  },
  onestep: {
    marginTop: 10,
    height: 50,
  },

  onesteptext: {
    fontSize: 19,

    fontWeight: "bold",
    textAlign: "center",
  },

  cardgfg: {
    height: 200,
  },

  cardgfgtwo: {
    backgroundColor: "#90ee90",
    borderRadius: 10,
    padding: 20,
    marginBottom: 14,
    marginHorizontal: 10,
    height: 180,
    width: width * 0.85,

    marginStart: 28,
    shadowColor: "#000",
    shadowOffset: {
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  jobathon: {
    height: 110,
    width: "100%",
  },

  jobthontext: {
    fontSize: 19,

    textAlign: "center",
    marginTop: 10,
  },

  recommended: {
    marginTop: 2,
    height: 50,
  },

  recommendedtext: {
    fontSize: 19,
    marginStart: 16,
    fontWeight: "bold",
  },

  Productbased: {
    height: 250,
    marginBottom: 50,
  },

  Productbasedcard: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 20,
    marginBottom: 14,
    marginHorizontal: 10,
    height: 280,

    width: width * 0.92,
    marginStart: 13,
    shadowColor: "#000",
    shadowOffset: {
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  Productbasedtext: {
    fontSize: 19,
    color: "blue",
  },
  microsoft: {
    height: width * 0.05, // Adjust height based on screen width
    width: width * 0.35, // Adjust width based on screen width
    marginTop: 19,
  },
  google: {
    height: width * 0.1, // Adjust height based on screen width
    width: width * 0.31, // Adjust width based on screen width
    marginTop: 15,
    marginLeft: width * 0.055, // Adjust left margin based on screen width
  },
  ibm: {
    height: width * 0.075, // Adjust height based on screen width
    width: width * 0.2, // Adjust width based on screen width
    marginBottom: 35,
  },
  amazon: {
    height: width * 0.075, // Adjust height based on screen width
    width: width * 0.25, // Adjust width based on screen width
    marginTop: 7,
    marginLeft: width * 0.055, // Adjust left margin based on screen width
  },
  cisco: {
    height: width * 0.1, // Adjust height based on screen width
    width: width * 0.175, // Adjust width based on screen width
    marginLeft: width * 0.0725, // Adjust left margin based on screen width
  },
  button: {
    backgroundColor: "#9947e5",
    paddingVertical: 12,
    paddingHorizontal: width * 0.1, // Example: Horizontal padding as a percentage of screen width
    borderRadius: 10,
    alignSelf: "center", // Center the button horizontally
    minWidth: width * 0.86, // Example: Minimum width as a percentage of screen width
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },

  servicebased: {
    height: 250,
    marginBottom: 50,
  },

  servicebasedcard: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 20,
    marginBottom: 14,
    marginHorizontal: 10,
    height: 280,

    width: width * 0.92,
    marginStart: 13,
    shadowColor: "#000",
    shadowOffset: {
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  servicebasedtext: {
    fontSize: 19,
    color: "blue",
  },

  tcs: {
    height: width * 0.07, // Adjust height based on screen width
    width: width * 0.25, // Adjust width based on screen width
    marginTop: 19,
    marginLeft: width * 0.04, // Adjust left margin based on screen width
  },
  infosys: {
    height: width * 0.1, // Adjust height based on screen width
    width: width * 0.25, // Adjust width based on screen width
    marginTop: 15,
    marginLeft: width * 0.1, // Adjust left margin based on screen width
  },
  accenture: {
    height: width * 0.075, // Adjust height based on screen width
    width: width * 0.2, // Adjust width based on screen width
    marginTop: 20,
    marginBottom: 35,
  },
  wipro: {
    height: width * 0.1, // Adjust height based on screen width
    width: width * 0.15, // Adjust width based on screen width
    marginTop: 17,
    marginLeft: width * 0.05, // Adjust left margin based on screen width
  },
  cognizant: {
    height: width * 0.05, // Adjust height based on screen width
    width: width * 0.3, // Adjust width based on screen width
    marginTop: 22,
    marginLeft: width * 0.07, // Adjust left margin based on screen width
  },

  buttontwo: {
    backgroundColor: "#9947e5",
    paddingVertical: 12,
    paddingHorizontal: width * 0.1,
    borderRadius: 10,
    alignSelf: "center",
    minWidth: width * 0.86,
  },
  buttonTexttwo: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },

  company: {
    height: "100%",
    width: "100%",
  },

  findjob: {
    fontSize: 19,
    marginTop: 10,
    marginLeft: 15,
    color: "blue",
  },

  linkedin: {
    height: 18,
    width: 70,
    marginTop: 19,
    marginLeft: 25,
  },

  indeed: {
    height: 18,
    width: 120,
    marginTop: 19,
    marginLeft: 10,
  },

  getajob: {
    backgroundColor: "#9947e5",
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    height: 30,
    paddingVertical: 5,
    paddingHorizontal: 40,
    borderRadius: 8,
  },

  getajobtext: {
    color: "#fff",
    fontSize: 13,
    textAlign: "center",

    fontWeight: "bold",
  },

  tcsnqt: {
    height: 40,
    width: 120,
    marginTop: 10,
    marginLeft: 50,
  },
  tcsnqttext: {
    fontSize: 13,
    color: "blue",
    marginStart: 10,
    marginTop: 3,
  },

  tcsnqtapply: {
    backgroundColor: "#9947e5",
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 5,
    height: 30,
    paddingVertical: 5,
    paddingHorizontal: 40,
    borderRadius: 8,
  },

  tcsnqtapplytext: {
    color: "#fff",
    fontSize: 13,
    textAlign: "center",

    fontWeight: "bold",
  },

  hackhubtext: {
    fontSize: 21,
    color: "black",
    textAlign: "center",
    marginTop: 10,
    fontWeight: "bold",
  },

  comingsoon: {
    height: 45,
    width: 120,
    marginTop: 10,
    marginLeft: 45,
  },

  lovetext: {
    fontSize: width * 0.037, // Adjust font size based on screen width
    marginTop: 20,
    color: "black",
    marginStart: width * 0.2, // Adjust start margin based on screen width
    marginRight: width * 0.0125, // Adjust right margin based on screen width
    marginBottom: 40,
    fontWeight: "bold",
  },
  loveonetext: {
    fontSize: width * 0.037, // Adjust font size based on screen width
    marginTop: 20,
    color: "black",
    marginStart: width * 0.0125, // Adjust start margin based on screen width
    marginRight: width * 0.0125, // Adjust right margin based on screen width
    fontWeight: "bold",
  },
  love: {
    height: width * 0.05, // Adjust height based on screen width
    width: width * 0.05, // Adjust width based on screen width
    marginTop: 20,
    marginLeft: 0,
  },

  resumetext: {
    fontSize: 18,
    color: "blue",
    marginStart: 10,
    marginTop: 3,
  },
  resumetexttwo: {
    fontSize: 14,
    color: "black",
    marginStart: 10,
    marginTop: 1,
  },

  resumeapply: {
    backgroundColor: "#9947e5",
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 5,
    height: 30,
    paddingVertical: 5,
    paddingHorizontal: 40,
    borderRadius: 8,
  },

  resumeapplytext: {
    color: "#fff",
    fontSize: 13,
    textAlign: "center",

    fontWeight: "bold",
  },
});
