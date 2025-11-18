import { useState } from "react";
import { Button, Text, View } from "react-native";

const Circle = ({ color }: { color: string }) => {
  return <View style={{ width: 100, height: 100, borderRadius: 50, backgroundColor: color }}></View>;
};

export default function Oefening7() {
  const colors = ["blue", "red", "green", "yellow", "purple", "black", "orange", "pink", "brown"];
  const [color, setColor] = useState("blue");

  const changeColors = () => {
    const index = Math.floor(Math.random() * colors.length);
    setColor(colors[index]);
  };
  return (
    <View>
      <Text>{color}</Text>
      <Button title="change color" onPress={changeColors} />
      <Circle color={color} />
    </View>
  );
}
