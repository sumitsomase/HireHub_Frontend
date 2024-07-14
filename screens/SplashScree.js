// components/SplashScreen.js
import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Sign in"); // Replace 'Main' with your main screen name
    }, 10000); // 10000 milliseconds = 10 seconds

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/hirehub.png")} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff", // Make sure this matches your splash screen background color
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});

export default SplashScreen;
