import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function ProfileCard() {
  return (
    <View style={styles.profileCard}>
      <Image
        style={styles.profile}
        source={require("../assets/images/rudresh.jpg")}
        resizeMode="cover"
      />
      <View style={styles.profileDetails}>
        <Text style={styles.profileName}>Rudresh A C</Text>
        <Text style={styles.profileStatus}>Basic Member</Text>
      </View>
      <Icon name="keyboard-arrow-right" size={30} color="#fff" />
    </View>
  );
}

const styles = StyleSheet.create({
  profileCard: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#4c4c7a",
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },

  profile: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
    letterSpacing: 1,
  },
  profileStatus: {
    color: "#80ffff",
    fontWeight: "500",
    letterSpacing: 1,
  },
  profileDetails: {
    flex: 1,
    marginLeft: 10,
  },
});
