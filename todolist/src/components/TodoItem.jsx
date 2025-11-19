import { useState } from "react";
import "./TodoItem.css";

const TodoItem = ({ id, content, date, onEdit, onDelete }) => {
  const onClickDelete = () => {
    onDelete(id);
  };

  const [isEdit, setIsEdit] = useState(false);
  const [localContent, setLocalContent] = useState(content);

  const handleEdit = () => {
    setIsEdit(true);
  };
  const handleCancel = () => {
    setIsEdit(false);
    setLocalContent(content);
  };
  const handleSave = () => {
    onEdit(id, localContent);
    setIsEdit(false);
  };

  return (
    <div className="TodoItem">
      {isEdit ? (
        <>
          <input type="text" value={localContent} onChange={(e) => setLocalContent(e.target.value)} />
          <button onClick={handleSave}>완료</button>
          <button onClick={handleCancel}>취소</button>
        </>
      ) : (
        <>
          <div className="tit">{content}</div>
          <div className="date">{new Date(date).toLocaleDateString()}</div>
          <button onClick={handleEdit}>수정</button>
          <button onClick={onClickDelete}>삭제</button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
