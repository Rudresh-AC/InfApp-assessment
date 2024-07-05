import React, { useState, useRef } from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default function OTPInput({ length = 4, onOTPComplete }) {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text.length === 1 && index < length - 1) {
      inputs.current[index + 1].focus();
    }

    if (newOtp.every((digit) => digit !== "")) {
      onOTPComplete(newOtp.join(""));
    }
  };

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          style={styles.input}
          onChangeText={(text) => handleChange(text, index)}
          value={digit}
          keyboardType="numeric"
          maxLength={1}
          ref={(ref) => (inputs.current[index] = ref)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 40,
  },
  input: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#000",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
    color: "#fff",
  },
});
