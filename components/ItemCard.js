import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function ItemCard() {
  return (
    <View style={styles.itemCardContainer}>
      <Image
        style={styles.img}
        source={require("../assets/images/eth.jpg")}
        resizeMode="cover"
      />

      <View style={styles.itemDetailsContainer}>
        <Text style={styles.name}>Ethereum</Text>
        <Text style={styles.subName}>ETH</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>$15,813.20</Text>
        <Text style={styles.status}>-3.87%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemCardContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#4c4c7a",
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 50,
    alignSelf: "flex-start",
  },
  itemDetailsContainer: {
    gap: 10,
    flex: 1,
    marginLeft: 15,
  },
  name: { fontWeight: "bold", color: "#80ffff", fontSize: 18 },
  subName: {
    color: "#fff",
    fontWeight: "500",
  },
  priceContainer: {
    gap: 10,
  },
  price: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  status: {
    color: "red",
    alignSelf: "flex-end",
    fontWeight: "500",
  },
});
