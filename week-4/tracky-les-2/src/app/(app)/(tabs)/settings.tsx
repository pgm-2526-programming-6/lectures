import { logout } from "@core/modules/auth/api.auth";
import { formatName } from "@core/modules/profiles/utils.profiles";
import Button from "@design/Button/Button";
import DefaultView from "@design/View/DefaultView";
import useUser from "@functional/Auth/useUser";
import { Text } from "react-native";

const SettingsLayout = () => {
  const user = useUser();
  return (
    <DefaultView>
      <Text>{formatName(user)}</Text>
      <Button onPress={() => logout()}>Logout</Button>
    </DefaultView>
  );
};

export default SettingsLayout;
