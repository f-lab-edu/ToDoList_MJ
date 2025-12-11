import "./TodoInput.css";
import { useState, useRef, KeyboardEvent, ChangeEvent } from "react";
import { KEY } from "./constants";
import { useTodosContext } from "../context/TodosContext";

const TodoInput = () => {
  const { onCreate } = useTodosContext();

  const [content, setContent] = useState("");
  const contentRef = useRef<HTMLInputElement | null>(null);

  const onChangeContent = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };
  const onKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === KEY.ENTER) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (content === "") {
      alert("할 일을 작성해주세요.");
      contentRef.current?.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  return (
    <div className="editor">
      <input
        className="user-input"
        ref={contentRef}
        value={content}
        onKeyDown={onKeydown}
        onChange={onChangeContent}
        placeholder="할 일을 작성해주세요."
      />
      <button className="add-btn" onClick={onSubmit}>
        추가
      </button>
    </div>
  );
};

export default TodoInput;
