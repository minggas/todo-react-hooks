import React, { useContext } from "react";
import Input from "../../styles/InputStyle";
import { useInput } from "../../hooks/input-hook";
import Form from "../../styles/FormStyle";
import { Context } from "./App";

function InputTodo(props) {
  const { value, bind, reset } = useInput("");
  const dispatch = useContext(Context);

  const handleSubmit = ev => {
    ev.preventDefault();
    dispatch({ type: "addTodo", payload: value });
    reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        data-testid="inputName"
        type="text"
        {...bind}
        placeholder="Add your ToDo title"
        autoFocus={true}
      />
    </Form>
  );
}

export default InputTodo;
