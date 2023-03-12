import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;

  text-align: left;

  display: flex;
  flex-direction: column;

  div {
    padding: 10px 0px;
    label {
      color: var(--grey-0);
      font-size: var(--headlines);
      span {
        color: var(--negative);
      }
    }
  }
`;

export const SelectContainer = styled.div`
  padding: 1rem;
  width: 100%;
  height: 50px;

  background-color: var(--grey-2);
  color: var(--grey-0);

  border-radius: 6px;
  border: 2px solid var(--grey-0);

  display: flex;
  align-items: center;

  transition: 0.4s;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--negative);
    `}

  select {
    width: 100%;
    padding: 8px;

    background-color: var(--grey-2);
    border: 1px solid var(--grey-2);
    border-radius: 6px;
    color: var(--grey-1);

    align-items: center;
    flex: 1;
  }
`;
