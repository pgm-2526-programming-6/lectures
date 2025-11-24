import { useState } from "react";
import AuthContext from "./AuthContext";

type Props = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = async () => {
    return Promise.resolve().then(() => setIsLoggedIn(true));
  };

  return (
    <AuthContext.Provider
      value={{
        isInitialized: true, // voorbereiding voor week 2
        isLoggedIn: isLoggedIn,
        login: handleLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
