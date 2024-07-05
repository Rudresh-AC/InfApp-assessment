import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function OptionsItem({ text, icon, check }) {
  return (
    <View style={styles.optionsItem}>
      <Icon name={icon} size={25} color="#fff" />
      <Text style={styles.optionText}>{text}</Text>
      {check && <Icon name="arrow-right" size={30} color="#fff" />}
    </View>
  );
}

const styles = StyleSheet.create({
  optionsItem: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 10,
    color: "#fff",
  },
});
