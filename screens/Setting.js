import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import OptionsItem from "../components/OptionsItem";

export default function Setting({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        headerText="Settings"
        onPress={() => navigation.navigate("home")}
      />
      <ScrollView>
        <Pressable onPress={() => navigation.navigate("ProfileDetails")}>
          <ProfileCard />
        </Pressable>

        <View style={styles.cardContainer}>
          <Text style={styles.header}>Account</Text>
          <OptionsItem text="Change Password" icon="lock" check />
          <OptionsItem
            text="Order Management"
            icon="notifications-active"
            check
          />
          <OptionsItem text="Document Management" icon="settings" check />
          <OptionsItem text="Payment" icon="payment" check />

          <Pressable onPress={() => navigation.navigate("SignUp")}>
            <OptionsItem text="Sign Out" icon="exit-to-app" />
          </Pressable>

          <Text style={styles.moreOption}>More Options</Text>
          <OptionsItem text="Newsletter" icon="dynamic-feed" check />
          <OptionsItem text="Text Message" icon="mail" check />
          <OptionsItem text="Phone Call" icon="phone" check />
          <OptionsItem text="Currency" icon="attach-money" check />
          <OptionsItem text="Language" icon="translate" check />
          <OptionsItem text="Lincked Account" icon="link" check />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e2f",
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  cardContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: "#4c4c7a",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginVertical: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#80ffff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  moreOption: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#80ffff",
    paddingHorizontal: 20,
    backgroundColor: "rgba(140, 140, 184, 0.25)",
    paddingVertical: 10,
  },
});
