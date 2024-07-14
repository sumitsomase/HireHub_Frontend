import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { getUserEmail } from "./asyncstorage";

const { width, height } = Dimensions.get("window");

const Profile = () => {
  const [userEmail, setUserEmail] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchUserEmail = async () => {
      try {
        const storedEmail = await getUserEmail();
        console.log("Fetched user email:", storedEmail); // Debug log
        if (storedEmail) {
          setUserEmail(storedEmail);
        }
      } catch (error) {
        console.error("Failed to fetch user email from AsyncStorage:", error);
        Alert.alert("Error", "Failed to fetch user email");
      }
    };
    fetchUserEmail();
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    // Handle save logic if needed
    setIsEditing(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.cardforrtext}>
          <Text style={styles.jointext}>YOUR STORY, YOUR PROFILE</Text>
        </View>

        <Text style={styles.createtext}>
          Brand #Culture And #Collaboration.
        </Text>

        <View style={styles.adjustimg}>
          <Image
            source={require("../assets/profileimg2.jpg")}
            style={styles.imgone}
          />
        </View>

        <Text style={styles.title}>Profile</Text>

        {isEditing ? (
          <View style={styles.color}>
            <Text style={styles.labelone}>Email:</Text>
            <TextInput
              style={styles.input}
              value={userEmail}
              onChangeText={(text) => setUserEmail(text)}
              editable={false}
            />
            <TouchableOpacity style={styles.buttonone} onPress={handleSave}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <Text style={styles.label}>Email: {userEmail}</Text>
            <TouchableOpacity style={styles.button} onPress={handleEdit}>
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "1%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: height * 0.075,
    marginTop: height * 0.05,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: height * 0.0125,
    color: "#0E46A3",
    fontWeight: "bold",
    marginStart: width * 0.2,
    marginRight: width * 0.05,
  },
  labelone: {
    fontSize: 16,
    marginBottom: height * 0.0125,
    color: "#0E46A3",
    fontWeight: "bold",
    marginStart: width * 0.05,
  },
  input: {
    height: height * 0.05,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: height * 0.025,
    paddingHorizontal: width * 0.025,
    marginStart: width * 0.05,
    marginRight: width * 0.05,
    borderRadius: 10,
  },
  imgone: {
    height: height * 0.34,
    width: width * 0.99,
    marginTop: height * 0.0475,
  },
  cardforrtext: {
    backgroundColor: "rgb(140, 50, 62)",
    borderRadius: 0,
    padding: 0,
    marginBottom: 0,
    marginHorizontal: width * 0.025,
    marginTop: height * 0.04375,
    height: height * 0.0625,
    width: width * 0.8,
    marginStart: width * 0.0875,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  jointext: {
    color: "white",
    marginStart: width * 0.175,
    marginTop: height * 0.015,
    fontWeight: "bold",
  },
  createtext: {
    color: "black",
    marginStart: width * 0.2,
    marginTop: height * 0.015,
  },
  button: {
    backgroundColor: "#9947e5",
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.25,
    borderRadius: 10,
    marginStart: width * 0.2,
    marginEnd: width * 0.125,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonone: {
    backgroundColor: "#9947e5",
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.25,
    borderRadius: 10,
    marginStart: width * 0.225,
    marginEnd: width * 0.125,
    marginBottom: height * 0.0625,
  },
  color: {
    backgroundColor: "#EEF7FF",
    borderRadius: 10,
    marginStart: width * 0.0125,
    marginEnd: width * 0.0125,
    marginBottom: height * 0.0125,
    height: height * 0.2,
  },
});

export default Profile;
