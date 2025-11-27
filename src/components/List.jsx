import "./List.css";
import TodoItem from "./TodoItem";

const List = ({ todos, onEdit, onDelete, onUpdate }) => {
  return (
    <div className="list">
      <h2 className="tit">오늘의 할 일</h2>
      <div className="todos_wrapper">
        {todos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} onDelete={onDelete} onEdit={onEdit} onUpdate={onUpdate} />;
        })}
      </div>
    </div>
  );
};

export default List;
