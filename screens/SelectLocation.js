import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { Platform } from "react-native";
import Header from "../components/Header";
import CountryDropdown from "../components/CountryDropDown";
import CityDropdown from "../components/CityDropDown";
import Button from "../components/Button";

export default function SelectLocation({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        headerText="Select Location"
        source={require("../assets/images/location.png")}
        onPress={() => navigation.navigate("createPassword")}
      />
      <View style={styles.countryDropDown}>
        <CountryDropdown defaultValue="IN" />
      </View>
      <View style={styles.countryDropDown}>
        <CityDropdown defaultValue="DEL" />
      </View>
      <Button
        style={styles.btn}
        title="Continue"
        onPress={() => navigation.navigate("home")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e2f",
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  countryDropDown: {
    backgroundColor: "#000",
    marginHorizontal: 30,
    paddingHorizontal: 10,
    borderRadius: 30,
    marginVertical: 10,
  },
  btn: {
    marginHorizontal: 30,
    marginVertical: 10,
  },
});
