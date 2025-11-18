import { createContext } from "react";

const AuthContext = createContext<{
  isInitialized: boolean;
  isLoggedIn: boolean;
  login: () => Promise<void>;
}>({
  isInitialized: false,
  isLoggedIn: false,
  login: () => Promise.resolve(),
});

export default AuthContext;
