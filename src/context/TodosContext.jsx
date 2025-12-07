import { createContext, useContext } from "react";
import { useTodos } from "../hooks/useTodos";

const TodosContext = createContext(null);

export const TodosProvider = ({ children }) => {
  const todosStore = useTodos();
  return (
    <TodosContext.Provider value={todosStore}>{children}</TodosContext.Provider>
  );
};

export const useTodosContext = () => {
  const ctx = useContext(TodosContext);
  if (!ctx) {
    throw new Error("useTodosContext는 TodosProvider 안에서 사용해야 합니다.");
  }
  return ctx;
};
