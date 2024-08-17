import "./App.css";
import HomePage from "./routing/HomePage";
import NavBar from "./routing/NavBar";
import Counter from "./state-management/Counter";
import LoginStatus from "./state-management/LoginStatus";
import TaskList from "./state-management/tasks/TaskList";
import AuthProvider from "./state-management/AuthProvider";
import { TasksProvider } from "./state-management/tasks/TasksProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <TasksProvider>
          <NavBar />
          <HomePage />
          <LoginStatus />
          <Counter />
          <TaskList />
        </TasksProvider>
      </AuthProvider>
    </>
  );
}

export default App;
