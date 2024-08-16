import { Task } from "../TaskList";

// We use "type" to differentiate between the interfaces.
interface AddTask {
    type: "ADD"
    task: Task;
}


interface DeleteTask {
    type: "DELETE"
    id: number;
}

type Actions = AddTask | DeleteTask;

// initial state, actions we can apply to it
const tasksReducer = (tasks: Task[], action: Actions): Task[] => {
    switch (action.type) {
        case "ADD":
            return [...tasks, action.task];
        case "DELETE":
            return tasks.filter(t => t.id !== action.id);
    }
}

export default tasksReducer