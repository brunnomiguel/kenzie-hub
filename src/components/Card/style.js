import styled from "styled-components";

export const Container = styled.div`
  max-width: 310px;
  width: 100%;
  padding: 12px;
  margin-bottom: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--grey-4);
  border-radius: 4px;

  cursor: pointer;
  transition: ease-in 0.2s;

  &:hover {
    background-color: var(--grey-2);
  }

  p {
    color: var(--grey-1);
    font-size: var(--headlines);
  }

  @media(min-width: 568px) {
    max-width: 600px;
  }
`;
export const Title = styled.h3`
  color: var(--grey-0);
  font-size: 14px;
`;
