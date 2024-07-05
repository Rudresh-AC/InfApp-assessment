import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

export default function ActionComponent({ name, icon, color }) {
  return (
    <View style={styles.container}>
      <Icon
        name={icon}
        size={25}
        color="#fff"
        style={[styles.icon, { backgroundColor: color }]}
      />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 5,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    padding: 20,
    borderRadius: 50,
  },
  name: {
    color: "#fff",
    fontSize: 16,
  },
});
