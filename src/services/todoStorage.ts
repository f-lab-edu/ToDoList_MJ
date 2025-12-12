import type { Todo } from "../types/todo";

export const loadTodos = (): Todo[] => {
  try {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error("localStorage 로드 실패", error);
    return [];
  }
};

export const saveTodos = (todos: Todo[]): void => {
  try {
    localStorage.setItem("todos", JSON.stringify(todos));
  } catch (error) {
    console.error("localStorage 저장 실패", error);
  }
};
