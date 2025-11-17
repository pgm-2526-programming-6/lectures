import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function Index() {
  const [value, setValue] = useState("");

  return (
    <View style={styles.container}>
      <Text style={{ color: "red" }}>dfdf</Text>
      {/*<FlatList data={["test", "abc", "blabla"]} renderItem={({ item }) => <Text>{item}</Text>} />*/}
      <TextInput multiline={true} value={value} onChangeText={(text) => setValue(text)} />
      <Button onPress={() => console.log("test")} title="Test" />
    </View>
  );
}
