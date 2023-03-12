import { StyledButton } from "./style";

const Button = ({
  children,
  greySchema = false,
  ...rest
}) => {
  return (
    <StyledButton greySchema={greySchema} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
