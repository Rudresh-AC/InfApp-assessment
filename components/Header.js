import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Header({ headerText, source, onPress }) {
  return (
    <>
      <View style={styles.rootContainer}>
        <TouchableOpacity style={styles.backBtn} onPress={onPress}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerInfo}>
          <Text style={styles.headerInfoText}>{headerText} </Text>
        </View>
      </View>
      {source && (
        <View style={styles.imgContainer}>
          <Image style={styles.signinImg} source={source} resizeMode="cover" />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "row",
    marginVertical: 15,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  backBtn: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 50,
  },
  headerInfo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 30,
  },
  headerInfoText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  signinImg: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  imgContainer: {
    alignItems: "center",
    // marginVertical: 20,
    marginTop: 20,
    marginBottom: 40,
  },
});
