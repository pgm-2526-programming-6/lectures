import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function Index() {
  const [value, setValue] = useState("");

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Text style={{ color: "red" }}>dfdf</Text>
      {/*<FlatList data={["test", "abc", "blabla"]} renderItem={({ item }) => <Text>{item}</Text>} />*/}
      <TextInput multiline={true} value={value} onChangeText={(text) => setValue(text)} />
      <Button onPress={() => console.log("test")} title="Test" />
    </View>
  );
}
