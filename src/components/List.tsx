import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";
import { useTodosContext } from "../context/TodosContext";
import { PER_PAGE } from "./constants";

const List = () => {
  const { todos } = useTodosContext();

  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(todos.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const end = start + PER_PAGE;
  const currentTodos = todos.slice(start, end);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const goToPrevPage = () => setPage(page - 1);
  const goToNextPage = () => setPage(page + 1);

  return (
    <div className="list">
      <h2 className="tit">오늘의 할 일</h2>
      <div className="todos_wrapper">
        {currentTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
      <div className="pagination">
        <button className="page-btn" onClick={goToPrevPage}>
          &#60;
        </button>
        <div className="page-num">
          {pageNumbers.map((num) => (
            <button
              key={num}
              onClick={() => setPage(num)}
              className={num === page ? "active-page page-btn" : "page-btn"}
            >
              {num}
            </button>
          ))}
        </div>
        <button className="page-btn" onClick={goToNextPage}>
          &#62;
        </button>
      </div>
    </div>
  );
};

export default List;
