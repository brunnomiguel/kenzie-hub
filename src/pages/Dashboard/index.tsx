import {
  Button,
  Center,
  Flex,
  Grid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { ModalToAddTech } from "../../components/Modal/ModalToAddTech";
import { NavBar } from "../../components/NavBar";
import { useTechs } from "../../contexts/Techs";
import { theme } from "../../styles/theme";
import { TechCard } from "./TechCard";

export const Dashboard = () => {
  const { techs, loadTechs } = useTechs();

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    techs && loadTechs();
  }, []);

  return (
    <>
      <Grid
        w="100%"
        minH="100vh"
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        bg={theme.colors.gray[400]}
      >
        <NavBar />
        <Flex
          w="100%"
          maxW="780px"
          mb="1.125rem"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text
            mt="1rem"
            fontSize="1.25rem"
            fontWeight="600"
            color={theme.colors.gray[50]}
          >
            Tecnologias
          </Text>
          <Center
            w="40px"
            h="40px"
            mt="1rem"
            as="button"
            transition="0.5s"
            borderRadius="4px"
            onClick={() => onOpen()}
            bg={theme.colors.gray[300]}
            _hover={{ bg: theme.colors.gray[200] }}
          >
            <FaPlus fill="#ffffff" />
          </Center>
        </Flex>
        <Grid
          p="8"
          gap="4"
          w="100%"
          h="480px"
          maxW="780px"
          display="flex"
          flexDir="column"
          borderRadius="4px"
          bg={theme.colors.gray[300]}
        >
          {techs.length < 1 ? (
            <Grid
              width="100%"
              display="flex"
              flexDir="column"
              alignItems="center"
              justifyContent="center"
            >
              <Text
                p="8"
                fontWeight="500"
                fontSize="1.5rem"
                textAlign="center"
                color={theme.colors.gray[50]}
              >
                Ainda não há nenhuma tecnologia cadastrada por aqui, que tal
                adicionar novas techs?
              </Text>
              <Button
                h="45px"
                w="200px"
                color="white"
                m="2rem 0 0 0"
                transition="0.5s"
                borderRadius="0.5rem"
                onClick={() => onOpen()}
                _hover={{ opacity: 0.7 }}
                bg={theme.colors.red[500]}
              >
                Adicionar nova tech
              </Button>
            </Grid>
          ) : (
            techs.map((tech) => <TechCard key={tech.id} tech={tech} />)
          )}
        </Grid>
      </Grid>
      <ModalToAddTech isOpen={isOpen} onClose={onClose} />
    </>
  );
};
