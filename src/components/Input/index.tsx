import {
  Text,
  FormLabel,
  InputGroup,
  FormControl,
  InputLeftElement,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  Flex,
} from "@chakra-ui/react";

import { IconType } from "react-icons";
import { theme } from "../../styles/theme";
import { FieldError } from "react-hook-form";
import { ForwardRefRenderFunction, forwardRef } from "react";

interface InputProps extends ChakraInputProps {
  label?: string;
  name: string;
  error?: FieldError | null;
  icon?: IconType;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, error = null, icon: Icon, label, ...rest },
  ref
) => {
  return (
    <FormControl w="100%">
      <Flex alignItems="center">
        {label && (
          <FormLabel
            color={error ? theme.colors.red[900] : theme.colors.gray[50]}
          >
            {error ? `${label} -` : label}
          </FormLabel>
        )}
        {!!error && (
          <Text mb="1.5" color={theme.colors.red[900]}>
            {error.message}
          </Text>
        )}
      </Flex>

      <InputGroup w="100%">
        {Icon && (
          <InputLeftElement mr="2" mt="1" color="red.600">
            <Icon
              color={error ? theme.colors.red[900] : theme.colors.gray[50]}
            />
          </InputLeftElement>
        )}
        <ChakraInput
          w="100%"
          h="50px"
          size="lg"
          {...rest}
          ref={ref}
          name={name}
          variant="outline"
          borderWidth="0.125rem"
          borderRadius="0.25rem"
          bg={theme.colors.gray[200]}
          color={theme.colors.gray[50]}
          borderColor={!!error && theme.colors.red[900]}
          _placeholder={{
            color: error ? theme.colors.red[900] : theme.colors.gray[50],
          }}
        />
      </InputGroup>
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
