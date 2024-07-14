import React, { useEffect, useState, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeProvider, ThemeContext } from "./screens/themeContext";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import HomeScreen from "./screens/HomeScreen";
import Profile from "./screens/Profile";
import CustomDrawerContent from "./screens/CustomDrawerContent";
import Settings from "./screens/Settings";
import Hackthons from "./screens/Hackthons";
import Whatsapp from "./screens/Whatsapp";
import Instagram from "./screens/Instagram";
import Careers from "./screens/Careers";
import Services from "./screens/Services";
import About from "./screens/About";
import Productbased from "./screens/Productbased";
import Servicebased from "./screens/Servicebased";
import ForgotPassword from "./screens/Forgotpassword";
import Resetpassword from "./screens/Resetpassword";
import OTPscreen from "./screens/OTPscreen";
import Getajob from "./screens/Getajob";
import Tcsnqt from "./screens/Tcsnqt";
import Productvsservice from "./screens/Productvsservice";
import { LightTheme, AppDarkTheme } from "./screens/themes";
import SplashScreen from "./screens/SplashScree"; // Corrected the typo here
import HelpCenterScreen from "./screens/HelpCenterScreen";
import Feedback from "./screens/Feedback";
import Privacypolicy from "./screens/Privacypolicy";
import Resume from "./screens/Resume";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Sign in">
      <Stack.Screen
        name="Sign in"
        component={Login}
        options={{
          headerTitleAlign: "center",
          statusBarColor: "black",
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: "bold",
            color: "black",
          },
          headerStyle: {
            backgroundColor: "#fff5ee",
          },
        }}
      />
      <Stack.Screen
        name="Sign Up"
        component={Signup}
        options={{
          headerTitleAlign: "center",
          // Use "statusBarStyle" for the light content status bar
          headerStyle: {
            backgroundColor: "#f8f9fa",
            elevation: 0,
            shadowOpacity: 0, // Set header background color to black
          },
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: "bold",
            color: "#0E46A3", // Set header title color to white for contrast
          },
          headerTintColor: "#0E46A3", // Set back button color
          statusBarColor: "black", // Set status bar color
        }}
      />

      <Stack.Screen
        name="Product-Based Companies"
        component={Productbased}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#f8f9fa", // Set header background color
            elevation: 0, // Remove shadow on Android
            shadowOpacity: 0, // Remove shadow on iOS
          },
          headerTitleStyle: {
            fontSize: 18, // Adjust header title font size
            fontWeight: "bold",
            color: "#0E46A3", // Set header title text color
          },
          headerTintColor: "#0E46A3", // Set back button color
          statusBarColor: "black", // Set status bar color
        }}
      />

      <Stack.Screen
        name="Service-Based Companies"
        component={Servicebased}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#f8f9fa", // Set header background color
            elevation: 0, // Remove shadow on Android
            shadowOpacity: 0, // Remove shadow on iOS
          },
          headerTitleStyle: {
            fontSize: 18, // Adjust header title font size
            fontWeight: "bold",
            color: "#0E46A3", // Set header title text color
          },
          headerTintColor: "#0E46A3", // Set back button color
          statusBarColor: "black", // Set status bar color
        }}
      />

      <Stack.Screen
        name="Get-A-Job"
        component={Getajob}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#f8f9fa",
            elevation: 0, // Remove shadow on Android
            shadowOpacity: 0, // Remove shadow on iOS
          },
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
            color: "#0E46A3",
          },
          headerTintColor: "#0E46A3", // Back button color
          statusBarColor: "black", // Set status bar color
        }}
      />

      <Stack.Screen
        name="Tcs|Nqt"
        component={Tcsnqt}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#FFFFFF", // Set header background color
            elevation: 0, // Remove shadow on Android
            shadowOpacity: 0, // Remove shadow on iOS
          },
          headerTitleStyle: {
            fontSize: 20, // Adjust header title font size
            fontWeight: "bold",
            color: "#0E46A3", // Set header title text color
          },
          headerTintColor: "#0E46A3", // Set back button color
          statusBarColor: "black", // Set status bar color
        }}
      />

      <Stack.Screen
        name="Categories(Product & Service)"
        component={Productvsservice}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#f8f9fa",
            elevation: 0, // Remove shadow on Android
            shadowOpacity: 0, // Remove shadow on iOS
          },
          headerTitleStyle: {
            fontSize: 17,
            fontWeight: "bold",
            color: "#0E46A3",
          },
          headerTintColor: "#0E46A3", // Back button color
          statusBarColor: "black", // Set status bar color
        }}
      />

      <Stack.Screen
        name="Privacy Policy"
        component={Privacypolicy}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#f8f9fa",
            elevation: 0, // Remove shadow on Android
            shadowOpacity: 0, // Remove shadow on iOS
          },
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: "bold",
            color: "#0E46A3",
          },
          headerTintColor: "#0E46A3", // Back button color
          statusBarColor: "black", // Set status bar color
        }}
      />

      <Stack.Screen
        name="Resumify"
        component={Resume}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#f8f9fa",
            elevation: 0, // Remove shadow on Android
            shadowOpacity: 0, // Remove shadow on iOS
          },
          headerTitleStyle: {
            fontSize: 19,
            fontWeight: "bold",
            color: "#0E46A3",
          },
          headerTintColor: "#0E46A3", // Back button color
          statusBarColor: "black", // Set status bar color
        }}
      />
      <Stack.Screen
        name="Forgot password"
        component={ForgotPassword}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#f8f9fa",
            elevation: 0, // Remove shadow on Android
            shadowOpacity: 0, // Remove shadow on iOS
          },
          headerTitleStyle: {
            fontSize: 19,
            fontWeight: "bold",
            color: "#0E46A3",
          },
          headerTintColor: "#0E46A3", // Back button color
          statusBarColor: "black", // Set status bar color
        }}
      />
      <Stack.Screen
        name="Resetpassword"
        component={Resetpassword}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#f8f9fa",
            elevation: 0, // Remove shadow on Android
            shadowOpacity: 0, // Remove shadow on iOS
          },
          headerTitleStyle: {
            fontSize: 19,
            fontWeight: "bold",
            color: "#0E46A3",
          },
          headerTintColor: "#0E46A3", // Back button color
          statusBarColor: "black", // Set status bar color
        }}
      />
      <Stack.Screen
        name="Verify Your OTP"
        component={OTPscreen}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#f8f9fa",
            elevation: 0, // Remove shadow on Android
            shadowOpacity: 0, // Remove shadow on iOS
          },
          headerTitleStyle: {
            fontSize: 19,
            fontWeight: "bold",
            color: "#0E46A3",
          },
          headerTintColor: "#0E46A3", // Back button color
          statusBarColor: "black", // Set status bar color
        }}
      />
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          headerTitleAlign: "center",
          statusBarColor: "black",
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: "bold",
            color: "black",
          },
        }}
      />
      <Stack.Screen
        name="HireHub Help Center"
        component={HelpCenterScreen}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#f8f9fa", // Set a background color for the header
            elevation: 0, // Remove shadow on Android
            shadowOpacity: 0, // Remove shadow on iOS
          },
          headerTitleStyle: {
            fontSize: 18, // Adjust header title font size
            fontWeight: "bold",
            color: "#0E46A3", // Set header title text color
          },
          headerTintColor: "#0E46A3", // Set back button color
          statusBarColor: "black", // Set status bar color
        }}
      />

      <Stack.Screen
        name="Feedback"
        component={Feedback}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#f8f9fa", // Set header background color
            elevation: 0, // Remove shadow on Android
            shadowOpacity: 0, // Remove shadow on iOS
          },
          headerTitleStyle: {
            fontSize: 20, // Adjust header title font size
            fontWeight: "bold",
            color: "#0E46A3", // Set header title text color
          },
          headerTintColor: "#0E46A3", // Set back button color
          statusBarColor: "black", // Set status bar color
        }}
      />

      <Stack.Screen
        name="HomeScreen"
        component={DrawerNavigation}
        options={{
          headerShown: false,
          statusBarColor: "black",
        }}
      />
    </Stack.Navigator>
  );
}

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f8f9fa", // Set header background color
        },
        headerTintColor: "#0E46A3", // Set header text color
        headerTitleStyle: {
          fontSize: 20, // Adjust header title font size
          fontWeight: "bold",
          color: "#0E46A3",
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ title: "Profile" }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{ title: "Settings" }}
      />
      <Drawer.Screen
        name="Hackthons"
        component={Hackthons}
        options={{ title: "Hackthons" }}
      />
      <Drawer.Screen
        name="Whatsapp"
        component={Whatsapp}
        options={{ title: "WhatsApp" }}
      />
      <Drawer.Screen
        name="Instagram"
        component={Instagram}
        options={{ title: "Instagram" }}
      />
      <Drawer.Screen
        name="Careers"
        component={Careers}
        options={{ title: "Careers" }}
      />
      <Drawer.Screen
        name="Services"
        component={Services}
        options={{ title: "Services" }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{ title: "About" }}
      />
    </Drawer.Navigator>
  );
}

const AppContainer = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [initialRoute, setInitialRoute] = useState("Sign in");

  useEffect(() => {
    const checkUserEmail = async () => {
      try {
        const userEmail = await AsyncStorage.getItem("userEmail");
        if (userEmail) {
          setInitialRoute("HomeScreen");
        }
      } catch (error) {
        console.error("Failed to check user email:", error);
      }
    };

    checkUserEmail();
  }, []);

  return (
    <NavigationContainer theme={isDarkMode ? AppDarkTheme : LightTheme}>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen
          name="AuthStack"
          component={AuthStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DrawerNavigation"
          component={DrawerNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContainer />
    </ThemeProvider>
  );
}

export default App;
