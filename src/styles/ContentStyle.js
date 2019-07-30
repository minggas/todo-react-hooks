import styled from "styled-components";

const ContentTodo = styled.input`
  width: 100%;
  height: 2rem;
  padding: 0.5rem;
  border-radius: 5px;
  background-color: ${props => (props.readOnly ? "transparent" : "white")};
`;

export default ContentTodo;
