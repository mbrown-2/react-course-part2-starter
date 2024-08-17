import React from "react";
import { AuthActions } from "./AuthProvider";

interface UserContextsType {
    user: string;
    dispatch: React.Dispatch<AuthActions>
}

const AuthContexts = React.createContext<UserContextsType>({} as UserContextsType);

export default AuthContexts;