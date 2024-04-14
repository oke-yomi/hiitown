// eslint-disable-next-line import/order
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Home from "components/Home";
import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import { Colors } from "theme/colors";

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="black" />

      <Home />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
});
