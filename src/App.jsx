import "./App.css";
import { useState, useRef, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import View from "./pages/View";

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const idRef = useRef(0);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content,
      date: new Date().getTime(),
    };

    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  const onEdit = (targetId, editContent) => {
    setTodos((prev) => prev.map((todo) => (todo.id === targetId ? { ...todo, content: editContent } : todo)));
  };

  const onUpdate = (targetId) => {
    setTodos(todos.map((todo) => (todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo)));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <div className="area">
        <Header />
      </div>
      <Routes>
        <Route
          path="/"
          element={<Home todos={todos} onEdit={onEdit} onCreate={onCreate} onDelete={onDelete} onUpdate={onUpdate} />}
        />
        <Route path="/view/:id" element={<View todos={todos} onEdit={onEdit} />} />
      </Routes>
    </>
  );
}

export default App;
