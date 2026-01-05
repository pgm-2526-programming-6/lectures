import TextButton from "@design/Button/TextButton";
import { Colors, Spacing } from "@style/theme";
import { Modal, StyleSheet, View } from "react-native";

type Props = {
  onDismiss: () => void;
  children: React.ReactNode;
};

const ListDialog = ({ onDismiss, children }: Props) => {
  return (
    <Modal visible={true} transparent={true} onDismiss={onDismiss}>
      <View style={styles.backdrop}>
        <View style={styles.container}>{children}</View>
      </View>
    </Modal>
  );
};

type ButtonProps = {
  onPress: () => void;
  children: string;
};

ListDialog.Button = ({ children, onPress }: ButtonProps) => {
  return (
    <TextButton onPress={onPress} color={Colors.text}>
      {children}
    </TextButton>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Spacing.md * 2,
  },
  container: {
    width: "100%",
    backgroundColor: Colors.white,
    paddingBottom: 0,
    borderRadius: Spacing.xs,
    shadowColor: "black",
    shadowRadius: Spacing["2xs"],
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});

export default ListDialog;
