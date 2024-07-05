import { View, Text, StyleSheet, Platform } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import Header from "../components/Header";
import Icon from "react-native-vector-icons/MaterialIcons";
import Button from "../components/Button";

export default function ProfileDetails({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        headerText="Profile Details"
        source={require("../assets/images/rudresh.jpg")}
        onPress={() => navigation.navigate("setting")}
      />

      <View style={styles.useDetails}>
        <Text style={styles.name}>Rudresh A C</Text>
        <Text style={styles.credit}>
          Account Credit: <Text style={styles.balance}>$2000.00</Text>
        </Text>
      </View>

      <View style={styles.editContainer}>
        <Text style={styles.editText}>Rudresh A C</Text>
        <Icon name="edit" size={20} color="#fff" />
      </View>
      <View style={styles.editContainer}>
        <Text style={styles.editText}>9606611565</Text>
        <Icon name="edit" size={20} color="#fff" />
      </View>
      <View style={styles.editContainer}>
        <Text style={styles.editText}>acrudresh967@gmail.com</Text>
        <Icon name="edit" size={20} color="#fff" />
      </View>
      <View style={styles.editContainer}>
        <Text style={styles.editText}>
          CHANNAPATNA Pin Code is 562160. CHANNAPATNA is located in NA RAMANAGAR
        </Text>
        <Icon name="edit" size={20} color="#fff" />
      </View>

      <Button style={styles.btn} title="Save Now" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e2f",
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  useDetails: {
    alignItems: "center",
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    letterSpacing: 1,
    marginBottom: 10,
  },
  credit: {
    fontSize: 20,
    color: "#08ffff",
  },
  balance: {
    color: "red",
  },
  editContainer: {
    backgroundColor: "#000",
    marginHorizontal: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    flexDirection: "row",
    marginVertical: 10,
  },
  editText: {
    color: "#fff",
    fontWeight: "500",
    flex: 1,
    letterSpacing: 1,
  },
  btn: {
    marginVertical: 30,
    marginHorizontal: 30,
  },
});
