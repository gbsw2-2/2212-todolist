import { useState, useRef } from "react";
import "./TodoEditor.css";

const TodoEditor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (!content) {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  const onKeyDown = (e) => {
    if (e.keycode === 13) {
      onSubmit();
    }
  };

  return (
    <div className="TodoEditor">
      <h3>새로운 Todo 작성하기 ✏️</h3>
      <div className="editor_wrapper">
        <input
          ref={inputRef}
          value={content}
          onChange={onChangeContent}
          onKeyDown={onKeyDown}
          placeholder="새로운 Todo-list 추가"
        ></input>
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
};
export default TodoEditor;
