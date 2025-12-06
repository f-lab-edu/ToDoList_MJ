import "./TodoInput.css";
import { useState, useRef } from "react";
import { KEY } from "./constants";

const Editor = ({ onCreate }) => {
  const [defaultContent, setDefaultContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setDefaultContent(e.target.value);
  };
  const onKeydown = (e) => {
    if (e.keyCode === KEY.ENTER) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (defaultContent === "") {
      alert("할 일을 작성해주세요.");
      contentRef.current.focus();
      return;
    }
    onCreate(defaultContent);
    setDefaultContent("");
  };

  return (
    <div className="editor">
      <input
        className="user-input"
        ref={contentRef}
        value={defaultContent}
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

export default Editor;
