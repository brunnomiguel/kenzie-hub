import {
  Button,
  Center,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
} from "@chakra-ui/react";

import { Input } from "../Input";
import { theme } from "../../styles/theme";

import { useForm } from "react-hook-form";
import { techSchema } from "../../schemas";
import { yupResolver } from "@hookform/resolvers/yup";

import { useTechs } from "../../contexts/Techs";
import { MdArrowDropDown } from "react-icons/md";

interface ImodalAddTechProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ItechData {
  title: string;
  status: string;
}

export const ModalAddTech = ({ isOpen, onClose }: ImodalAddTechProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ItechData>({
    resolver: yupResolver(techSchema),
  });

  const { addNewTech } = useTechs();

  const onSubmitFunction = (techData: ItechData) => {
    addNewTech(techData);
    reset();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        w="100%"
        h="350px"
        maxW="450px"
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
          <Text fontSize="1rem" fontWeight="600" color={theme.colors.gray[50]}>
            Cadastrar Tecnologia
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
        <ModalBody mt="4" as="form" onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            label="Nome"
            {...register("title")}
            placeholder="Nome da Tecnologia"
          />
          <Text
            pt="4"
            pb="2"
            w="100%"
            textAlign="left"
            color={
              errors.status ? theme.colors.red[900] : theme.colors.gray[50]
            }
          >
            Selecionar status
          </Text>
          <Select
            w="100%"
            h="50px"
            size="lg"
            variant="outline"
            borderWidth="0.125rem"
            borderRadius="0.25rem"
            {...register("status")}
            icon={<MdArrowDropDown />}
            bg={theme.colors.gray[200]}
            color={theme.colors.gray[50]}
            borderColor={!!errors.status && theme.colors.red[900]}
          >
            <option
              value="Iniciante"
              style={{ background: theme.colors.gray[200] }}
            >
              Iniciante
            </option>
            <option
              value="Intermediário"
              style={{ background: theme.colors.gray[200] }}
            >
              Intermediário
            </option>
            <option
              value="Avançado"
              style={{ background: theme.colors.gray[200] }}
            >
              Avançado
            </option>
          </Select>
          <Button
            h="45px"
            w="100%"
            color="white"
            type="submit"
            m="2rem 0 0 0"
            transition="0.5s"
            borderRadius="0.5rem"
            _hover={{ opacity: 0.7 }}
            bg={theme.colors.red[500]}
          >
            Cadastrar Tecnologia
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
