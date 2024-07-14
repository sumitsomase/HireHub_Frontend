import React, { useState } from "react";
import { Linking } from "react-native";
import {
  View,
  TextInput,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  Dimensions,
} from "react-native";

import Entypo from "react-native-vector-icons/Entypo";

const { width, height } = Dimensions.get("window");

const ServiceBased = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredData1, setFilteredData1] = useState([]);

  const data1 = [
    {
      id: 1,
      name: "Tcs",
      image: require("../assets/tcs.png"),
      link: "https://www.tcs.com/careers",
      logoStyle: { marginTop: 5 },
    },
    {
      id: 2,
      name: "Infosys",
      image: require("../assets/infosys.png"),
      link: "https://www.infosys.com/careers/apply.html",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 3,
      name: "Accenture",
      image: require("../assets/accenture.png"),
      link: "https://www.accenture.com/in-en/careers",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 4,
      name: "Mphasis",
      image: require("../assets/mphasis.png"),
      link: "https://careers.mphasis.com/home.html",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 5,
      name: "Hexawaretech",
      image: require("../assets/hexawaretech.png"),
      link: "https://jobs.hexaware.com/#en/sites/CX_1",
      logoStyle: { height: 50 },
    },
    {
      id: 6,
      name: "Zomato",
      image: require("../assets/zomato.png"),
      link: "https://www.zomato.com/careers",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 7,
      name: "Swiggy",
      image: require("../assets/swiggy.png"),
      link: "https://careers.swiggy.com/#/",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 8,
      name: "Biralasoft",
      image: require("../assets/biralasoft.png"),
      link: "https://www.birlasoft.com/careers",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 9,
      name: "Dxctech",
      image: require("../assets/dxctech.png"),
      link: "https://careers.dxc.com/global/en",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 10,
      name: "Genpact",
      image: require("../assets/genpact.png"),
      link: "https://www.genpact.com/careers",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 11,
      name: "Atos",
      image: require("../assets/atos.png"),
      link: "https://atos.net/en/careers",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 12,
      name: "Pwc",
      image: require("../assets/pwc.png"),
      link: "https://www.pwc.com/gx/en/careers.html",
      logoStyle: { marginTop: 3 },
    },
    {
      id: 13,
      name: "Craveinfotech",
      image: require("../assets/craveinfotech.png"),
      link: "https://www.craveinfotech.com/about/careers/",
      logoStyle: { height: 50 },
    },

    {
      id: 14,
      name: "Wipro",
      image: require("../assets/wipro.png"),
      link: "https://careers.wipro.com/careers-home/",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 15,
      name: "Cognizant",
      image: require("../assets/cognizant.png"),
      link: "https://careers.cognizant.com/global-en/ ",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 16,
      name: "Facebook",
      image: require("../assets/facebook.png"),
      link: "https://www.metacareers.com/jobs/",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 17,
      name: "Kpmg",
      image: require("../assets/kpmg.png"),
      link: "https://kpmg.com/in/en/home/careers.html",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 18,
      name: "Jtherland",
      image: require("../assets/sutherland.png"),
      link: "https://www.sutherlandglobal.com/careers/",
      logoStyle: { height: 50 },
    },
    {
      id: 19,
      name: "Wns",
      image: require("../assets/wns.png"),
      link: "https://www.wnscareers.com/",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 20,
      name: "Neusoft",
      image: require("../assets/neusoft.png"),
      link: "https://www.neusoft.com/Careers/",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 21,
      name: "Virtusa",
      image: require("../assets/virtusa.png"),
      link: "https://www.virtusa.com/careers",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 22,
      name: "Fujitsu",
      image: require("../assets/fujitsu.png"),
      link: "https://www.fujitsu.com/in/about/careers/",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 23,
      name: "Nttdata",
      image: require("../assets/nttdata.png"),
      link: "https://www.nttdata.com/global/en/careers",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 24,
      name: "Techwave",
      image: require("../assets/techwave.png"),
      link: "https://techwave.net/careers/",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 25,
      name: "Groundtruth",
      image: require("../assets/groundtruth.jpeg"),
      link: "https://www.groundtruth.com/jobs/",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 26,
      name: "Wileyedge",
      image: require("../assets/wileyedge.png"),
      link: "https://www.wiley.com/edge/careers/",
      logoStyle: { marginTop: 7 },
    },

    {
      id: 27,
      name: "Linkedin",
      image: require("../assets/linkedin.png"),
      link: "https://careers.linkedin.com/",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 28,
      name: "Flipkart",
      image: require("../assets/flipkart.png"),
      link: "https://www.flipkartcareers.com/#!/",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 29,
      name: "Deloitte",
      image: require("../assets/deloitte.png"),
      link: "https://jobsindia.deloitte.com/",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 30,
      name: "Presidio",
      image: require("../assets/presidio.png"),
      link: "https://www.presidio.com/careers/",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 31,
      name: "Avasoft",
      image: require("../assets/avasoft.png"),
      link: "https://www.avasoft.com/career/",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 32,
      name: "Concentrix",
      image: require("../assets/concentrix.png"),
      link: "https://jobs.concentrix.com/",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 33,
      name: "Geeksforgeeks",
      image: require("../assets/geeksforgeeks.png"),
      link: "https://www.geeksforgeeks.org/jobs",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 34,
      name: "Leetcode",
      image: require("../assets/leetcode.png"),
      link: "https://leetcode.com/discuss/career?currentPage=1&orderBy=hot&query=",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 35,
      name: "Cloudsek",
      image: require("../assets/cloudsek.png"),
      link: "https://www.cloudsek.com/openings",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 36,
      name: "Phonepe",
      image: require("../assets/phonepe.png"),
      link: "https://www.phonepe.com/careers/",
      logoStyle: { height: 50 },
    },
    {
      id: 37,
      name: "Cred",
      image: require("../assets/cred.png"),
      link: "https://careers.cred.club/openings",
      logoStyle: { marginTop: 7 },
    },

    {
      id: 38,
      name: "Capgemini",
      image: require("../assets/capgemini.png"),
      link: "https://www.capgemini.com/in-en/careers/",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 39,
      name: "Hcltech",
      image: require("../assets/hcltech.png"),
      link: "https://www.hcltech.com/careers/careers-in-india",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 40,
      name: "Techmahindra",
      image: require("../assets/techmahindra.png"),
      link: "https://careers.techmahindra.com/",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 41,
      name: "Paytm",
      image: require("../assets/paytm.png"),
      link: "https://paytm.com/fse",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 42,
      name: "Globant",
      image: require("../assets/globant.png"),
      link: "https://www.globant.com/careers",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 43,
      name: "I3tech",
      image: require("../assets/i3tech.png"),
      link: "https://i3tech.com/careers/",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 44,
      name: "Ubs",
      image: require("../assets/ubs.png"),
      link: "https://www.ubs.com/global/en/careers.html",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 45,
      name: "Triplelift",
      image: require("../assets/triplelift.png"),
      link: "https://triplelift.com/careers/",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 46,
      name: "Uplers",
      image: require("../assets/uplers.png"),
      link: "https://www.uplers.com/careers/",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 47,
      name: "Synechron",
      image: require("../assets/synechro.png"),
      link: "https://www.synechron.com/en-in/careers",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 48,
      name: "Miniorange",
      image: require("../assets/miniorange.webp"),
      link: "https://www.miniorange.com/career/",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 49,
      name: "Luxoft",
      image: require("../assets/luxoft.png"),
      link: "https://career.luxoft.com/jobs",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 50,
      name: "Coursera",
      image: require("../assets/coursera.png"),
      link: "https://www.coursera.org/career-academy/?trk_ref=globalnav",
      logoStyle: { marginTop: 7 },
    },
  ];

  const handleSearch = (text) => {
    const filtered1 = data1.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );

    setSearchText(text);
    setFilteredData1(filtered1);
  };

  const handleCompanySelection = (item) => {
    if (item.link) {
      Linking.openURL(item.link);
    }
    setSearchText("");
    setFilteredData1([]);
  };

  const renderCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => handleCompanySelection(item)}
    >
      <Image source={item.image} style={[styles.logo, item.logoStyle]} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.searchcontainer}>
          <View style={styles.searchBarContainer}>
            <Entypo
              name="magnifying-glass"
              size={20}
              color="gray"
              style={styles.searchIcon}
            />
            <TextInput
              style={[styles.searchBar, styles.searchBarText]}
              placeholder="Choose Your Dream Company Here"
              onChangeText={handleSearch}
              value={searchText}
              onFocus={handleCompanySelection}
            />
          </View>
        </View>

        <View style={styles.flat}>
          {/* First FlatList */}
          <FlatList
            data={
              searchText === ""
                ? data1.slice(0, 13)
                : filteredData1.slice(0, 13)
            }
            renderItem={renderCard}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.flatList}
          />

          {/* Second FlatList */}
          <FlatList
            data={
              searchText === ""
                ? data1.slice(13, 26)
                : filteredData1.slice(13, 26)
            }
            renderItem={renderCard}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.flatList}
          />

          {/* Third FlatList */}
          <FlatList
            data={
              searchText === ""
                ? data1.slice(26, 37)
                : filteredData1.slice(26, 37)
            }
            renderItem={renderCard}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.flatList}
          />

          {/* Fourth FlatList */}
          <FlatList
            data={
              searchText === ""
                ? data1.slice(37, 50)
                : filteredData1.slice(37, 50)
            }
            renderItem={renderCard}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.flatList}
          />
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Text style={styles.lovetext}>Service with</Text>
          <Image
            source={require("../assets/heartone.png")}
            style={styles.love}
          ></Image>

          <Text style={styles.loveonetext}>Excellence Every Day</Text>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: height * 0.06, // Adjusted for responsiveness
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: height * 0.01, // Adjusted for responsiveness
    paddingHorizontal: width * 0.03, // Adjusted for responsiveness
    borderRadius: width * 0.025, // Adjusted for responsiveness
    marginTop: height * 0.03, // Adjusted for responsiveness
    marginStart: width * 0.05, // Adjusted for responsiveness
    marginEnd: width * 0.05, // Adjusted for responsiveness
  },
  searchIcon: {
    marginRight: width * 0.025, // Adjusted for responsiveness
  },
  searchBar: {
    flex: 1,
  },
  searchBarText: {
    fontWeight: "bold", // Make the text bold
  },
  searchcontainer: {
    height: height * 0.12, // Adjusted for responsiveness
    backgroundColor: "#f0f8ff",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: width * 0.05,
    marginBottom: height * 0.01625,
    marginHorizontal: width * 0.025,
    height: height * 0.1125,
    width: width * 0.275,
    marginStart: width * 0.025,
    marginTop: height * 0.025,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logo: {
    width: width * 0.175, // Adjusted for responsiveness
    height: height * 0.04375, // Adjusted for responsiveness
    resizeMode: "contain",
  },
  flatList: {
    height: height * 0.16, // Adjusted for responsiveness
  },
  flat: {
    flex: 1,
    backgroundColor: "#fffaf0",
  },
  love: {
    height: height * 0.025, // Adjusted for responsiveness
    width: width * 0.05, // Adjusted for responsiveness
    marginTop: height * 0.075, // Adjusted for responsiveness
  },
  lovetext: {
    fontSize: width * 0.035, // Adjusted for responsiveness
    marginTop: height * 0.075, // Adjusted for responsiveness
    color: "black",
    marginStart: width * 0.2, // Adjusted for responsiveness
    marginRight: width * 0.0125, // Adjusted for responsiveness

    fontWeight: "bold",
  },
  loveonetext: {
    fontSize: width * 0.035, // Adjusted for responsiveness
    marginTop: height * 0.075, // Adjusted for responsiveness
    color: "black",
    marginStart: width * 0.0125, // Adjusted for responsiveness
    marginRight: width * 0.0125, // Adjusted for responsiveness
    fontWeight: "bold",
  },
});

export default ServiceBased;
