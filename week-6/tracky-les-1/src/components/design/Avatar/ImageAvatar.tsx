import { Colors, Spacing } from "@style/theme";
import { Image, StyleProp, StyleSheet, View } from "react-native";

type Props = {
  style?: StyleProp<object>;
  uri: string;
};

const ImageAvatar = ({ uri, style }: Props) => {
  return (
    <View style={[styles.container, style]}>
      <Image style={styles.image} source={{ uri }} resizeMode="cover" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Spacing["4xl"],
    height: Spacing["4xl"],
    borderRadius: Spacing["4xl"] / 2,
    backgroundColor: Colors.primary["100"],
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default ImageAvatar;
