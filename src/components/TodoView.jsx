import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { key } from "./constants";
import "./TodoItem.css";

const TodoView = ({ todos, onEdit }) => {
  const nav = useNavigate();
  const { id } = useParams();

  const [localContent, setLocalContent] = useState("");

  useEffect(() => {
    const target = todos.find((todo) => todo.id === Number(id));
    if (target) {
      setLocalContent(target.content);
    }
  }, [id, todos]);

  const handleCancel = () => {
    nav("/");
  };

  const handleSave = () => {
    onEdit(Number(id), localContent);
    nav("/");
  };

  const onEditContent = (e) => {
    setLocalContent(e.target.value);
  };

  const onKeydown = (e) => {
    if (e.keyCode === key.Enter) {
      handleSave();
    }
  };

  return (
    <div className="todo-item">
      <input className="edit-input" type="text" value={localContent} onChange={onEditContent} onKeyDown={onKeydown} />
      <button className="todo-btn" onClick={handleSave}>
        완료
      </button>
      <button className="todo-btn" onClick={handleCancel}>
        취소
      </button>
    </div>
  );
};

export default TodoView;
