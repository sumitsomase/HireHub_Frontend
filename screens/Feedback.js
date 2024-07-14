import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const submitFeedback = () => {
    // Check if any field is empty
    if (!feedback.trim()) {
      showAlert("Feedback is required");
      return;
    }
    if (!name.trim()) {
      showAlert("Name is required");
      return;
    }
    if (!email.trim()) {
      showAlert("Email is required");
      return;
    }

    // Implement submission logic (e.g., send feedback data to backend)
    console.log("Submitting feedback:", { feedback, rating, name, email });
    // Reset fields after submission if needed
    setFeedback("");
    setRating(0);
    setName("");
    setEmail("");
    // Show confirmation message
    setModalVisible(true);
  };

  const showAlert = (message) => {
    Alert.alert(
      "Validation Error",
      message,
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.feedbackContainer}>
        <Text style={styles.title}>Feedback</Text>

        <TextInput
          style={styles.input}
          multiline
          placeholder="Enter your feedback..."
          value={feedback}
          onChangeText={(text) => setFeedback(text)}
        />

        {/* Example rating component (you can use a library like react-native-ratings) */}
        {/* <Rating
          showRating
          onFinishRating={rating => setRating(rating)}
          style={{ paddingVertical: 10 }}
        /> */}

        <TextInput
          style={styles.input}
          placeholder="Your Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Your Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Button title="Submit Feedback" onPress={submitFeedback} />
      </View>

      {/* Confirmation Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Thank you for your feedback!</Text>
            <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  feedbackContainer: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  modalButton: {
    backgroundColor: "#3498db",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Feedback;
