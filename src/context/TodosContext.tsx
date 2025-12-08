import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import { useTodos, type TodosStore } from "../hooks/useTodos";

const TodosContext = createContext<TodosStore | null>(null);

interface TodosProviderProps {
  children: ReactNode;
}

export const TodosProvider = ({ children }: TodosProviderProps) => {
  const todosStore = useTodos();
  return <TodosContext.Provider value={todosStore}>{children}</TodosContext.Provider>;
};

export const useTodosContext = (): TodosStore => {
  const ctx = useContext(TodosContext);
  if (!ctx) {
    throw new Error("useTodosContext는 TodosProvider 안에서 사용해야 합니다.");
  }
  return ctx;
};
