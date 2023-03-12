import { Container, InputContainer } from "./style";

const Input = ({ children, label, register, name, error, ...rest }) => {
  return (
    <Container>
      <div>
        <label htmlFor={name}>
          {label} {!!error && <span>- {error}</span>}
        </label>
      </div>
      <InputContainer isErrored={!!error}>
        <input {...register ? {...register(name)} : {}} {...rest} />
        {!!children && children}
      </InputContainer>
    </Container>
  );
};

export default Input;
