import React, { useState } from "react";
import { WebView } from "react-native-webview";
import { useNavigation } from "@react-navigation/native";
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

const Productvsservice = () => {
  const navigation = useNavigation();

  const handleproductbased = () => {
    navigation.navigate("Product-Based Companies");
  };

  const handleservicebased = () => {
    navigation.navigate("Service-Based Companies");
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.Productbased}>
          <Text style={styles.firsttext}>PRODUCT BASED COMPANY</Text>
          <Text style={styles.secondtext}>
            A product-based company is one in which the business focuses on
            creating and selling products. These products can be tangible, such
            as a physical object that you can see and touch, or intangible, like
            a software application. The main goal of a product-based company is
            to generate revenue by selling products to customers. For example,
            Apple is a company that develops and sells consumer electronics,
            such as mobile phones, computers, tablets, and software.
          </Text>
        </View>

        <View style={styles.Servicebased}>
          <Text style={styles.thirdtext}>SERVICE BASED COMPANY</Text>
          <Text style={styles.fourttext}>
            A service based company is one in which the focus of the business is
            to deliver services to customers. Services are intangible products
            that require human involvement to be delivered. For example, an IT
            consulting firm may provide IT project management or network support
            services. The primary goal of a service-based company is to generate
            revenue by selling its time or expertise to customers rather than
            selling products directly.
          </Text>
        </View>

        <View style={styles.Serviceproductbased}>
          <Text style={styles.thirdtext}>
            Product Based VS Service Based: What’s Best For Tech Professionals?
          </Text>
          <Text style={styles.fivetext}>
            When selecting a company to work for, computer workers have a lot of
            options. While some businesses concentrate on creating products,
            others concentrate on offering services. Both sorts of businesses
            have benefits and drawbacks. Which one should you choose between a
            service-based and a product-based business model?
          </Text>

          <Text style={styles.sixtext}>
            Companies that focus on products frequently provide greater
            prospects for career progression and higher pay. Since they depend
            less on outside variables like the economy or market movements, they
            also tend to be more stable. However, hiring these businesses might
            be more difficult, and the work may also be more demanding.
            Service-based businesses are typically simpler to work for and
            frequently provide less challenging jobs.
          </Text>

          <Text style={styles.sixtext}>
            Additionally, because they can swiftly adjust to changes in the
            market or in customer expectations, these businesses are frequently
            more adaptable. As a result of their dependence on the success of
            their clients or the performance of the businesses they collaborate
            with, they can, nevertheless, be less stable.
          </Text>

          <Text style={styles.sixtext}>
            A product-based corporation is definitely your best bet if you're
            looking for a high-paying, fast-paced, and tough employment. The
            distinction between product-based and service-based businesses is
            that if you're seeking for more flexibility and stability, a
            service-based business may be more suitable.
          </Text>
        </View>

        <View style={styles.videoContainer}>
          <WebView
            style={styles.video}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            allowsFullscreenVideo={true}
            source={{
              uri: "https://www.youtube.com/embed/bJW4DR_5nTM?si=Do1X9q3rooV2rtL4",
            }}
            mediaPlaybackRequiresUserAction={false}
          />
        </View>

        <View style={styles.visit}>
          <Text style={styles.visittext}>PRODUCT-BASED-COMPANIES</Text>

          <TouchableOpacity style={styles.button} onPress={handleproductbased}>
            <Text style={styles.buttonText}>Product-Based</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.visit}>
          <Text style={styles.visittext}>SERVICE-BASED-COMPANIES</Text>

          <TouchableOpacity
            style={styles.buttontwo}
            onPress={handleservicebased}
          >
            <Text style={styles.buttonText}>Service-Based</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Productvsservice;

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
  },

  secondtext: {
    fontSize: 16, // Slightly smaller font size for the body text
    marginTop: 20,
    lineHeight: 24, // Add line height for better readability
    textAlign: "justify", // Justify the text for a cleaner look
    color: "#555", // Optional: Set a color for the text
    marginStart: 10,
    marginRight: 5,
  },

  thirdtext: {
    fontSize: 19,
    marginTop: 25,
    textAlign: "center",
    fontWeight: "bold",
  },

  fourttext: {
    fontSize: 16, // Slightly smaller font size for the body text
    marginTop: 20,
    lineHeight: 24, // Add line height for better readability
    textAlign: "justify", // Justify the text for a cleaner look
    color: "#555", // Optional: Set a color for the text
    marginStart: 10,
    marginRight: 5,
  },

  fivetext: {
    fontSize: 16, // Slightly smaller font size for the body text
    marginTop: 20,
    lineHeight: 24, // Add line height for better readability
    textAlign: "justify", // Justify the text for a cleaner look
    color: "#555", // Optional: Set a color for the text
    marginStart: 10,
    marginRight: 5,
  },

  sixtext: {
    fontSize: 16, // Slightly smaller font size for the body text
    marginTop: 20,
    lineHeight: 24, // Add line height for better readability
    textAlign: "justify", // Justify the text for a cleaner look
    color: "#555", // Optional: Set a color for the text
    marginStart: 10,
    marginRight: 5,
  },

  videoContainer: {
    height: 230,
    marginTop: 30,
    marginBottom: 30,
  },
  video: {
    flex: 1,
  },

  button: {
    backgroundColor: "#9947e5",
    paddingVertical: width * 0.03, // Adjust vertical padding based on screen width
    paddingHorizontal: width * 0.25, // Adjust horizontal padding based on screen width
    borderRadius: 10,
    marginBottom: width * 0.05, // Adjust bottom margin based on screen width
    marginStart: width * 0.075, // Adjust start margin based on screen width
    marginEnd: width * 0.075, // Adjust end margin based on screen width
  },
  buttonText: {
    color: "#fff",
    fontSize: width * 0.04, // Adjust font size based on screen width
    textAlign: "center",
    fontWeight: "bold",
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
    paddingVertical: width * 0.03, // Adjust vertical padding based on screen width
    paddingHorizontal: width * 0.25, // Adjust horizontal padding based on screen width
    borderRadius: 10,
    marginBottom: width * 0.1, // Adjust bottom margin based on screen width
    marginStart: width * 0.075, // Adjust start margin based on screen width
    marginEnd: width * 0.075, // Adjust end margin based on screen width
  },
});
