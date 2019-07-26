import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/react/cleanup-after-each";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import FormTodo from "../components/container/FormTodo";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FormTodo />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("Change input", () => {
  const { container } = render(<FormTodo />);
  const inputValue = getByTestId(container, "inputName");
  const newTodo = "This is a new Todo";
  fireEvent.change(inputValue, { target: { value: newTodo } });
  expect(inputValue.value).toEqual("This is a new Todo");
});
