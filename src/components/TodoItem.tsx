import { useNavigate } from "react-router-dom";
import { useTodosContext } from "../context/TodosContext";
import type { Todo } from "../types/todo";
import "./TodoItem.css";

type TodoItemProps = { todo: Todo };

const TodoItem = ({ todo }: TodoItemProps) => {
  const { id, isDone, content, date } = todo;
  const { onDelete, onUpdate } = useTodosContext();
  const navigation = useNavigate();

  const onClickDelete = () => {
    onDelete(id);
  };
  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  const onClickLink = () => {
    navigation(`/view/${id}`, { state: { content } });
  };

  return (
    <div className="todo-item">
      <input className="check-input" onChange={onChangeCheckbox} readOnly checked={isDone} type="checkbox" />
      <div className="tit">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button className="todo-btn" onClick={onClickLink}>
        수정
      </button>
      <button className="todo-btn" onClick={onClickDelete}>
        삭제
      </button>
    </div>
  );
};

export default TodoItem;
