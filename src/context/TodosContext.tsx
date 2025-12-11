import { createContext, useContext, PropsWithChildren } from "react";
import { useTodos } from "../hooks/useTodos";
import type { Todo } from "../types/todo";
import type { TodosAction } from "../store/todoReducer";

export interface TodosContextType {
  todos: Todo[];
  dispatch: React.Dispatch<TodosAction>;
}

const TodosContext = createContext<TodosContextType | null>(null);

export const TodosProvider = ({ children }: PropsWithChildren) => {
  const todosStore = useTodos();
  return <TodosContext.Provider value={todosStore}>{children}</TodosContext.Provider>;
};

export const useTodosContext = (): TodosContextType => {
  const ctx = useContext(TodosContext);
  if (!ctx) {
    throw new Error("TodosProvider 안에서 사용해야 합니다.");
  }
  return ctx;
};
