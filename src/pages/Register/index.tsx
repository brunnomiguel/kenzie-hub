import { Grid } from "@chakra-ui/react";
import { SignUpForm } from "./SignUpForm";
import { theme } from "../../styles/theme";
import { NavBar } from "../../components/NavBar";

export const Register = () => {
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
        <SignUpForm />
      </Grid>
    </Grid>
  );
};
