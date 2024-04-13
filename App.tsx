import Home from "components/Home";
import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { Colors } from "theme/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="black" />

      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
});
