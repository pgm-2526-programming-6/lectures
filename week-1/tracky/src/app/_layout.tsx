import AuthProvider from "@functional/auth/AuthProvider";
import useAuth from "@functional/auth/useAuth";
import { DefaultScreenOptions, Fonts, Theme } from "@style/theme";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { ThemeProvider } from "@react-navigation/native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    [Fonts.regular]: require("@assets/fonts/FiraSans-Regular.ttf"),
    [Fonts.semiBold]: require("@assets/fonts/FiraSans-SemiBold.ttf"),
    [Fonts.bold]: require("@assets/fonts/FiraSans-Bold.ttf"),
  });

  // Expo boilerplate code
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AuthProvider>
      <AuthGate />
    </AuthProvider>
  );
}

const AuthGate = () => {
  const { isLoggedIn } = useAuth();

  return (
    <ThemeProvider value={Theme}>
      <Stack screenOptions={{ ...DefaultScreenOptions, headerShown: false }}>
        {isLoggedIn ? <Stack.Screen name="(app)" /> : <Stack.Screen name="(auth)" />}
      </Stack>
    </ThemeProvider>
  );
};
