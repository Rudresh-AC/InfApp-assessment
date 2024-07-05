import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function Button({ title, style, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.btnContainer, style]}
      activeOpacity={0.6}
      onPress={onPress}
    >
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: "#80ffff",
    marginHorizontal: 20,
    alignItems: "center",
    padding: 16,
    borderRadius: 30,
    marginBottom: 10,
  },
  btnText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },
});
