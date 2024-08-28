import React, { useState, useSyncExternalStore } from "react";
import { useGetTodosByIdQuery, useGetTodosQuery } from "./store/apis/todosApis";

export const TodoApp = () => {
  //const { isLoading, data: todos = [] } = useGetTodosQuery();

  const [todoId, setTodoId] = useState(1);

  const { isLoading, data: todo } = useGetTodosByIdQuery(todoId);
  console.log(todo);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };

  const previusTodo = () => {
    if (todoId === 1) return;
    setTodoId(todoId - 1);
  };
  return (
    <>
      <h1> Todos -RKTQuery</h1>
      <hr />

      <h4>Loading.. {isLoading ? "true" : "false"}.</h4>

      <pre>{JSON.stringify(todo.title)}</pre>

      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>
              {todo.completed ? "completed" : "incomplete ----> "}
            </strong>
            {todo.title}
          </li>
        ))}
      </ul> */}
      <button onClick={previusTodo}>Prevoius Todo</button>
      <button onClick={nextTodo}>Next Todo</button>
    </>
  );
};
