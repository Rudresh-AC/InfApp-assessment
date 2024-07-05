import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import Header from "../components/Header";
import { Platform } from "react-native";
import PageInfo from "../components/PageInfo";
import { MaterialIcons } from "react-native-vector-icons";
import { TextInput } from "react-native";
import Button from "../components/Button";

export default function ForgetPassword({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        headerText="Forget Password"
        source={require("../assets/images/forgetPwd.png")}
        onPress={() => navigation.navigate("SignUp")}
      />

      <PageInfo
        text1="We will send a mail to the email address"
        text2="you registred to regain your password"
      />

      <View style={styles.emailInput}>
        <MaterialIcons name="mail" size={24} color="gray" style={styles.icon} />
        <TextInput
          placeholder="example@gmail.com"
          placeholderTextColor="gray"
          style={styles.input}
        />
      </View>
      <Text style={styles.emailStatus}>Email sent to ex*****@gmail.com</Text>
      <Button style={styles.btn} title="Send" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e2f",
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  emailInput: {
    backgroundColor: "#000",
    marginHorizontal: 40,
    marginVertical: 20,
    padding: 15,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginLeft: 10,
  },
  input: {
    flex: 1,
    marginLeft: 20,
    color: "#fff",
    letterSpacing: 0.9,
  },
  emailStatus: {
    color: "#f02929",
    textAlign: "center",
    fontWeight: "500",
  },
  btn: {
    marginVertical: 40,
    marginHorizontal: 40,
  },
});
