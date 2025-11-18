import ThemedText from "@design/Typography/ThemedText";
import { Colors, FontSizes, Spacing } from "@style/theme";
import { Href, Link } from "expo-router";
import { Pressable, StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type BaseProps = {
  children: string;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
};

type HrefProps = BaseProps & {
  href: Href;
  onPress?: never;
};

type PressProps = BaseProps & {
  onPress: () => void;
  href?: never;
};

const Button = ({ onPress, href, children, style, disabled = false }: HrefProps | PressProps) => {
  const content = (
    <View style={[styles.background, disabled && styles.backgroundDisabled]}>
      <ThemedText style={[styles.text, disabled && styles.textDisabled]}>{children}</ThemedText>
    </View>
  );

  if (href) {
    return (
      <Link href={href} disabled={disabled}>
        {content}
      </Link>
    );
  }

  return (
    <Pressable
      disabled={disabled}
      accessibilityLabel={children}
      onPress={onPress}
      style={({ pressed }) => [style, pressed && styles.pressed]}
      android_ripple={{ color: Colors.ripple, foreground: true }}
    >
      {content}
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
v;
