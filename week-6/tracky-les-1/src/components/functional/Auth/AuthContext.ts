import { Auth, LoginBody } from "@core/modules/auth/types.auth";
import { createContext } from "react";

type AuthContextType = {
  isInitialized: boolean;
  isLoggedIn: boolean;
  auth: Auth | null;
  login: (data: LoginBody) => Promise<Auth | null>;
  refresh: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  isInitialized: false,
  isLoggedIn: false,
  auth: null,
  login: (data: LoginBody) => Promise.resolve(null),
  refresh: () => Promise.resolve(),
});
export default AuthContext;
