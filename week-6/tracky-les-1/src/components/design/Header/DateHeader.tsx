import IconButton from "@design/Button/IconButton";
import ThemedText from "@design/Typography/ThemedText";
import { Colors, Spacing } from "@style/theme";
import { StyleSheet, View } from "react-native";

type Props = {
  onPrevPress: () => void;
  onNextPress: () => void;
  date: string;
};

const DateHeader = ({ onPrevPress, onNextPress, date }: Props) => {
  return (
    <View style={styles.container}>
      <IconButton label="Previous day" color={Colors.white} icon="arrow-left-circle" onPress={onPrevPress} />
      <ThemedText style={styles.text}>{date}</ThemedText>
      <IconButton label="Next day" color={Colors.white} icon="arrow-right-circle" onPress={onNextPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary["600"],
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
  },
  text: {
    flex: 1,
    textAlign: "center",
    color: Colors.white,
  },
});

export default DateHeader;
