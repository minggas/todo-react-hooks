import React from "react";
import Todo from "../Todo";
import TodoListStyle from "../../styles/TodoListStyle";

const TodoList = ({ todos }) => {
  return (
    <TodoListStyle>
      {todos &&
        todos.map((element, idx) => (
          <Todo key={idx} id={idx} {...element}>
            {element.text}
          </Todo>
        ))}
    </TodoListStyle>
  );
};

export default TodoList;
