import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  // Differentiate between program and endpoint errors
  const isRouteError = isRouteErrorResponse(error);

  return (
    <>
      <h1>Oops...</h1>
      <p>
        {isRouteError
          ? "404 Page Not Found"
          : "Sorry, an unexpected error has occurred."}
      </p>
    </>
  );
};

export default ErrorPage;
