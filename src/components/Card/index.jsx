import { Container, Title } from "./style";

const Card = ({ techId, nameTech, statusTech, onFunction, captureTech }) => {
  return (
    <Container
      onClick={() => {
        onFunction(true);
        captureTech(techId);
      }}
    >
      <Title>{nameTech}</Title>
      <p>{statusTech}</p>
    </Container>
  );
};

export default Card;
