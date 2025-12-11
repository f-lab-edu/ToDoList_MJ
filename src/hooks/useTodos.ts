import { useReducer, useEffect } from "react";
import { todosReducer } from "../store/todoReducer";
import { loadTodos, saveTodos } from "../services/todoStorage";

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todosReducer, [], loadTodos);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  return { todos, dispatch };
};
