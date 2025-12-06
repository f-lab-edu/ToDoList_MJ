import { useState, useRef, useEffect } from "react";
import { loadTodos, saveTodos } from "../services/todoStorage";

export const useTodos = () => {
  const [todos, setTodos] = useState(loadTodos);
  const idRef = useRef(todos.length);

  const onCreate = (defaultContent) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      defaultContent,
      date: new Date().getTime(),
    };

    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  const onEdit = (targetId, editContent) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === targetId ? { ...todo, defaultContent: editContent } : todo
      )
    );
  };

  const onUpdate = (targetId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  return {
    todos,
    onCreate,
    onDelete,
    onEdit,
    onUpdate,
  };
};
