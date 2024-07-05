import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function CryptoCard() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.cardHeader}>
        <Image
          style={styles.img}
          source={require("../assets/images/eth.jpg")}
          resizeMode="cover"
        />
        <Text>Ethereum</Text>
        <View style={styles.status}>
          <Text style={styles.ststusText}>+2.40%</Text>
        </View>
      </View>
      <Text style={styles.price}>$2,400.00</Text>
      <Text style={styles.name}>ETH</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 10,
    width: 200,
    backgroundColor: "#4c4c7a",
    height: 120,
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    marginLeft: 20,
    gap: 10,
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  cardHeader: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  status: {
    backgroundColor: "#80ffff",
    padding: 5,
    borderRadius: 20,
  },
  ststusText: {
    color: "#fff",
  },
  price: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  name: {
    color: "gray",
    fontWeight: "bold",
  },
});
