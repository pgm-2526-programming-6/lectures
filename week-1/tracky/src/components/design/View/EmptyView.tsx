import { StyleSheet } from "react-native";
import Icons from "@expo/vector-icons/Feather";
import ThemedText from "@design/Typography/ThemedText";
import CenteredView from "@design/View/CenteredView";
import Button from "@design/Button/Button";
import { Colors, Spacing } from "@style/theme";

type Props = {
  title: string;
  description: string;
  icon: keyof typeof Icons.glyphMap;
  onPress?: () => void;
};

const EmptyView = ({ title, description, icon, onPress }: Props) => {
  return (
    <CenteredView>
      <Icons name={icon} size={Spacing["3xl"]} color={Colors.primary["400"]} />
      <ThemedText style={[styles.title, styles.text]} type="title">
        {title}
      </ThemedText>
      <ThemedText color="light" style={styles.text}>
        {description}
      </ThemedText>
      {onPress && (
        <Button onPress={onPress} style={styles.button}>
          Toevoegen
        </Button>
      )}
    </CenteredView>
  );
};

const styles = StyleSheet.create({
  title: {
    marginVertical: Spacing.xs,
  },
  text: {
    textAlign: "center",
    paddingHorizontal: Spacing.lg,
  },
  button: {
    marginTop: Spacing.md,
  },
});

export default EmptyView;
