import "./App.css";
import { useState, useRef, useEffect } from "react";
import Header from "./components/Header";
import RouterDetails from "./router/RouterDetails";

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const idRef = useRef(0);

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
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <div className="area">
        <Header />
        <RouterDetails
          todos={todos}
          onEdit={onEdit}
          onCreate={onCreate}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      </div>
    </>
  );
}

export default App;
