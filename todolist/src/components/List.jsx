import "./List.css";
import TodoItem from "./TodoItem";

const List = ({ todos, onEdit, onDelete }) => {
  return (
    <div className="List">
      <h2>오늘의 할 일</h2>
      <div className="todos_wrapper">
        {todos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} onDelete={onDelete} onEdit={onEdit} />;
        })}
      </div>
    </div>
  );
};

export default List;
