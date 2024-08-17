import React from "react";
import { Actions } from "./TasksProvider";
import { Task } from "./TaskList";

interface TasksContextType {
    tasks: Task[];
    dispatch: React.Dispatch<Actions>
}

const TasksContext = React.createContext<TasksContextType>({} as TasksContextType);

export default TasksContext;