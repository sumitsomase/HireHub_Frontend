import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const FormScreen = () => {
  return (
    <View style={styles.container}>
      <WebView 
        source={{ uri: 'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__VgypipUQ0RKSjlESlJQODgwMzE1QkVSV0NMVDhONi4u&embed=true' }} 
        style={styles.webview} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default FormScreen;
