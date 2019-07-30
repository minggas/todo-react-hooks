import React, { useContext, useState } from "react";
import TodoStyle from "../styles/TodoStyle";
import ContentStyle from "../styles/ContentStyle";
import DeleteBtnStyle from "../styles/DeleteBtnStyle";
import CheckboxStyle from "../styles/CheckboxStyle";
import { Context } from "./container/App";

const Todo = ({ id, children, isChecked }) => {
  const dispatch = useContext(Context);
  const [editable, setEditable] = useState();

  return (
    <TodoStyle id={id}>
      <CheckboxStyle
        type="checkbox"
        checked={isChecked}
      <ContentStyle
        value={children}
        readOnly={!editable}
        onInput={e =>
          dispatch({
            type: "updateTodo",
            payload: { id: id, text: e.target.value }
          })
        }
      />
      <span>{children}</span>
      <DeleteBtnStyle
        onClick={() => {
          dispatch({ type: "deleteTodo", payload: id });
        }}
      >
        X
      </DeleteBtnStyle>
    </TodoStyle>
  );
};

export default Todo;
