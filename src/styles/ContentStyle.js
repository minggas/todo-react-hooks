import styled from "styled-components";

const ContentTodo = styled.input`
  width: 100%;
  height: 2rem;
  padding: 0.5rem;
  border-radius: 5px;
  background-color: ${props => (props.readOnly ? "transparent" : "white")};
  outline: ${props => (props.readOnly ? "none" : 1)};
  text-decoration-line: ${props => (props.isChecked ? "line-through" : "none")};
`;

export default ContentTodo;
