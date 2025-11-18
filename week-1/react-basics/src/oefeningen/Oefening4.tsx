import { useState } from "react";
import { Text, TextInput, View } from "react-native";

const Oefening4 = () => {
  const [text, setText] = useState("");
  const maxLength = 160;

  return (
    <View>
      <TextInput value={text} onChangeText={setText} maxLength={maxLength} multiline />
      <Text>
        {text.length} / {maxLength}
      </Text>
    </View>
  );
};

export default Oefening4;
