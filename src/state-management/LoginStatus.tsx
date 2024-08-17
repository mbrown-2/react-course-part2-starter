import useAuth from "./hooks/useAuth";

const LoginStatus = () => {
  const { user: userState, dispatch } = useAuth();

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
