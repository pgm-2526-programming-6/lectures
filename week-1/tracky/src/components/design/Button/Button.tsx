import { Pressable, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import ThemedText from "@design/Typography/ThemedText";
import { Colors, FontSizes, Spacing } from "@style/theme";

type Props = {
  onPress: () => void;
  children: string;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
};

const Button = ({ onPress, children, style, disabled = false }: Props) => {
  return (
    <Pressable
      disabled={disabled}
      accessibilityLabel={children}
      onPress={onPress}
      style={({ pressed }) => [style, pressed && styles.pressed]}
      android_ripple={{ color: Colors.ripple, foreground: true }}
    >
      <View style={[styles.background, disabled && styles.backgroundDisabled]}>
        <ThemedText style={[styles.text, disabled && styles.textDisabled]}>{children}</ThemedText>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.primary["700"],
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: Spacing.xs,
  },
  backgroundDisabled: {
    backgroundColor: Colors.gray["300"],
  },
  text: {
    textAlign: "center",
    color: Colors.white,
    fontSize: FontSizes.default,
  },
  textDisabled: {
    opacity: 0.3,
    color: Colors.text,
  },
  pressed: {
    opacity: 0.9,
  },
});

export default Button;
