import "./Editor.css";
import { useState, useRef } from "react";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onKeydown = (e) => {
    if (e.keyCode === 13) onSubmit();
  };

  const onSubmit = () => {
    if (content === "") {
      alert("할 일을 작성해주세요.");
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onKeyDown={onKeydown}
        onChange={onChangeContent}
        placeholder="할 일을 작성해주세요."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
