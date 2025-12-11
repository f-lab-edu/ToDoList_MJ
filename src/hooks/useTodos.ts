import { useState, useRef, useEffect } from "react";
import { loadTodos, saveTodos } from "../services/todoStorage";
import type { Todo } from "../types/todo";

export interface TodosStore {
  todos: Todo[];
  onCreate: (content: string) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, editContent: string) => void;
  onUpdate: (id: number) => void;
}

export const useTodos = (): TodosStore => {
  const [todos, setTodos] = useState<Todo[]>(() => loadTodos());
  const idRef = useRef<number>(todos.length ? Math.max(...todos.map((t) => t.id)) + 1 : 0);

  const onCreate = (content: string) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content,
      date: Date.now(),
    };

    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  const onDelete = (targetId: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== targetId));
  };

  const onEdit = (targetId: number, editContent: string) => {
    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === targetId ? { ...todo, content: editContent } : todo)));
  };

  const onUpdate = (targetId: number) => {
    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo)));
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
