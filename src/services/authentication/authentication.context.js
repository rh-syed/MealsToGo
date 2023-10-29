import { React, createContext, useState } from "react";
import { loginRequest, signUpRequest } from "./authentication.service";
import { signOut } from "firebase/auth";
import { FIREBASE_AUTH } from "../../utils/firebase.config";
export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  FIREBASE_AUTH.onAuthStateChanged((usr) => {
    if (usr) {
      console.log(usr);
      setUser(usr);
      setLoading(false);
    } else {
      console.log("no usr", usr);
      setLoading(false);
    }
  });

  const onLogin = (email, password) => {
    setLoading(true);

    loginRequest(FIREBASE_AUTH, email, password)
      .then((u) => {
        setUser(u);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
        setError(e.toString());
      });
  };

  const onLogout = () => {
    setUser(null);
    signOut(FIREBASE_AUTH).then(() => {
      setUser(null);
      setError(null);
    });
  };
  const onRegister = (email, password, repeatPassword) => {
    if (password !== repeatPassword) {
      setError("Error: Passwords don't match");
      setLoading;
      return;
    }
    setLoading(true);
    signUpRequest(FIREBASE_AUTH, email, password)
      .then((u) => {
        setUser(u);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(e.toString());
      });
  };
  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
