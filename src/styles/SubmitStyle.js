import styled from "styled-components";

const SubmitTodo = styled.input`
  width: 100%;
  height: 2rem;
  padding: 0.5rem;
  border-radius: 5px;
  color: ${props => (!props.test ? "grey" : "white")};
  font-size: 1.1rem;
  font-weight: bold;
  background-color: ${props =>
    !props.test ? "rgb(80, 80, 80)" : "rgb(80,100,200)"};
`;

export default SubmitTodo;
