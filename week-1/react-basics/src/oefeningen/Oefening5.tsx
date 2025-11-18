import { Text } from "@react-navigation/elements";
import { useState } from "react";
import { FlatList, TextInput, View } from "react-native";

const separator = ";";

export default function Oefening5() {
  const [input, setInput] = useState("");

  const splitInput = input.split(separator);

  return (
    <View>
      <TextInput placeholder="Add text sepparated by ;" value={input} onChangeText={setInput} />
      <FlatList data={splitInput} renderItem={({ item }) => <Text>{item}</Text>} />
    </View>
  );
}
