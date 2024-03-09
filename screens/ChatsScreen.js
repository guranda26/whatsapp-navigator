import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

const chatsData = [
  { id: "1", name: "Mike Smith", message: "Hello" },
  { id: "2", name: "George Finn", message: "Please, call me" },
];

const ChatItem = ({ name, message, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>{name}</Text>
      <Text>{message}</Text>
    </View>
  </TouchableOpacity>
);

const ChatsScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <ChatItem
      name={item.name}
      message={item.message}
      onPress={() => navigation.navigate("ChatDetails", { chatId: item.id })}
    />
  );

  return (
    <FlatList
      data={chatsData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ChatsScreen;
