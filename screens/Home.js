import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  FlatList,
  Pressable,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icons from "react-native-vector-icons/MaterialIcons";
import CarouselCard from "../components/CarouselCard";
import CryptoCard from "../components/CryptoCard";
import ActionComponent from "../components/ActionComponent";
import ItemCard from "../components/ItemCard";

const data = [{ id: "1" }, { id: "2" }, { id: "3" }];

export default function Home({ navigation }) {
  const renderItem = ({ item }) => <CarouselCard key={item.id} />;
  const renderItemCard = ({ item }) => <CryptoCard key={item.id} />;

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.navigate("setting")}>
            <Icon name="bars" size={25} color="gray" />
          </Pressable>

          <Pressable onPress={() => navigation.navigate("notification")}>
            <Icons name="notifications" size={25} color="#fff" />
          </Pressable>
        </View>
        <View style={styles.userDetails}>
          <Text style={styles.userName}>Hi Rudresh AC</Text>
          <Text style={styles.wish}>Good Morning</Text>
        </View>
        <View style={styles.carouselContainer}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.carouselContent}
          />
        </View>
        <View style={styles.portfolioContainer}>
          <Text style={styles.portfolioText}>Portfolio</Text>
          <Text style={styles.viewAllText}>View All+</Text>
        </View>

        <View style={styles.carouselContainer}>
          <FlatList
            data={data}
            renderItem={renderItemCard}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.carouselContent}
          />
        </View>
        <View style={styles.iconContainer}>
          <ActionComponent icon="send" name="Send" color="#f7534a" />
          <ActionComponent
            icon="envelope-open"
            name="Receive"
            color="#80ffff"
          />
          <ActionComponent icon="money" name="Buy" color="#f58ce9" />
          <ActionComponent icon="exchange" name="Swap" color="#ab7cf2" />
        </View>

        <View style={styles.portfolioContainer}>
          <Text style={styles.portfolioText}>Market</Text>
          <Text style={styles.viewAllText}>View All+</Text>
        </View>
        <View>
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e2f",
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  userDetails: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  userName: { color: "#80ffff", fontSize: 18 },
  wish: { color: "#fff", fontSize: 20, fontWeight: "bold", marginTop: 10 },
  carouselContainer: {
    marginTop: 10,
  },
  carouselContent: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  portfolioContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  portfolioText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  viewAllText: {
    color: "#80ffff",
    fontSize: 16,
  },
  iconContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
});
