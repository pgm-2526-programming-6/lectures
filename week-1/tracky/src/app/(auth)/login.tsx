import Button from "@design/Button/Button";
import ThemedText from "@design/Typography/ThemedText";
import CenteredView from "@design/View/CenteredView";
import useAuth from "@functional/auth/useAuth";
import { Fonts } from "@style/theme";
import { Link, useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = () => {
    login().then(() => router.replace("/(app)/(tabs)/home"));
  };

  return (
    <CenteredView>
      <ThemedText style={{ fontFamily: Fonts.regular }}>Login screen</ThemedText>
      <Link href="/(auth)/register">Go to Register</Link>
      <Button onPress={handleLogin}>Login</Button>
    </CenteredView>
  );
};

export default Login;
