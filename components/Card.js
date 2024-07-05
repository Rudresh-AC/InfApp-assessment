import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";

export default function Card() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.iconContainer}>
        <Icon name="closecircle" size={30} color="#fff" />
      </View>

      <View style={styles.infoText}>
        <Text style={styles.headerText}>ETH received</Text>
        <Text style={styles.subText}>0.08 ETH Recived</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "#30303b",
    height: 80,
    elevation: 3,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 15,
  },
  headerText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 17,
  },
  subText: {
    color: "#fff",
    fontSize: 14,
  },
  iconContainer: {
    backgroundColor: "#ebab57",
    padding: 10,
    borderRadius: 30,
  },
  infoText: {
    marginLeft: 20,
    gap: 5,
  },
});
