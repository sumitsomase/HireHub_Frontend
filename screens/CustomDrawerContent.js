import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Entypo from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const { width } = Dimensions.get("window");

const CustomDrawerContent = (props) => {
  const { navigation, state } = props; // Access navigation and state from props
  const { routes } = state;

  const icons = {
    Home: "home",
    Profile: "user-o",
    Settings: "settings",
    Hackthons: "computer",
    Whatsapp: "whatsapp",
    Instagram: "instagram",
    Careers: "bag",
    Services: "laptop-code",
    About: "smiley",
  };

  const renderDivider = (route, index) => {
    if (index < routes.length - 1) {
      if (
        (route.name === "Settings" && routes[index + 1].name === "Hackthons") ||
        (route.name === "Hackthons" && routes[index + 1].name === "Whatsapp") ||
        (route.name === "Instagram" && routes[index + 1].name === "Careers")
      ) {
        return <View style={styles.divider} />;
      }
    }
    return null;
  };

  const renderSectionTitles = (route, index) => {
    switch (route.name) {
      case "Settings":
        return (
          <Text style={styles.textAboveHackthons}>
            Online Hackathon Festivals
          </Text>
        );
      case "Hackthons":
        return <Text style={styles.textAboveHackthons}>Join Us</Text>;
      case "Instagram":
        return <Text style={styles.textAboveHackthons}>Others</Text>;
      default:
        return null;
    }
  };

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.drawerContent}
      showsVerticalScrollIndicator={false}
    >
      <ImageBackground
        source={require("../assets/img_06.png")}
        style={styles.background}
      >
        <View style={styles.drawerHeader}>
          {/* Add your custom header content here (optional) */}
        </View>
      </ImageBackground>

      {routes.map((route, index) => (
        <View key={route.key}>
          <DrawerItem
            label={route.name}
            icon={({ color, size }) => {
              return (
                <View style={{ marginRight: -10 }}>
                  {route.name === "Home" ? (
                    <Entypo
                      name={icons[route.name]}
                      color={color}
                      size={size}
                    />
                  ) : route.name === "Settings" ? (
                    <Ionicons
                      name={icons[route.name]}
                      color={color}
                      size={size}
                    />
                  ) : route.name === "Hackthons" ? (
                    <MaterialIcons
                      name={icons[route.name]}
                      color={color}
                      size={size}
                    />
                  ) : route.name === "Careers" ? (
                    <Ionicons
                      name={icons[route.name]}
                      color={color}
                      size={size}
                    />
                  ) : route.name === "Services" ? (
                    <Entypo name={icons[route.name]} color={color} size={19} />
                  ) : route.name === "About" ? (
                    <Fontisto
                      name={icons[route.name]}
                      color={color}
                      size={size}
                    />
                  ) : (
                    <FontAwesomeIcon
                      name={icons[route.name]}
                      color={color}
                      size={size}
                    />
                  )}
                </View>
              );
            }}
            onPress={() => navigation.navigate(route.name)}
            labelStyle={styles.labelStyle}
          />

          {/* Render divider between specific items */}
          {renderDivider(route, index)}

          {/* Render section titles */}
          {renderSectionTitles(route, index)}
        </View>
      ))}
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  drawerHeader: {
    backgroundColor: "transparent",
    height: width * 0.5, // Adjust header height based on screen width
    alignItems: "center",
    justifyContent: "center",
  },
  drawerContent: {
    paddingTop: 0,
  },
  labelStyle: {
    fontSize: width * 0.04, // Adjust font size based on screen width
    color: "blue",
    fontWeight: "bold",
  },
  divider: {
    height: 1,
    backgroundColor: "black",
    marginHorizontal: width * 0.05, // Adjust margin based on screen width
    marginTop: width * 0.01,
  },
  textAboveHackthons: {
    marginTop: width * 0.02, // Adjust margin top based on screen width
    marginLeft: width * 0.05, // Adjust margin left based on screen width
    marginBottom: width * 0.03, // Adjust margin bottom based on screen width
    fontWeight: "bold",
  },
});

export default CustomDrawerContent;
