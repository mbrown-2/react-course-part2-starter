import { useContext } from "react";
import TasksContext from "./tasks/tasksContexts";
import useCounterStore from "./counter/store";

const { tasks } = useContext(TasksContext);
const counter = useCounterStore((s) => s.counter);

// when changes are recorded to the state, the component the state is within will re-render.
console.log("Render navbar");

const NavBar = () => {
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{counter}</span>
    </nav>
  );
};

export default NavBar;
