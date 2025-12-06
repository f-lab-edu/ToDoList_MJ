import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = ({ todos, onEdit, onDelete, onUpdate }) => {
  const [page, setPage] = useState(1);
  const perPage = 5;
  const totalPages = Math.ceil(todos.length / perPage);
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const currentTodos = todos.slice(start, end);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const pagePrev = () => setPage(page - 1);
  const pageNext = () => setPage(page + 1);

  return (
    <div className="list">
      <h2 className="tit">오늘의 할 일</h2>
      <div className="todos_wrapper">
        {currentTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onDelete={onDelete}
            onEdit={onEdit}
            onUpdate={onUpdate}
          />
        ))}
      </div>
      <div className="pagination">
        <button className="page-btn" onClick={pagePrev}>
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
        <button className="page-btn" onClick={pageNext}>
          &#62;
        </button>
      </div>
    </div>
  );
};

export default List;
