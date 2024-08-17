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
}

export default loginReducer