export default (state, action) => {
  switch (action.type) {
    case "reset":
      return action.payload;
    case "addTodo": {
      const newTodo = action.payload;
      return [...state, { text: newTodo, isChecked: false }];
    }
    case "deleteTodo":
      return state.filter((_, index) => index !== action.payload);
    case "completeTodo":
      return state.map((todo, index) => {
        if (index === action.payload) {
          return {
            ...todo,
            isChecked: !todo.isChecked
          };
        } else {
          return { ...todo };
        }
      });
    case "updateTodo":
      return state.map((todo, index) => {
        if (index === action.payload.id) {
          return {
            ...todo,
            text: action.payload.text
          };
        } else {
          return { ...todo };
        }
      });
    default:
      return state;
  }
};
