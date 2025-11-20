import { useState } from "react";
import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, date, onEdit, onDelete, onUpdate }) => {
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
  const handleKeydown = (e) => {
    if (e.keyCode === 13) handleSave();
  };
  const handleSave = () => {
    onEdit(id, localContent);
    setIsEdit(false);
  };

  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  return (
    <div className="TodoItem">
      {isEdit ? (
        <>
          <input
            type="text"
            value={localContent}
            onKeyDown={handleKeydown}
            onChange={(e) => setLocalContent(e.target.value)}
          />
          <button onClick={handleSave}>완료</button>
          <button onClick={handleCancel}>취소</button>
        </>
      ) : (
        <>
          <input onChange={onChangeCheckbox} readOnly checked={isDone} type="checkbox" />
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
