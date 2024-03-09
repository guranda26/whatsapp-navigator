import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import WhatsAppTabNavigator from "./navigator"; // Ensure path is correct

export default function App() {
  return (
    <NavigationContainer>
      <WhatsAppTabNavigator />
    </NavigationContainer>
  );
}
