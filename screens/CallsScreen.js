import React from "react";
import { View, Text, FlatList } from "react-native";

const callsData = [{ id: "1", name: "Mike Smith", time: "Yesterday, 9:00 PM" }];

const CallItem = ({ name, time }) => (
  <View style={{ padding: 20 }}>
    <Text style={{ fontSize: 18 }}>{name}</Text>
    <Text>{time}</Text>
  </View>
);

const CallsScreen = () => {
  return (
    <FlatList
      data={callsData}
      renderItem={({ item }) => <CallItem name={item.name} time={item.time} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default CallsScreen;
