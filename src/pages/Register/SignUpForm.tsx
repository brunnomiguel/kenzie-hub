import { theme } from "../../styles/theme";
import { Input } from "../../components/Input";
import { Button, Grid, Heading, Select, Text, VStack } from "@chakra-ui/react";

import { RiProfileLine } from "react-icons/ri";
import { MdArrowDropDown } from "react-icons/md";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

import { useForm } from "react-hook-form";
import { signUpSchema } from "../../schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useAuth } from "../../contexts/Auth";

interface IsignUpCredentials {
  bio: string;
  name: string;
  email: string;
  contact: string;
  password: string;
  course_module: string;
  confirm_password: string;
}

export const SignUpForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IsignUpCredentials>({
    resolver: yupResolver(signUpSchema),
  });

  const { signUp } = useAuth();

  const onSubmitFunction = (data: IsignUpCredentials) => {
    setLoading(true);

    signUp(data)
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
        Crie a sua conta
      </Heading>
      <Text
        mb="0.6rem"
        fontSize="0.75rem"
        textAlign="center"
        color={theme.colors.gray[100]}
      >
        Rápido e grátis, vamos nessa!
      </Text>
      <VStack w="100%" spacing="4">
        <Input
          label="Nome"
          icon={FaUser}
          error={errors.name}
          {...register("name")}
          placeholder="Digite aqui o seu nome"
        />
        <Input
          type="email"
          label="E-mail"
          icon={FaEnvelope}
          error={errors.email}
          {...register("email")}
          placeholder="Digite aqui o seu e-mail"
        />
        <Input
          icon={FaLock}
          label="Senha"
          type="password"
          error={errors.password}
          {...register("password")}
          placeholder="Digite aqui sua senha"
        />
        <Input
          icon={FaLock}
          type="password"
          label="Confirmação de senha"
          error={errors.confirm_password}
          {...register("confirm_password")}
          placeholder="Confirme a sua senha"
        />
        <Input
          label="Bio"
          error={errors.bio}
          icon={RiProfileLine}
          {...register("bio")}
          placeholder="Fale um pouco sobre você"
        />
        <Input
          label="Contato"
          icon={RiProfileLine}
          error={errors.contact}
          {...register("contact")}
          placeholder="Digite um contato"
        />
        <Text
          w="100%"
          textAlign="left"
          color={
            errors.course_module ? theme.colors.red[900] : theme.colors.gray[50]
          }
        >
          Módulo do curso
        </Text>
        <Select
          w="100%"
          h="50px"
          size="lg"
          variant="outline"
          borderWidth="0.125rem"
          borderRadius="0.25rem"
          icon={<MdArrowDropDown />}
          bg={theme.colors.gray[200]}
          color={theme.colors.gray[50]}
          {...register("course_module")}
          borderColor={!!errors.course_module && theme.colors.red[900]}
        >
          <option
            style={{ background: theme.colors.gray[200] }}
            value="Primeiro módulo - Introdução ao Frontend"
          >
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option
            style={{ background: theme.colors.gray[200] }}
            value="Segundo módulo - Frontend Avançado"
          >
            Segundo módulo (Frontend Avançado)
          </option>
          <option
            style={{ background: theme.colors.gray[200] }}
            value="Terceiro módulo - Introdução ao Backend"
          >
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option
            style={{ background: theme.colors.gray[200] }}
            value="Quarto módulo - Backend Avançado"
          >
            Quarto módulo (Backend Avançado)
          </option>
        </Select>
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
          Cadastrar
        </Button>
      </VStack>
    </Grid>
  );
};
