import styled, { css } from "styled-components";

export const Container = styled.div`
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
export const InputContainer = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;

  background-color: var(--grey-2);
  color: var(--grey-0);

  border-radius: 6px;
  border: 2px solid var(--grey-0);

  transition: 0.4s;

  position: relative;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--negative);
    `}

  input {
    background-color: transparent;
    color: var(--grey-0);

    padding: 10px 0px 10px 10px;

    align-items: center;
    flex: 1;

    &::placeholder {
      color: var(--grey-50);
    }
  }
  button {
    width: 35px;
    margin: 0;

    position: absolute;
    top: 0;
    right: 0;

    background-color: transparent;

    svg {
      color: var(--color-primary);
      transform: translatey(2.5px)
    }
  }
`;
