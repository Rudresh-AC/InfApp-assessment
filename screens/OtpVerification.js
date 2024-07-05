import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { Platform } from "react-native";
import Header from "../components/Header";
import PageInfo from "../components/PageInfo";
import OTPInput from "../components/OTPInput";
import Button from "../components/Button";

export default function OtpVerification({ navigation }) {
  const handleOTPComplete = (otp) => {
    console.log("OTP Entered: ", otp);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        headerText="OTP Verification"
        source={require("../assets/images/otp.png")}
        onPress={() => navigation.navigate("SignIn")}
      />

      <PageInfo
        text1="An authentication code has been sent to "
        text2="(+91) 9876543210"
      />

      <OTPInput length={4} onOTPComplete={handleOTPComplete} />

      <View style={styles.resendContainer}>
        <Text style={styles.infoText}>
          I didn't receive code. <Text style={styles.resend}>Resend code</Text>
        </Text>
        <Text style={[styles.infoText, styles.timer]}>1:20 Sec left</Text>
      </View>

      <Button
        style={styles.btn}
        title="Verify Now"
        onPress={() => navigation.navigate("createPassword")}
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
  resendContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    letterSpacing: 0.4,
    color: "#fff",
    fontWeight: "500",
    marginBottom: 5,
  },
  resend: {
    color: "#f56358",
  },
  timer: {
    color: "#11e2ed",
    fontWeight: "700",
  },
  btn: {
    marginTop: 40,
  },
});
