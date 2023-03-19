import {
  Button,
  Center,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import { useTechs } from "../../contexts/Techs";

interface ImodalRemoveTechProps {
  isOpen: boolean;
  onClose: () => void;
  techId: string;
}

export const ModalRemoveTech = ({
  isOpen,
  onClose,
  techId,
}: ImodalRemoveTechProps) => {
  const { removeTech } = useTechs();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        w="100%"
        h="250px"
        maxW="300px"
        borderRadius="4px"
        bg={theme.colors.gray[300]}
      >
        <ModalHeader
          w="100%"
          h="50px"
          display="flex"
          alignItems="center"
          borderRadius="4px 4px 0 0"
          bg={theme.colors.gray[200]}
          justifyContent="space-between"
        >
          <Text
            fontSize="0.9rem"
            fontWeight="600"
            color={theme.colors.gray[50]}
          >
            Confirmação de exclusão
          </Text>
          <Center
            as="button"
            fontWeight="600"
            fontSize="1.5rem"
            onClick={() => onClose()}
            color={theme.colors.gray[100]}
          >
            X
          </Center>
        </ModalHeader>
        <ModalBody
          gap="6"
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
        >
          <Heading
            fontWeight="600"
            textAlign="center"
            fontSize="1.25rem"
            color={theme.colors.gray[50]}
          >
            Tem certeza que deseja realizar a exclusão da tecnologia?
          </Heading>
          <Button
            w="70%"
            _hover={{ opacity: 0.7 }}
            bg={theme.colors.red[500]}
            color={theme.colors.gray[50]}
            onClick={() => removeTech(techId)}
          >
            Confirmar
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
