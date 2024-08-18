import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

// Outlet components : placeholders for child components
// Depending on the user's location, different components will render inside at runtime.

const Layout = () => {
  return (
    <>
      <NavBar />
      <div id="main">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
