import { useNavigate } from "react-router-dom";

import { SignInForm } from "./SignInForm";
import { theme } from "../../styles/theme";
import { NavBar } from "../../components/NavBar";
import { Button, Grid, Text } from "@chakra-ui/react";

export const SignIn = () => {
  const navigate = useNavigate();

  return (
    <Grid
      minH="100vh"
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      bg={theme.colors.gray[400]}
    >
      <NavBar />
      <Grid
        w="100%"
        maxW="450px"
        borderRadius="0.5rem"
        bg={theme.colors.gray[300]}
      >
        <SignInForm />
        <Grid w="100%" maxW="450px" p="0.5rem 1.25rem 1.25rem 1.25rem">
          <Text mb="0.6rem" textAlign="center" color={theme.colors.gray[100]}>
            Ainda não possui uma conta?
          </Text>
          <Button
            color="#ffffff"
            _hover={{ opacity: 0.7 }}
            bg={theme.colors.gray[100]}
            onClick={() => navigate("/cadastro", { replace: true })}
          >
            Cadastre-se
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
