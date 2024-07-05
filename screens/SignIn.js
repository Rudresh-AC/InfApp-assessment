import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import CountryCodePicker from "../components/CountryCodePicker";
import Button from "../components/Button";
import PageInfo from "../components/PageInfo";

export default function SignIn({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        headerText="Sign up"
        source={require("../assets/images/sign.png")}
        onPress={() => navigation.navigate("SignUp")}
      />

      <PageInfo
        text1="Simply enter your phone number to login"
        text2="or create an account"
      />

      <View style={styles.pNumInputContainer}>
        <CountryCodePicker />
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="9874563210"
            keyboardType="decimal-pad"
            placeholderTextColor="gray"
            maxLength={10}
            style={styles.input}
          />
        </View>
      </View>

      <PageInfo
        text1="By using our mobile app,you agree to our"
        text2="Privacy and Policy"
      />

      <Button
        title="Continue"
        style={styles.btn}
        onPress={() => navigation.navigate("otp")}
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

  // infoTextContainer: {
  //   alignItems: "center",
  //   marginVertical: 20,
  // },
  // infoText: {
  //   color: "gray",
  // },
  pNumInputContainer: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    marginHorizontal: 40,
    padding: 10,
    borderRadius: 30,
  },
  textInputContainer: {
    flex: 3,
    marginHorizontal: 10,
    fontSize: 18,
  },
  input: {
    fontSize: 18,
    color: "gray",
  },
  btn: {
    backgroundColor: "#80ffff",
    marginVertical: 40,
  },
});
