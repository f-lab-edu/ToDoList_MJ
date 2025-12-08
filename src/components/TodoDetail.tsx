import { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { KEY } from "./constants";
import "./TodoItem.css";
import { useTodosContext } from "../context/TodosContext";

const TodoDetail = () => {
  const { todos, onEdit } = useTodosContext();

  const nav = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [content, setContent] = useState("");
  const target = todos.find((todo) => todo.id === Number(id));

  useEffect(() => {
    if (target) {
      setContent(target.defaultContent);
    } else {
      alert("존재하지 않는 항목입니다.");
      nav("/");
    }
  }, [id, todos]);

  const updateTodoContent = async () => {
    if (!target) return false;

    await Promise.resolve(onEdit(target.id, content));
    return true;
  };

  const updateData = async () => {
    try {
      const ok = await updateTodoContent();

      if (!ok) throw new Error("Invalid todo id");

      alert("저장했습니다.");
      nav("/");
    } catch (err) {
      console.error(err);
      alert("저장에 실패했습니다.");
    }
  };

  const handleCancel = () => {
    nav("/");
  };

  const handleSave = () => {
    updateData();
  };

  const onEditContent = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === KEY.ENTER) {
      handleSave();
    }
  };

  return (
    <div className="todo-item">
      <input className="edit-input" type="text" value={content} onChange={onEditContent} onKeyDown={onKeydown} />
      <button className="todo-btn" onClick={handleSave}>
        완료
      </button>
      <button className="todo-btn" onClick={handleCancel}>
        취소
      </button>
    </div>
  );
};

export default TodoDetail;
