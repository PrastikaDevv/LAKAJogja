import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Fontawesome5 from "react-native-vector-icons/FontAwesome5";
import About from "../App";
import { WebView } from "react-native-webview";
import Getjsonfile from "../Getjsonfile";

//const webmap = require('../peta/map.html');

const Tab = createBottomTabNavigator();

const RS = "https://upk.kemkes.go.id/new/layanan/ambulans";

const Forminput = "https://prastikadevv.github.io/PGPBL-12/";

const webmap = "https://prastikadevv.github.io/PGPBL-12/map.html";

function RSScreen() {
  return <WebView source={{ uri: RS }} />;
}

function MapsScreen() {
  return <WebView source={{ uri: webmap }} />;
}

function AddDataScreen() {
  return <WebView source={{ uri: Forminput }} />;
}


function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Rumah Sakit" component={RSScreen} options={{
            tabBarLabel: "Rumah Sakit",
            tabBarIcon: ({ color, size }) => (
              <Fontawesome5 name="hospital-alt" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Maps"
          component={MapsScreen}
          options={{
            tabBarLabel: "Maps",
            tabBarIcon: ({ color, size }) => (
              <Fontawesome5 name="map-marked-alt" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Add Data"
          component={AddDataScreen}
          options={{
            tabBarLabel: "Add Data",
            tabBarIcon: ({ color, size }) => (
              <Fontawesome5 name="plus" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;

const styles = StyleSheet.create({
  listitems: {
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: "stretch",
  },
  caption: {
    fontSize: 14,
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  container: {
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
    backgroundColor: "#fff",
  },
});