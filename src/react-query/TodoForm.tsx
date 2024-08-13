import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { Todo } from "./hooks/useTodos";
import axios from "axios";

// An interface to be used for the "context" of the useMutation hook
// Purpose: manages data across phaes of a mutation, especially for optimistic updates
// Allows to store information that can be re-accessed in onError or onSettled callbacks.
interface AddTodoContext {
  previousTodos: Todo[];
}

const TodoForm = () => {
  const queryClient = useQueryClient();
  const ref = useRef<HTMLInputElement>(null);

  // defined in tanstack, just like query hook
  // args ( data obtained from backend, error object, data sent to backend, context of mutation )
  const addTodo = useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/posts", todo)
        .then((res) => res.data),

    onMutate: (newTodo: Todo) => {
      // Set the context
      const previousTodos = queryClient.getQueryData<Todo[]>(["todos"]) || [];
      queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
        newTodo,
        ...(todos || []),
      ]);
      if (ref.current) ref.current.value = "";

      // Returns a context object with data prior to query mutation.
      return { previousTodos };
    },
    // savedTodo = data from backend | newTodo = created on the client
    onSuccess: (dataTodo, clientTodo) => {
      // setQueryData : used to directly update the cache of the app.
      queryClient.setQueryData<Todo[]>(["todos"], (todos) =>
        todos?.map((todo) => (todo === clientTodo ? dataTodo : todo))
      );
    },
    // error = the error encountered | variables = client-side data | context = rollback snapshot of data
    onError: (error, clientTodo, context) => {
      if (!context) return;
      queryClient.setQueryData<Todo[]>(["todos"], context.previousTodos);
    },
  });

  /*
  Summary of above:
  - Optimistic implementation
    - Create an onMutate function to update the query cache, updating UI right away.
    - In onMutate, return a context object for fallback in case the update fails.
    - onError: if context object exists and failure occurs, use fallback to update cache back to initial state
    - onSuccess: replace the new insertion with todo from the backend.


  */

  return (
    <>
      {addTodo.error && (
        <div className="alert alert-danger">{addTodo.error.message}</div>
      )}
      <form
        className="row mb-3"
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current && ref.current.value)
            addTodo.mutate({
              id: 0,
              title: ref.current?.value,
              userId: 1,
              completed: false,
            });
        }}
      >
        <div className="col">
          <input ref={ref} type="text" className="form-control" />
        </div>
        <div className="col">
          <button className="btn btn-primary" disabled={addTodo.isLoading}>
            {addTodo.isLoading ? "Adding..." : "Add"}
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
