import { useReducer, useState } from "react";
import loginReducer from "./reducers/loginReducer";

const LoginStatus = () => {
  const [userState, dispatch] = useReducer(loginReducer, "");

  if (userState)
    return (
      <>
        <div>
          <span className="mx-2">{userState}</span>
          <a onClick={() => dispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => dispatch({ type: "LOGIN", user: "mosh.hamedani" })}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
