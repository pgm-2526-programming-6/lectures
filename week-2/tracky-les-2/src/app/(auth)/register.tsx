import { registerUser } from "@core/modules/auth/api.auth";
import Button from "@design/Button/Button";
import { Text, View } from "react-native";

const Register = () => {
  const handleRegister = () => {
    registerUser({
      email: "michael.vanderpoorten@arteveldehs.be",
      password: "test1234",
      first_name: "Michael",
      last_name: "Vanderpoorten",
    }).then(() => {});
  };

  return (
    <View>
      <Text>Register screen</Text>
      <Button onPress={handleRegister}>Registreren</Button>
    </View>
  );
};

export default Register;
