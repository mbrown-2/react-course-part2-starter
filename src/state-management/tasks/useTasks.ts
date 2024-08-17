import { useContext } from "react";
import TasksContext from "./tasksContexts";

const useTasks = () => useContext(TasksContext);

export default useTasks;