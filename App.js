import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./screens/SplashScreen";
import SignIn from "./screens/SignIn";
import OtpVerification from "./screens/OtpVerification";
import CreatePassword from "./screens/CreatePassword";
import ForgetPassword from "./screens/ForgetPassword";
import SelectLocation from "./screens/SelectLocation";
import Home from "./screens/Home";
import Notification from "./screens/Notification";
import Setting from "./screens/Setting";
import ProfileDetails from "./screens/ProfileDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignInWithPwd from "./screens/SignInWithPwd";
import Ionicons from "react-native-vector-icons/Ionicons";
import Wallet from "./screens/Wallet";
import Chat from "./screens/Chat";
import Pepole from "./screens/Pepole";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Wallet") {
            iconName = focused ? "wallet" : "wallet";
          } else if (route.name === "Chat") {
            iconName = focused ? "chatbubble" : "chatbubble";
          } else if (route.name === "People") {
            iconName = focused ? "people" : "people";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          backgroundColor: "#4c4c7a",
        },
        tabBarActiveTintColor: "#08ffff",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="People" component={Pepole} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="SplashScreen"
        >
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="SignUp" component={SignInWithPwd} />
          <Stack.Screen name="ForgotPassword" component={ForgetPassword} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="otp" component={OtpVerification} />
          <Stack.Screen name="createPassword" component={CreatePassword} />
          <Stack.Screen name="selectLocation" component={SelectLocation} />
          <Stack.Screen name="home" component={HomeTabs} />
          <Stack.Screen name="notification" component={Notification} />
          <Stack.Screen name="setting" component={Setting} />
          <Stack.Screen name="ProfileDetails" component={ProfileDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
