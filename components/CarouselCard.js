import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CarouselCard() {
  return (
    <View style={styles.container}>
      <View style={styles.CarouselTitle}>
        <Text style={styles.title}>Total Wallet Balance</Text>
        <Text style={styles.title}>USD</Text>
      </View>
      <Text style={styles.price}>$709028.56</Text>
      <View style={styles.subDetails}>
        <View style={styles.subFooter}>
          <Text style={styles.carouselFooter}>Weekly Profit</Text>
          <Text style={styles.carouselFooter}>$15880.56</Text>
        </View>
        <View>
          <Text style={styles.carouselFooter}>+15%</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    marginHorizontal: 10,
    height: 150,
    backgroundColor: "#fa983c",
    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
  },
  CarouselTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    color: "white",
    fontWeight: "500",
    letterSpacing: 1,
  },
  price: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
    marginVertical: 15,
  },
  subDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  carouselFooter: {
    color: "#fff",
  },
  subFooter: {
    gap: 5,
  },
});
