import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserDetail from "./UserDetail";
import Layout from "./Layout";
import UsersPage from "./UsersPage";
import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPage";
import PrivateRoutes from "./PrivateRoutes";

// Provide an array of route objects : (path, element / a component to render)
// A router renders components only when the user is able to view them.

// NOTE: in paths, parameters are prefixed with a colons (:)

// Child elements: paths are relative to the parent path.
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    // No path, is a "layout route"
    // Purpose: group routes / enforce layouts and/or business rules.
    element: <PrivateRoutes />,
    children: [
      {
        // Placing as child will protect it
        path: "users",
        element: <UsersPage />,
        children: [{ path: ":id", element: <UserDetail /> }],
      },
    ],
  },
]);

export default router;
