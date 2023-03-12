import styled from "styled-components";

export const Container = styled.header`
  max-width: 320px;
  width: 100%;

  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }

  h1 {
    color: var(--color-primary);
    font-size: 18px;
  }
  button {
    width: 79.54px;
    height: 25.58px;
    padding: 0px 16px;

    border-radius: 4px;

    font-size: var(--headlines);
    background-color: var(--grey-3);
    color: var(--grey-0);

    &:hover {
      background-color: var(--color-primary);
    }
  }
  @media (min-width: 568px) {
    max-width: ${(props) => (props.largeSchema ? "600px" : "310px")};
  }
`;
export const Introduction = styled.section`
  width: 100%;
  height: 110px;
  padding: 20px 0px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  border-top: 2px solid var(--grey-3);
  border-bottom: 2px solid var(--grey-3);

  h2 {
    font-size: var(--titles);
    color: var(--grey-0);
  }
  p {
    font-size: var(--headlines);
    color: var(--grey-1);
  }
  @media (min-width: 568px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
