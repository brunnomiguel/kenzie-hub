import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  margin-bottom: 20px;

  h1 {
    margin: 20px;

    color: var(--color-primary);

    font-size: 25px;
    text-align: center;
  }
`;
export const Content = styled.div`
  max-width: 320px;
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: var(--grey-3);
  border-radius: 8px;
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

export const AnimateContent = styled.div`
  width: 100%;
  padding: 30px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appear} 2s;

  form {
    width: 100%;
    text-align: center;
    h2 {
      margin-bottom: 20px;
      color: var(--grey-0);
    }
  }

  button {
    &:hover {
      background-color: var(--grey-2);
    }
  }

  p {
    margin-top: 20px;
    color: var(--grey-1);
  }
`;
