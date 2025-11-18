import React, { useState, useEffect } from "react";
import { FlatList, Text } from "react-native";

export default function Oefening6() {
  const items = ["Dog", "Cat", "Bird"];
  const [newItems, setNewItems] = useState([...items]);

  useEffect(() => {
    const interval = setInterval(() => {
      setNewItems((prev) => {
        if (prev.length > 0) {
          return prev.slice(0, -1);
        }

        clearInterval(interval);
        return prev;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Text>Oefening 6</Text>
      <FlatList
        data={newItems}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(index) => index.toString()}
      />
    </>
  );
}
