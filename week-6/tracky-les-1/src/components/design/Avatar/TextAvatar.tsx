import ThemedText from "@design/Typography/ThemedText";
import { Colors, Fonts, FontSizes, Spacing } from "@style/theme";
import { StyleProp, StyleSheet, View } from "react-native";

type Props = {
  style?: StyleProp<object>;
  children: string;
};

const TextAvatar = ({ children, style }: Props) => {
  return (
    <View style={[styles.container, style]}>
      <ThemedText style={styles.text}>{children}</ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Spacing["4xl"],
    height: Spacing["4xl"],
    borderRadius: Spacing["4xl"] / 2,
    backgroundColor: Colors.primary["100"],
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  text: {
    fontSize: FontSizes.xxl,
    fontFamily: Fonts.bold,
    color: Colors.primary["700"],
  },
});

export default TextAvatar;
