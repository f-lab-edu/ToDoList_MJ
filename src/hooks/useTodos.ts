import { useReducer } from "react";
import { todosReducer } from "../store/todoReducer";
import { loadTodos, saveTodos } from "../services/todoStorage";
import type { Todo } from "../types/todo";

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todosReducer, [], loadTodos);

  const addTodo = (todo: Todo) => {
    const nextTodos = [todo, ...todos];
    dispatch({ type: "ADD", payload: todo });
    saveTodos(nextTodos);
  };

  const deleteTodo = (id: number) => {
    const nextTodos = todos.filter((todo) => todo.id !== id);
    dispatch({ type: "DELETE", payload: id });
    saveTodos(nextTodos);
  };

  const updateTodo = (id: number, content: string) => {
    const nextTodos = todos.map((todo) => (todo.id === id ? { ...todo, content } : todo));
    dispatch({ type: "UPDATE", payload: { id, content } });
    saveTodos(nextTodos);
  };

  const toggleDone = (id: number) => {
    const nextTodos = todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo));
    dispatch({ type: "DONE", payload: id });
    saveTodos(nextTodos);
  };

  return {
    todos,
    addTodo,
    deleteTodo,
    updateTodo,
    toggleDone,
  };
};
