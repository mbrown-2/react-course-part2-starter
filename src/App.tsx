import "./App.css";
import HomePage from "./routing/HomePage";
import NavBar from "./routing/NavBar";
import Counter from "./state-management/counter/Counter";
import TaskList from "./state-management/tasks/TaskList";
import AuthProvider from "./state-management/auth/AuthProvider";
import { TasksProvider } from "./state-management/tasks";

function App() {
  return (
    <>
      <AuthProvider>
        <TasksProvider>
          <NavBar />
          <HomePage />
          <Counter />
          <TaskList />
        </TasksProvider>
      </AuthProvider>
    </>
  );
}

export default App;
