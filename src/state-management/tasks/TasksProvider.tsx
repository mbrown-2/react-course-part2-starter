import { ReactNode, useReducer } from "react";
import TasksContext from "./tasksContexts";
import { Task } from "./TaskList";

// We use "type" to differentiate between the interfaces.
interface AddTask {
  type: "ADD";
  task: Task;
}

interface DeleteTask {
  type: "DELETE";
  id: number;
}

export type Actions = AddTask | DeleteTask;

// initial state, actions we can apply to it
const tasksReducer = (tasks: Task[], action: Actions): Task[] => {
  switch (action.type) {
    case "ADD":
      return [...tasks, action.task];
    case "DELETE":
      return tasks.filter((t) => t.id !== action.id);
  }
};

interface Props {
  children: ReactNode;
}

export const TasksProvider = ({ children }: Props) => {
  const [tasks, taskDispatch] = useReducer(tasksReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch: taskDispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
