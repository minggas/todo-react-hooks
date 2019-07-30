import React, { useReducer, useEffect, Suspense, lazy } from "react";
import useTodoReducer from "../../hooks/useTodoReducer";
import GlobalStyle from "../../styles/GlobalStyle";

export default function App(props) {
  const Header = lazy(() => import("../Header"));
  const InputTodo = lazy(() => import("./FormTodo"));
  const TodoList = lazy(() => import("./TodoList"));
  const [state, dispatch] = useReducer(useTodoReducer, []);

  useEffect(() => {
    const raw = localStorage.getItem("data");
    dispatch({ type: "reset", payload: JSON.parse(raw) || [] });
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state));
  }, [state]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Context.Provider value={dispatch}>
        <GlobalStyle />
        <Header />
        <InputTodo />
        <TodoList todos={state} />
      </Context.Provider>
    </Suspense>
  );
}

export const Context = React.createContext();
