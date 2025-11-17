import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

const items = ["Apple", "Banana", "Kiwi", "Dragonfruit", "Pear", "Watermelon"];

const Oefening2 = () => {
  const [index, setIndex] = useState(0);
  const [duration, setDuration] = useState(1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((oldValue) => (oldValue + 1) % items.length);
    }, duration);

    return () => {
      clearInterval(interval);
    };
  }, [duration]);

  return (
    <View>
      <Button disabled={duration < 500} onPress={() => setDuration(duration - 500)} title="-" />
      <Text>{items[index]}</Text>
      <Button onPress={() => setDuration(duration + 500)} title="+" />
    </View>
  );
};

export default Oefening2;
