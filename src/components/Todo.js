import React, { useContext, useState, useEffect } from "react";
import TodoStyle from "../styles/TodoStyle";
import { ContentStyle, ContentEditStyle } from "../styles/ContentStyle";
import TodoBtnStyle from "../styles/TodoBtnStyle";
import CheckboxStyle from "../styles/CheckboxStyle";
import { Context } from "./container/App";

export default function Todo({ id, children, isChecked }) {
  const dispatch = useContext(Context);
  const [editable, setEditable] = useState(false);
  const [current, setCurrent] = useState(children);

  useEffect(() => {
    setCurrent(children);
  }, [children]);

  return (
    <TodoStyle id={id} editable={editable} onClick={() => setEditable(true)}>
      {editable ? (
        <>
          <CheckboxStyle
            type="checkbox"
            checked={isChecked}
            onChange={() => dispatch({ type: "completeTodo", payload: id })}
          />
          <ContentEditStyle
            value={current}
            onChange={e => setCurrent(e.target.value)}
          />
          <TodoBtnStyle
            onClick={() => {
              if (editable) {
                dispatch({
                  type: "updateTodo",
                  payload: { id: id, text: current }
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
        <ContentStyle isChecked={isChecked}>{current}</ContentStyle>
      )}
    </TodoStyle>
  );
}
