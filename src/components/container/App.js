import React, { useReducer, useEffect } from "react";
import { Header } from "../Header";
import GlobalStyle from "../../styles/GlobalStyle";
import InputTodo from "./FormTodo";
import TodoList from "./TodoList";
import useTodoReducer from "../../hooks/useTodoReducer";

const Context = React.createContext();

const App = props => {
  const [state, dispatch] = useReducer(useTodoReducer, []);

  useEffect(() => {
    const raw = localStorage.getItem("data");
    dispatch({ type: "reset", payload: JSON.parse(raw) });
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state));
  }, [state]);

  return (
    <Context.Provider value={dispatch}>
      <GlobalStyle />
      <Header />
      <InputTodo />
      <TodoList todos={state} />
    </Context.Provider>
  );
};

export { App, Context };
