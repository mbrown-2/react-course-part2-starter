interface Login {
    type: "LOGIN";
    user: string;
}

interface Logout {
    type: "LOGOUT";
}

type Actions = Login | Logout;

const loginReducer = (state: string, actions: Actions): string => {
    if (actions.type === "LOGIN") return actions.user;
    if (actions.type === "LOGOUT") return "";
    return state;
}

export default loginReducer