import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "./useTodos";
import axios from "axios";
import { CACHE_KEY_TODOS } from "../constants";

const useAddTodo = (onAdd: () => void) => {
    const queryClient = useQueryClient();

    // Context interface for setting up our mutation object.
    interface AddTodoContext {
        previousTodos: Todo[];
    }

    // defined in tanstack, just like query hook
    // args ( data obtained from backend, error object, data sent to backend, context of mutation )
    return useMutation<Todo, Error, Todo, AddTodoContext>({
      mutationFn: (todo: Todo) =>
        axios
          .post<Todo>("https://jsonplaceholder.typicode.com/posts", todo)
          .then((res) => res.data),
  
      onMutate: (newTodo: Todo) => {
        // Set the context
        const previousTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];
        queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
          newTodo, ...todos]);
        onAdd();
  
        // Returns a context object with data prior to query mutation.
        return { previousTodos };
      },
      // savedTodo = data from backend | newTodo = created on the client
      onSuccess: (dataTodo, clientTodo) => {
        // setQueryData : used to directly update the cache of the app.
        queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
          todos?.map((todo) => (todo === clientTodo ? dataTodo : todo))
        );
      },
      // error = the error encountered | variables = client-side data | context = rollback snapshot of data
      onError: (error, clientTodo, context) => {
        if (!context) return;
        queryClient.setQueryData<Todo[]>(["todos"], context.previousTodos);
      },
    });
};

export default useAddTodo;