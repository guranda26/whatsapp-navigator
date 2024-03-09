import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatsScreen from "./screens/ChatsScreen";
import UpdatesScreen from "./screens/UpdatesScreen";
import CommunitiesScreen from "./screens/CommunitiesScreen";
import CallsScreen from "./screens/CallsScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const WhatsAppTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Updates") {
            iconName = focused ? "refresh-circle" : "refresh-circle-outline";
          } else if (route.name === "Calls") {
            iconName = focused ? "call" : "call-outline";
          } else if (route.name === "Communities") {
            iconName = focused ? "people" : "people-outline";
          } else if (route.name === "Chats") {
            iconName = focused ? "chatbubbles" : "chatbubbles-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Updates" component={UpdatesScreen} />
      <Tab.Screen name="Calls" component={CallsScreen} />
      <Tab.Screen name="Communities" component={CommunitiesScreen} />
      <Tab.Screen name="Chats" component={ChatsScreen} />
    </Tab.Navigator>
  );
};

export default WhatsAppTabNavigator;
