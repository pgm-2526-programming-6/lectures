import { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";

const items = ["Apple", "Banana", "Kiwi", "Dragonfruit", "Pear", "Watermelon"];

const Oefening1 = () => {
  const [value, setValue] = useState("");

  const filteredItems = items.filter((item) => item.toLowerCase().includes(value.toLowerCase()));

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={value} onChangeText={(text) => setValue(text)} />
      <FlatList data={filteredItems} renderItem={({ item }) => <Text>{item}</Text>} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop: 200,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Oefening1;
