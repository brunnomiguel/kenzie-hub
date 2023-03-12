import styled, { keyframes } from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.7);
`;
const appear = keyframes`
  from{
    opacity: 0;
    transform: translateZ();
  }
  to{
    opacity: 1;
    transform: translateZ();
  }
`;
export const Container = styled.div`
  max-width: 310px;

  display: flex;
  flex-direction: column;

  background-color: var(--grey-3);
  border-radius: 6px;

  animation: ${appear} 2s;
`;
export const TitleContent = styled.div`
  width: 100%;
  height: 40px;
  padding: 10px 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 6px 6px 0px 0px;

  background-color: var(--grey-2);

  h4 {
    color: var(--grey-0);
    font-size: var(--headlines);
  }

  button {
    width: 20px;
    height: 20px;
    background-color: var(--grey-2);
    svg {
      transform: translateY(2.5px);
      color: #ffffff;

      &:hover {
        color: var(--color-primary);
      }
    }
  }
`;
export const Content = styled.form`
  width: 100%;
  padding: 8px 14px;

  display: flex;
  flex-direction: column;

  border-radius: 0px 0px 6px 6px;

  input {
    color: var(--grey-50);
  }
`;

export const ButtonsContent = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 10px;

  button {
    width: 100%;
  }
  button:first-child {
    background-color: var(--color-primary-Negative);
  }
`;
