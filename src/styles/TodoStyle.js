import styled from "styled-components";

const TodoStyle = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
  display: grid;
  grid-template-columns: ${props =>
    props.editable ? "0.5fr 5fr 1fr 1fr" : "1fr"};
  background-color: var(--main-bg-color);
  border-radius: 5px;
  box-shadow: 0px 0px 1px rgb(30, 30, 30);
  margin: 10px auto;
  align-items: center;
`;

export default TodoStyle;
