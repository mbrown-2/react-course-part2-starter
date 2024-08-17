import { useContext } from "react";
import AuthContexts from "../contexts/userContexts";

const useAuth = () => useContext(AuthContexts);

export default useAuth;