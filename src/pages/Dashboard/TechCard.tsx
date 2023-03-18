import { Flex, Text } from "@chakra-ui/react";
import { theme } from "../../styles/theme";

interface Itech {
  id: string;
  title: string;
  status: string;
}

interface ItechProps {
  tech: Itech;
}

export const TechCard = ({ tech }: ItechProps) => {
  return (
    <Flex
      p="4"
      h="50px"
      transition="0.5s"
      borderRadius="4px"
      alignItems="center"
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
  );
};
