import { useContext } from "react";
import TasksContext from "./contexts/tasksContexts";
import LoginStatus from "./LoginStatus";

const { tasks, dispatch } = useContext(TasksContext);

const NavBar = () => {
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
