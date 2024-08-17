import { ReactNode, useReducer } from "react";
import React from "react";

interface Login {
  type: "LOGIN";
  user: string;
}

interface Logout {
  type: "LOGOUT";
}

export type AuthActions = Login | Logout;

const loginReducer = (state: string, actions: AuthActions): string => {
  if (actions.type === "LOGIN") return actions.user;
  if (actions.type === "LOGOUT") return "";
  return state;
};

interface UserContextsType {
  user: string;
  dispatch: React.Dispatch<AuthActions>;
}

const AuthContexts = React.createContext<UserContextsType>(
  {} as UserContextsType
);

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [user, authDispatch] = useReducer(loginReducer, "");
  return (
    <AuthContexts.Provider value={{ user, dispatch: authDispatch }}>
      {children}
    </AuthContexts.Provider>
  );
};

export default AuthProvider;
