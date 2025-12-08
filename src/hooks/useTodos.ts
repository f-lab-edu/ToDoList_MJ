import { useState, useRef, useEffect } from "react";
import { loadTodos, saveTodos } from "../services/todoStorage";
import type { Todo } from "../types/todo";

export interface TodosStore {
  todos: Todo[];
  onCreate: (defaultContent: string) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, content: string) => void;
  onUpdate: (id: number) => void;
}

export const useTodos = (): TodosStore => {
  const [todos, setTodos] = useState<Todo[]>(() => loadTodos());
  const idRef = useRef<number>(todos.length ? Math.max(...todos.map((t) => t.id)) + 1 : 0);

  const onCreate = (defaultContent: string) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      defaultContent,
      date: new Date().getTime(),
    };

    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  const onDelete = (targetId: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== targetId));
  };

  const onEdit = (targetId: number, editContent: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === targetId ? { ...todo, defaultContent: editContent } : todo))
    );
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
