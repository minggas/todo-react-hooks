import styled from "styled-components";

const TodoBtnStyle = styled.button`
  margin: 5px;
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  background-color: ${props => {
    switch (props.children) {
      case "Delete":
        return "rgba(200,50,60,0.8)";
      case "Edit":
        return "rgba(100,100,200,0.8)";
      case "Save":
        return "rgba(50,200,80,0.8)";
      default:
        return "rgba(100,100,100,0.8)";
    }
  }};
`;

export default TodoBtnStyle;
