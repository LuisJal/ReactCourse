import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <ul key={new Date().getDate()*4} className="list-group">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDeleteTodo = {id =>onDeleteTodo(id)} onToggleTodo={onToggleTodo}/>
      ))}
    </ul>
  );
};
