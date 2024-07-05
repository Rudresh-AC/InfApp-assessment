import {
  View,
  Text,
  StyleSheet,
  Platform,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import PageInfo from "../components/PageInfo";
import { FontAwesome5 } from "react-native-vector-icons";
import Button from "../components/Button";

export default function CreatePassword({ navigation }) {
  const [isPasswordVisible, setIsPasswordVissible] = useState(false);

  const onEyePress = () => {
    setIsPasswordVissible(!isPasswordVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        headerText="Create password"
        source={require("../assets/images/createpassword.png")}
        onPress={() => navigation.navigate("otp")}
      />

      <PageInfo
        text1="Choose a secure password that will be "
        text2="easy for you to remember."
      />

      <View style={styles.pwdContiner}>
        <View style={styles.pwdinputContainer}>
          <Text style={styles.pwdLable}>Password</Text>
          <TextInput
            style={styles.pwdinput}
            placeholder="**********"
            placeholderTextColor="gray"
            secureTextEntry={!isPasswordVisible}
            maxLength={16}
          />
        </View>
        <TouchableOpacity style={styles.pwdImg} onPress={onEyePress}>
          <Image
            style={styles.eye}
            source={
              isPasswordVisible
                ? require("../assets/images/eye.png")
                : require("../assets/images/eye_closed.png")
            }
          />
        </TouchableOpacity>
      </View>
      <View style={styles.error}>
        <View style={styles.pwdCheck}>
          <FontAwesome5 name="check" size={15} color="#80ffff" />
          <Text style={styles.errorText}>Has at list 8 characters</Text>
        </View>
        <View style={styles.pwdCheck}>
          <FontAwesome5 name="check" size={15} color="#80ffff" />
          <Text style={styles.errorText}>
            Has an uppercase letter or symbol
          </Text>
        </View>
        <View style={styles.pwdCheck}>
          <FontAwesome5 name="check" size={15} color="gray" />
          <Text style={[styles.errorText, styles.errorPending]}>
            Has a number
          </Text>
        </View>
      </View>
      <Button
        style={styles.btn}
        title="Continue"
        onPress={() => navigation.navigate("selectLocation")}
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
  pwdContiner: {
    backgroundColor: "#000",
    marginHorizontal: 30,
    marginVertical: 30,
    borderRadius: 40,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  pwdinputContainer: {
    flex: 1,
    marginLeft: 20,
  },
  pwdLable: {
    color: "gray",
  },
  pwdinput: {
    fontSize: 16,
    color: "#fff",
    letterSpacing: 0.7,
  },
  pwdImg: {
    marginHorizontal: 10,
  },
  eye: {
    width: 20,
    height: 20,
  },
  error: {
    marginHorizontal: 30,
  },
  pwdCheck: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 5,
  },
  errorText: {
    fontSize: 16,
    color: "#80ffff",
  },
  errorPending: {
    color: "gray",
  },
  btn: {
    marginVertical: 60,
  },
});
