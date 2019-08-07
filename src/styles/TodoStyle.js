import styled from "styled-components";

const TodoStyle = styled.div`
  width: 100%;
  position: relative;
  padding: 0.5rem 1rem;
  display: grid;
  grid-template-columns: ${props =>
    props.editable ? "0.5fr 5fr 1fr 1fr" : "1fr"};
  background-color: var(--main-bg-color);
  border-radius: 5px;
  box-shadow: 0px 0px 1px rgb(30, 30, 30);
  margin: 10px auto;
  align-items: center;
  :before {
    content: "${props => (props.isChecked ? "\\02714" : "")}";
    position: absolute;
    right: 15px;
    top: 20%;
    font-size: 4rem;
  }
`;

export default TodoStyle;
