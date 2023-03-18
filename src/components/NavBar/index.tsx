import { useAuth } from "../../contexts/Auth";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Center, Flex, Grid, Heading, Text } from "@chakra-ui/react";

import { theme } from "../../styles/theme";
import { FaSignOutAlt } from "react-icons/fa";
import { IoReturnUpBack } from "react-icons/io5";

export const NavBar = () => {
  const navigate = useNavigate();

  const { user, signOut } = useAuth();
  const { pathname } = useLocation();

  return pathname === "/" ? (
    <Heading
      m="1.25rem"
      fontSize="2.5rem"
      textAlign="center"
      color={theme.colors.red[500]}
    >
      Kenzie Hub
    </Heading>
  ) : pathname === "/cadastro" ? (
    <Flex
      w="100%"
      maxW="450px"
      mb="1.125rem"
      alignItems="center"
      justifyContent="space-between"
    >
      <Heading
        fontSize="2.5rem"
        textAlign="center"
        color={theme.colors.red[500]}
      >
        Kenzie Hub
      </Heading>
      <Center
        w="40px"
        h="40px"
        as="button"
        onClick={() => navigate("/", { replace: true })}
      >
        <IoReturnUpBack size="2rem" color={theme.colors.gray[50]} />
      </Center>
    </Flex>
  ) : (
    <Grid w="100%" display="flex" flexDir="column" alignItems="center">
      <Flex
        w="100%"
        h="72px"
        maxW="780px"
        mb="1.125rem"
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading
          fontSize="2.5rem"
          textAlign="center"
          color={theme.colors.red[500]}
        >
          Kenzie Hub
        </Heading>
        <Center w="40px" h="40px" as="button" onClick={() => signOut()}>
          <FaSignOutAlt size="2rem" color={theme.colors.gray[50]} />
        </Center>
      </Flex>
      <Box w="100%" h="1.5px" bg={theme.colors.gray[300]} />
      <Flex
        w="100%"
        h="118px"
        maxW="780px"
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading
          fontWeight="700"
          fontSize="1.5rem"
          color={theme.colors.gray[50]}
        >
          Olá, {user.name}
        </Heading>
        <Text fontSize="1.125rem" color={theme.colors.gray[100]}>
          {user.course_module}
        </Text>
      </Flex>
      <Box w="100%" h="1.5px" bg={theme.colors.gray[300]} />
    </Grid>
  );
};
