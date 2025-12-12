import { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { KEY } from "./constants";
import "./TodoItem.css";
import { useTodosContext } from "../context/TodosContext";

const TodoDetail = () => {
  const { todos, updateTodo } = useTodosContext();

  const navigation = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [content, setContent] = useState("");
  const todo = todos.find((todo) => todo.id === Number(id));

  useEffect(() => {
    if (todo) {
      setContent(todo.content);
    } else {
      alert("존재하지 않는 항목입니다.");
      navigation("/");
    }
  }, [id, todos]);

  const handleCancel = () => {
    navigation("/");
  };

  const handleSave = () => {
    if (!todo) return;

    updateTodo(todo.id, content);

    alert("저장했습니다.");
    navigation("/");
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
