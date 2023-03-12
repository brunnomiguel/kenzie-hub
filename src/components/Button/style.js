import styled from "styled-components";

export const StyledButton = styled.button`
  width: 280px;
  height: 45px;
  margin: 16px 0px;

  background-color: ${(props) => (props.greySchema ? "#868E96" : "#FF577F")};
  color: ${(props) => (props.greySchema ? "#F8F9FA" : "#FFFFFF")};

  border-radius: 8px;

  transition: 0.5s;
`;
