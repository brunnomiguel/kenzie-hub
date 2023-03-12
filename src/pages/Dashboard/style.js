import styled from "styled-components";

export const Container = styled.div`
  max-width: 310px;
  width: 100%;
  padding: 30px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media(min-width: 568px) {
    max-width: 600px;
  }
`;

export const Main = styled.main`
  width: 100%;

  h2 {
    color: var(--grey-0);
  }
`;
export const TitleContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    max-width: 40px;
    height: 40px;

    background-color: var(--grey-3);
    border-radius: 4px;

    &:hover {
      background-color: var(--color-primary);
    }

    svg {
      transform: translateY(2.5px);
      color: #ffffff;
    }
  }
`;
export const ResponseContainer = styled.ul`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 350px;
  padding: 20px 14px;

  background-color: var(--grey-3);
  border-radius: 6px;
  border: 1px solid var(--color-primary);

  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: var(--color-primary);
    border-radius: 0px 5px 5px 0px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--grey-3);
    border-radius: 20px;
    border: 1px solid var(--color-primary);
  }
`;
