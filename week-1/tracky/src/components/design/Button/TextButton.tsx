import { Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native";
import ThemedText from "@design/Typography/ThemedText";
import { Colors, Fonts, FontSizes, Spacing } from "@style/theme";

type Props = {
  onPress: () => void;
  children: string;
  color?: string;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
};

const TextButton = ({ onPress, children, color, style, disabled = false }: Props) => {
  return (
    <Pressable
      disabled={disabled}
      accessibilityLabel={children}
      onPress={onPress}
      style={style}
      android_ripple={{ color: Colors.ripple }}
    >
      <ThemedText style={[styles.title, color && { color }]}>{children}</ThemedText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    color: Colors.primary["500"],
    fontFamily: Fonts.bold,
    fontSize: FontSizes.default,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
  },
});

export default TextButton;
