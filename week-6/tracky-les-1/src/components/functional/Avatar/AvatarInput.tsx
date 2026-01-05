import ImageAvatar from "@design/Avatar/ImageAvatar";
import TextAvatar from "@design/Avatar/TextAvatar";
import ImagePickerDialog from "@functional/ImagePicker/ImagePickerDialog";
import { useState } from "react";
import { Pressable } from "react-native";

type Props = {
  url: string | null;
  text: string;
  onImage: (base64: string) => void;
};

const AvatarInput = ({ url, text, onImage }: Props) => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
      <Pressable onPress={() => setShowDialog(true)}>
        {url ? <ImageAvatar uri={url} /> : <TextAvatar>{text}</TextAvatar>}
      </Pressable>
      {showDialog && <ImagePickerDialog onImage={onImage} onDismiss={() => setShowDialog(false)} />}
    </>
  );
};

export default AvatarInput;
