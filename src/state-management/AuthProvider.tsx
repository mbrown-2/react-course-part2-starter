import { ReactNode, useReducer } from "react";
import loginReducer from "./reducers/loginReducer";
import AuthContexts from "./contexts/userContexts";

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
