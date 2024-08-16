interface Actions {
    type: "ADD" | "RESET";
}

const counterReducer = (state: number, actions: Actions): number => {
    if (actions.type === "ADD") return state+1;
    if (actions.type === "RESET") return 0;
    return state;
}

export default counterReducer;