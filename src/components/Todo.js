import React, { useContext, useState, useEffect } from "react";
import TodoStyle from "../styles/TodoStyle";
import { MarkdownPreview, MarkdownInput } from "../components/Markdown";
import TodoBtnStyle from "../styles/TodoBtnStyle";
import CheckboxStyle from "../styles/CheckboxStyle";
import { Context } from "./container/App";
import marked from "marked";

export default function Todo({ id, text, title, isChecked }) {
  const dispatch = useContext(Context);
  const [editable, setEditable] = useState(false);
  const [actual_title, setTitle] = useState(title);
  const [actual_text, setText] = useState(text);
  const renderer = new marked.Renderer();
  renderer.link = function(href, title, text) {
    return `<a target="_blank" href="${href}">${text}</a>`;
  };

  marked.setOptions({
    breaks: true
  });
  const mark = {
    __html: marked(actual_text, { renderer: renderer })
  };

  useEffect(() => {
    setText(text);
  }, [text]);

  useEffect(() => {
    setTitle(title);
  }, [title]);

  return (
    <TodoStyle
      id={id}
      isChecked={isChecked}
      editable={editable}
      onClick={() => setEditable(true)}
    >
      {editable ? (
        <>
          <CheckboxStyle
            type="checkbox"
            checked={isChecked}
            onChange={() => dispatch({ type: "completeTodo", payload: id })}
          />
          <div>
            <input
              type="text"
              value={actual_title}
              onChange={e => setTitle(e.target.value)}
            />
            <MarkdownInput
              value={actual_text}
              onChange={e => setText(e.target.value)}
            />
          </div>
          <TodoBtnStyle
            onClick={() => {
              if (editable) {
                dispatch({
                  type: "updateTodo",
                  payload: { id: id, title: actual_title, text: actual_text }
                });
              }
              setEditable(false);
            }}
          >
            {editable ? "Save" : "Edit"}
          </TodoBtnStyle>
          <TodoBtnStyle
            onClick={() => dispatch({ type: "deleteTodo", payload: id })}
          >
            Delete
          </TodoBtnStyle>
        </>
      ) : (
        <div>
          <h1>{title}</h1>
          <MarkdownPreview value={mark} />
        </div>
      )}
    </TodoStyle>
  );
}
