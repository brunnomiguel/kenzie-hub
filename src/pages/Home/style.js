import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 50px;
    color: var(--color-primary-Focus);
    text-shadow: 0px 4px 3px rgba(236, 228, 228, 0.9);
  }
  h3 {
    padding: 25px;
    font-size: var(--titles);
    text-align: center;
    color: var(--grey-0);
  }

  @media (min-width: 568px) {
    h3 {
      font-size: 22px;
    }
  }
`;
