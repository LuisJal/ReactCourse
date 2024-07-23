import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/toDoReducer";

const initialState = [
  /* {
        id: new Date().getTime(),
        desc: "Recolectar la piedra del alma",
        done: false,
      }, */
];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    console.log(todo);
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    console.log(id);
    dispatch({
      type: "[TODO] Delete Todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };

  

  return{
    todos,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo=> !todo.done).length
  }
};
