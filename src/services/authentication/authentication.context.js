import { React, createContext, useState, useRef } from "react";
import { loginRequest } from "./authentication.service";
import { getAuth } from "firebase/auth";
import { FIREBASE_AUTH } from "../../utils/firebase.config";
export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

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
  return (
    <AuthenticationContext.Provider
      value={{ isAuthenticated: !!user, user, isLoading, error, onLogin }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
