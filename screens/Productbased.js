import React, { useState } from "react";
import { Linking } from "react-native";
import {
  View,
  TextInput,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  Dimensions,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

const { width, height } = Dimensions.get("window");

const ProductBased = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredData1, setFilteredData1] = useState([]);

  const data1 = [
    {
      id: 1,
      name: "Amazon",
      image: require("../assets/amazon.png"),
      link: "https://www.amazon.jobs/en/search?base_query=work+from+home&loc_query",
      logoStyle: { marginTop: 10 },
    },
    {
      id: 2,
      name: "Google",
      image: require("../assets/google.png"),
      link: "https://www.google.com/about/careers/applications/jobs/results/?q=india",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 3,
      name: "Microsoft",
      image: require("../assets/microsoft.png"),
      link: "https://careers.microsoft.com/v2/global/en/home.html",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 4,
      name: "Ibm",
      image: require("../assets/ibm2.png"),
      link: "https://www.ibm.com/careers",
      logoStyle: { height: 50, width: 75 },
    },
    {
      id: 5,
      name: "Cisco",
      image: require("../assets/cisco.png"),
      link: "https://www.cisco.com/c/en/us/about/careers.html",
      logoStyle: { marginTop: 6 },
    },
    {
      id: 6,
      name: "Nvidia",
      image: require("../assets/nvidia.png"),
      link: "https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 7,
      name: "Artcode",
      image: require("../assets/artcode.png"),
      link: "https://artcode.in/careers",
      logoStyle: { height: 70 },
    },
    {
      id: 8,
      name: "Spacematrix",
      image: require("../assets/spacematrix.png"),
      link: "https://www.spacematrix.com/en/about-us/careers",
      logoStyle: { height: 50 },
    },
    {
      id: 9,
      name: "Github",
      image: require("../assets/github.png"),
      link: "https://www.github.careers/careers-home",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 10,
      name: "Dropbox",
      image: require("../assets/dropbox.png"),
      link: "https://jobs.dropbox.com/es-es/all-jobs",
      logoStyle: { height: 50, width: 70 },
    },
    {
      id: 11,
      name: "Alphabet",
      image: require("../assets/alphabet.png"),
      link: "https://www.alphabet.com/en-ww/company-careers",
      logoStyle: { marginTop: 8 },
    },
    {
      id: 12,
      name: "Intel",
      image: require("../assets/intel.png"),
      link: "https://jobs.intel.com/en",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 13,
      name: "Zoominfo",
      image: require("../assets/zoominfo.png"),
      link: "https://www.zoominfo.com/careers",
      logoStyle: { marginTop: 7 },
    },

    {
      id: 14,
      name: "Gitlab",
      image: require("../assets/gitlab.png"),
      link: "https://about.gitlab.com/jobs/all-jobs/",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 15,
      name: "Amdocs",
      image: require("../assets/amdocs.png"),
      link: "https://www.amdocs.com/careers/home",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 16,
      name: "Crowdstrike",
      image: require("../assets/crowdstrike.png"),
      link: "https://www.crowdstrike.com/careers/",
      logoStyle: { marginTop: 3, height: 30 },
    },
    {
      id: 17,
      name: "Sap",
      image: require("../assets/sap.png"),
      link: "https://jobs.sap.com/",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 18,
      name: "Square",
      image: require("../assets/square.png"),
      link: "https://careers.squareup.com/us/en",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 19,
      name: "Qualcomm",
      image: require("../assets/qualcomm.png"),
      link: "https://careers.qualcomm.com/careers",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 20,
      name: "Datadog",
      image: require("../assets/datadog.webp"),
      link: "https://careers.datadoghq.com/",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 21,
      name: "Browserstack",
      image: require("../assets/browserstack.png"),
      link: "https://www.browserstack.com/careers",
      logoStyle: { height: 50 },
    },
    {
      id: 22,
      name: "Saleforce",
      image: require("../assets/saleforce.png"),
      link: "https://careers.salesforce.com/en/jobs/",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 23,
      name: "Dell",
      image: require("../assets/dell.png"),
      link: "https://jobs.dell.com/en",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 24,
      name: "Uber",
      image: require("../assets/uber.png"),
      link: "https://www.uber.com/in/en/careers/",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 25,
      name: "Atlassian",
      image: require("../assets/atlassian.png"),
      link: "https://www.atlassian.com/company/careers",
      logoStyle: { height: 50 },
    },
    {
      id: 26,
      name: "Workday",
      image: require("../assets/workday.png"),
      link: "https://www.workday.com/en-us/company/careers/overview.html",
      logoStyle: { marginTop: 3 },
    },

    {
      id: 27,
      name: "Volkswagen",
      image: require("../assets/volkswagen.png"),
      link: "https://www.volkswagen-group.com/en/career-16057",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 28,
      name: "Oracle",
      image: require("../assets/oracle.png"),
      link: "https://www.oracle.com/in/careers/",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 29,
      name: "Vmware",
      image: require("../assets/vmware.png"),
      link: "https://www.vmware.com/company.html",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 30,
      name: "Mongodb",
      image: require("../assets/mongodb.png"),
      link: "https://www.mongodb.com/company/careers",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 31,
      name: "Servicenow",
      image: require("../assets/servicenow.png"),
      link: "https://careers.servicenow.com/en/",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 32,
      name: "Docusign",
      image: require("../assets/docusign.png"),
      link: "https://careers.docusign.com/",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 33,
      name: "Redhat",
      image: require("../assets/redhat.png"),
      link: "https://www.redhat.com/en/jobs",
      logoStyle: { height: 50 },
    },
    {
      id: 34,
      name: "Whirlpool",
      image: require("../assets/whirlpool.png"),
      link: "https://www.whirlpoolcareers.com/",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 35,
      name: "Mindtree",
      image: require("../assets/mindtree.jpeg"),
      link: "https://www.ltimindtree.com/careers/",
      logoStyle: { height: 50 },
    },
    {
      id: 36,
      name: "Barclays",
      image: require("../assets/barclays.png"),
      link: "https://home.barclays/careers/",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 37,
      name: "Slack",
      image: require("../assets/slack.png"),
      link: "https://slack.com/intl/en-in/careers",
      logoStyle: { marginTop: 7 },
    },

    {
      id: 38,
      name: "Adobe",
      image: require("../assets/adobe.png"),
      link: "https://careers.adobe.com/us/en",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 39,
      name: "Mcafee",
      image: require("../assets/mcafee.png"),
      link: "https://careers.mcafee.com/global/en",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 40,
      name: "Zoho",
      image: require("../assets/zoho.png"),
      link: "https://careers.zohocorp.com/jobs/Careers",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 41,
      name: "Ey",
      image: require("../assets/ey.png"),
      link: "https://careers.ey.com/",
    },
    {
      id: 42,
      name: "Alphasense",
      image: require("../assets/alphasense.png"),
      link: "https://www.alpha-sense.com/careers/",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 43,
      name: "Cornerstone",
      image: require("../assets/cornerstone.webp"),
      link: "https://www.cornerstoneondemand.com/careers/",
    },
    {
      id: 44,
      name: "Deutschebank",
      image: require("../assets/deutschebank.png"),
      link: "https://careers.db.com/",
      logoStyle: { marginTop: 5 },
    },
    {
      id: 45,
      name: "Apple",
      image: require("../assets/apple.png"),
      link: "https://www.apple.com/careers/in/",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 46,
      name: "Hewlettpackard",
      image: require("../assets/hewlettpackard.png"),
      link: "https://careers.hpe.com/us/en",
      logoStyle: { height: 50 },
    },
    {
      id: 47,
      name: "Intuit",
      image: require("../assets/intuit.png"),
      link: "https://www.intuit.com/in/careers/",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 48,
      name: "Paypal",
      image: require("../assets/paypal.png"),
      link: "https://careers.pypl.com/home/",
      logoStyle: { marginTop: 5 },
    },
    {
      id: 49,
      name: "Okta",
      image: require("../assets/okta.png"),
      link: "https://www.okta.com/company/careers/",
      logoStyle: { marginTop: 7 },
    },
    {
      id: 50,
      name: "Bmc",
      image: require("../assets/bmc.png"),
      link: "https://www.bmc.com/careers/careers.html",
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
          <Text style={styles.lovetext}>Innovate with </Text>
          <Image
            source={require("../assets/heartone.png")}
            style={styles.love}
          ></Image>

          <Text style={styles.loveonetext}>Lead Tomorrow</Text>
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
    height: height * 0.05625,
    borderColor: "gray",
    borderWidth: 1.5,
    marginBottom: height * 0.0125,
    paddingHorizontal: width * 0.025,
    borderRadius: 10,
    marginTop: height * 0.03125,
    marginStart: width * 0.05,
    marginEnd: width * 0.05,
  },
  searchIcon: {
    marginRight: width * 0.025,
  },
  searchBar: {
    flex: 1,
  },
  searchBarText: {
    fontWeight: "bold", // Make the text bold
  },
  searchcontainer: {
    height: height * 0.125,
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
    width: width * 0.175,
    height: height * 0.04375,
    resizeMode: "contain",
  },
  flatList: {
    height: height * 0.1625,
  },
  flat: {
    flex: 1,
    backgroundColor: "#fffaf0",
  },
  love: {
    height: height * 0.025, // Adjusted for responsiveness
    width: width * 0.05, // Adjusted for responsiveness
    marginTop: height * 0.06, // Adjusted for responsiveness
  },

  lovetext: {
    fontSize: width * 0.04, // Adjusted for responsiveness
    marginTop: height * 0.06, // Adjusted for responsiveness
    color: "black",
    marginStart: width * 0.15, // Adjusted for responsiveness
    marginRight: width * 0.02, // Adjusted for responsiveness

    fontWeight: "bold",
  },

  loveonetext: {
    fontSize: width * 0.04, // Adjusted for responsiveness
    marginTop: height * 0.06, // Adjusted for responsiveness
    color: "black",
    marginStart: width * 0.02, // Adjusted for responsiveness
    marginRight: width * 0.02, // Adjusted for responsiveness
    fontWeight: "bold",
  },
});

export default ProductBased;
