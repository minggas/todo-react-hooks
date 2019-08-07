import styled from "styled-components";

export const ContentEditStyle = styled.textarea`
  width: 90%;
  padding: 0.5rem;
  border-radius: 5px;
  background-color: ${props => (props.readOnly ? "transparent" : "white")};
`;

export const ContentStyle = styled.div`
  width: 100%;
  padding: 0.5rem;
  overflow-wrap: break-word;
  border-radius: 5px;
  text-decoration-line: ${props => (props.isChecked ? "line-through" : "none")};
`;
