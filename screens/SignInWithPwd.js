import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import React, { useState } from "react";
import { Platform } from "react-native";
import Header from "../components/Header";
import Icon from "react-native-vector-icons/MaterialIcons";
import Checkbox from "../components/Checkbox";
import Button from "../components/Button";

export default function SignInWithPwd({ navigation }) {
  const [checked, setChecked] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        headerText="Sign in"
        source={require("../assets/images/signUp.png")}
        onPress={() => navigation.navigate("SplashScreen")}
      />
      <View style={styles.editContainer}>
        <Icon name="mail" size={20} color="#fff" />
        <Text style={styles.editText}>acrudresh967@gmail.com</Text>
      </View>
      <View style={styles.editContainer}>
        <Icon name="lock" size={20} color="#fff" />
        <Text style={styles.editText}>***********</Text>
      </View>
      <View style={styles.meContainer}>
        <View style={styles.me}>
          <Checkbox checked={checked} onCheck={setChecked} />
          <Text style={styles.remember}>Remember me</Text>
        </View>
        <Pressable onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={styles.forget}>Forget password?</Text>
        </Pressable>
      </View>
      <Button title="Sign in" onPress={() => navigation.navigate("SignIn")} />
      <Text style={styles.footerText}>
        Already have not an account? <Text style={styles.forget}>Sign in!</Text>
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e2f",
    paddingTop: Platform.OS === "android" ? 30 : 0,
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
    marginLeft: 20,
  },
  meContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
    marginVertical: 20,
  },
  me: {
    flexDirection: "row",
    gap: 10,
  },
  forget: {
    color: "#f59847",
  },
  remember: {
    color: "#fff",
  },
  footerText: {
    color: "#fff",
    textAlign: "center",
    marginTop: 60,
  },
});
