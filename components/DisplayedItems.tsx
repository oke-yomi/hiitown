import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "theme/colors";

const DisplayedItems = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Popular (10)</Text>

      <View>
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        ].map((it) => (
          <Text key={it} style={{ color: Colors.yellow, marginBottom: 12 }}>
            Hello number {it}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default DisplayedItems;

const styles = StyleSheet.create({
  container: { paddingHorizontal: 24, marginTop: 32 },
  heading: {
    color: Colors.white,
    fontWeight: "500",
    fontSize: 20,
    marginBottom: 16,
  },
});
