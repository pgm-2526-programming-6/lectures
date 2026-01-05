import { logout } from "@core/modules/auth/api.auth";
import { updateProfileAvatar } from "@core/modules/profiles/api.profiles";
import { formatName, getAvatarUrl, getInitials } from "@core/modules/profiles/utils.profiles";
import Button from "@design/Button/Button";
import ThemedText from "@design/Typography/ThemedText";
import DefaultView from "@design/View/DefaultView";
import useAuth from "@functional/Auth/useAuth";
import useUser from "@functional/Auth/useUser";
import AvatarInput from "@functional/Avatar/AvatarInput";

const SettingsLayout = () => {
  const { refresh } = useAuth();
  const user = useUser();

  const handleImage = (base64: string) => {
    updateProfileAvatar(user.id, base64).then(() => refresh());
  };

  return (
    <DefaultView>
      <AvatarInput
        url={user.image ? getAvatarUrl(user.image) : null}
        text={getInitials(user)}
        onImage={handleImage}
      />
      <ThemedText>{formatName(user)}</ThemedText>
      <Button onPress={() => logout()}>Logout</Button>
    </DefaultView>
  );
};

export default SettingsLayout;
