import ErrorMessage from "@design/Alert/ErrorMessage";
import Button from "@design/Button/Button";
import ThemedText from "@design/Typography/ThemedText";
import CenteredView from "@design/View/CenteredView";
import useAuth from "@functional/auth/useAuth";
import { Fonts } from "@style/theme";
import { Link } from "expo-router";
import { useState } from "react";

const Login = () => {
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();

  const handleLogin = () => {
    login({
      email: "michael.vanderpoorten@arteveldehs.be",
      password: "test1234",
    }).catch((err) => setError(err.message || "An error occurred during login."));
  };

  return (
    <CenteredView>
      <ThemedText style={{ fontFamily: Fonts.regular }}>Login screen</ThemedText>
      {error && <ErrorMessage error={error} />}
      <Link href="/(auth)/register">Go to Register</Link>
      <Button onPress={handleLogin}>Login</Button>
    </CenteredView>
  );
};

export default Login;
