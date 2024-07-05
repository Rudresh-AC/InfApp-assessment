import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

const Checkbox = ({ checked, onCheck }) => {
  const ifChecked = () => {
    onCheck(!checked);
  };

  console.log("pressed a check box");

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.container}
      onPress={ifChecked}
      hitSlop={20}
    >
      {checked ? (
        <View style={styles.innerContainer}>
          <Image
            style={styles.checkIcon}
            source={require("../assets/images/check.png")}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 4,
    width: 22,
    height: 22,
  },
  innerContainer: {
    backgroundColor: "#08ffff",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  checkIcon: {
    width: 12,
    height: 9,
  },
});

export default Checkbox;
