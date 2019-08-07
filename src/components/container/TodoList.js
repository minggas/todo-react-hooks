import React from "react";
import Todo from "../Todo";
import TodoListStyle from "../../styles/TodoListStyle";
import Tabs from "../../components/Tabs";

const TodoList = ({ todos }) => {
  return (
    <TodoListStyle>
      <Tabs>
        <div label="All">
          {todos &&
            todos.map((element, idx) => (
              <Todo key={idx} id={idx} {...element}>
                {element}
              </Todo>
            ))}
        </div>
        <div label="Unfinished">
          {todos &&
            todos.map((element, idx) =>
              !element.isChecked ? (
                <Todo key={idx} id={idx} {...element}>
                  {element}
                </Todo>
              ) : (
                ""
              )
            )}
        </div>
        <div label="Completed">
          {todos &&
            todos.map((element, idx) =>
              element.isChecked ? <Todo key={idx} id={idx} {...element} /> : ""
            )}
        </div>
      </Tabs>
    </TodoListStyle>
  );
};

export default TodoList;
