import { createContext } from "react";

const AuthContext = createContext<{
  isLoggedIn: boolean;
  login: () => Promise<void>;
}>({
  isLoggedIn: false,
  login: () => Promise.resolve(),
});

export default AuthContext;
