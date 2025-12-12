import type { Todo } from "../types/todo";

export type TodosAction =
  | { type: "ADD"; payload: Todo }
  | { type: "DELETE"; payload: number }
  | { type: "UPDATE"; payload: { id: number; content: string } }
  | { type: "DONE"; payload: number };

export const todosReducer = (state: Todo[], action: TodosAction): Todo[] => {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];

    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload);

    case "UPDATE":
      return state.map((todo) => (todo.id === action.payload.id ? { ...todo, content: action.payload.content } : todo));

    case "DONE":
      return state.map((todo) => (todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo));

    default:
      return state;
  }
};
