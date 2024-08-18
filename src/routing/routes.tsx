import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";
import ContactPage from "./ContactPage";
import UserDetailPage from "./UserDetailPage";

// Provide an array of route objects : (path, element / a component to render)
// A router renders components only when the user is able to view them.

// NOTE: in paths, parameters are prefixed with a colons (:)
const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/users", element: <UserListPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/users/:id", element: <UserDetailPage /> },
]);

export default router;
