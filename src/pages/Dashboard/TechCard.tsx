import { theme } from "../../styles/theme";
import { Flex, Text, useDisclosure } from "@chakra-ui/react";
import { ModalEditTech } from "../../components/Modal/ModalEditTech";

interface Itech {
  id: string;
  title: string;
  status: string;
}

interface ItechProps {
  tech: Itech;
}

export const TechCard = ({ tech }: ItechProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        p="4"
        h="50px"
        cursor="pointer"
        transition="0.5s"
        borderRadius="4px"
        alignItems="center"
        onClick={() => onOpen()}
        bg={theme.colors.gray[400]}
        justifyContent="space-between"
        _hover={{ bg: theme.colors.gray[200] }}
      >
        <Text fontSize="1rem" fontWeight="700" color="#ffffff">
          {tech.title}
        </Text>
        <Text fontSize="0.9rem" color={theme.colors.gray[100]}>
          {tech.status}
        </Text>
      </Flex>
      <ModalEditTech isOpen={isOpen} onClose={onClose} techData={tech} />
    </>
  );
};
