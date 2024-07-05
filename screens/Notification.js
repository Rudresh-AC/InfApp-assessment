import { View, Text, StyleSheet, SafeAreaView, Platform } from "react-native";
import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";

export default function Notification({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        headerText="Notification"
        onPress={() => navigation.navigate("home")}
      />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e2f",
    paddingTop: Platform.OS === "android" ? 30 : 0,
    paddingHorizontal: 10,
  },
});
