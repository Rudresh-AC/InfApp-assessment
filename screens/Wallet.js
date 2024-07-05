import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Wallet() {
  return (
    <View style={styles.container}>
      <Text style={styles.primaryText}>Page under development</Text>
      <Text style={styles.secoundaryText}>Coming soon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e1e2f",
  },
  primaryText: {
    fontSize: 22,
    color: "#fff",
    letterSpacing: 1,
    fontWeight: "bold",
  },
  secoundaryText: {
    fontSize: 20,
    color: "#f59847",
    fontWeight: "bold",
  },
});
