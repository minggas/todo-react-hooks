import React from "react";
import Todo from "../Todo";

const TodoList = ({ todos }) => {
  return (
    <>
      {todos &&
        todos.map((element, idx) => (
          <Todo key={idx} id={idx} {...element}>
            {element.text}
          </Todo>
        ))}
    </>
  );
};

export default TodoList;
