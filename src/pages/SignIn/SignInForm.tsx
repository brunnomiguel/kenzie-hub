import { useForm } from "react-hook-form";
import { signInSchema } from "../../schemas";
import { yupResolver } from "@hookform/resolvers/yup";

import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Box, Button, Grid, Heading, Text } from "@chakra-ui/react";

import { theme } from "../../styles/theme";

import { useAuth } from "../../contexts/Auth";

import { Input } from "../../components/Input";

interface IsignInCredentials {
  email: string;
  password: string;
}

export const SignInForm = () => {
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IsignInCredentials>({
    resolver: yupResolver(signInSchema),
  });

  const onSubmitFunction = (data: IsignInCredentials) => {
    setLoading(true);

    signIn(data)
      .then((_) => setLoading(false))
      .catch((_) => setLoading(false));

    reset();
  };

  return (
    <Grid
      w="100%"
      as="form"
      display="flex"
      flexDir="column"
      alignItems="center"
      p="1.875rem 1.25rem"
      justifyContent="center"
      onSubmit={handleSubmit(onSubmitFunction)}
    >
      <Heading
        mb="6"
        fontWeight="700"
        textAlign="center"
        color={theme.colors.gray[50]}
        fontFamily={theme.fonts.heading}
        fontSize={["1.125rem", "1.125rem", "1.5rem"]}
      >
        Login
      </Heading>
      <Box mb="1rem" w="100%">
        <Input
          type="email"
          label="E-mail"
          icon={FaEnvelope}
          error={errors.email}
          {...register("email")}
          placeholder="Digite o seu e-mail"
        />
        {!errors.email && (
          <Text mt="1" textAlign="left" color={theme.colors.gray[100]}>
            Exemplo: nome@email.com
          </Text>
        )}
      </Box>
      <Input
        icon={FaLock}
        label="Senha"
        type="password"
        error={errors.password}
        {...register("password")}
        placeholder="Digite a sua senha"
      />
      <Button
        h="45px"
        w="100%"
        bg="red.500"
        color="white"
        type="submit"
        m="2rem 0 0 0"
        transition="0.5s"
        isLoading={loading}
        borderRadius="0.5rem"
        _hover={{ opacity: 0.7 }}
      >
        Entrar
      </Button>
    </Grid>
  );
};
