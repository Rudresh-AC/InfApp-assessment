import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  Image,
} from "react-native";
import React from "react";
import Button from "../components/Button";
import PageInfo from "../components/PageInfo";

export default function SplashScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.SplashImg}>
        <Image
          style={styles.img}
          source={require("../assets/images/crypto.png")}
        />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Welcome to</Text>
          <Text style={styles.header}>Cryptocurrency</Text>
        </View>

        <PageInfo
          text1="Deliver your Order around the world"
          text2="without hesitation"
        />
        <Button
          style={styles.btnLogin}
          title="Login"
          onPress={() => navigation.navigate("SignUp")}
        />
        <Button style={styles.btnRegister} title="Register" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e2f",
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  SplashImg: {
    backgroundColor: "#0a0a10",
    flex: 2,
    marginHorizontal: 30,
    padding: 10,
    marginVertical: 20,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: "69%",
  },
  infoContainer: {
    flex: 2,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  header: {
    color: "#00ffff",
    fontSize: 30,
    fontWeight: "bold",
  },
  subTextContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  subText: {
    color: "#e0ebeb",
    marginBottom: 10,
    fontSize: 16,
  },
  btnLogin: {
    marginTop: 20,
    backgroundColor: "#bb99ff",
  },
  btnRegister: {
    marginTop: 10,
    backgroundColor: "#80ffff",
  },
});
