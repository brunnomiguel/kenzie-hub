import { Container, SelectContainer } from "./style";

const SelectContent = ({ name, register, label, error, children }) => {
  return (
    <Container>
      <div>
        <label htmlFor={name}>
          {label} {!!error && <span>- {error}</span>}
        </label>
      </div>
      <SelectContainer>
        <select {...register(name)}>{children}</select>
      </SelectContainer>
    </Container>
  );
};

export default SelectContent;
