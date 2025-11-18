import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Button, Text } from "react-native";
import { useEffect, useState } from "react";

export default function Oefening3() {
  const [item, setItem] = useState(5);

  useEffect(() => {
    if (item >= 10) {
      alert("Het getal is groter 10");
    }
  }, [item]);

  function plus() {
    setItem(item + 1);
  }

  function minus() {
    setItem(item - 1);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Button onPress={plus} title="+" />
        <Text>{item}</Text>
        <Button disabled={item === 0} onPress={minus} title="-" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
