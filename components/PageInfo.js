import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function PageInfo({ text1, text2 }) {
  return (
    <View style={styles.infoTextContainer}>
      <Text style={styles.infoText}>{text1}</Text>
      <Text style={styles.infoText}>{text2}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  infoTextContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  infoText: {
    color: "gray",
    fontSize: 15,
    letterSpacing: 0.1,
  },
});
