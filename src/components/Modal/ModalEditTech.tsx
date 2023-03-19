import {
  Button,
  Center,
  Flex,
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

interface Itech {
  id: string;
  title: string;
  status: string;
}

interface ImodalEditTechProps {
  isOpen: boolean;
  onClose: () => void;
  techData: Itech;
}

export const ModalEditTech = ({
  isOpen,
  onClose,
  techData,
}: ImodalEditTechProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Omit<Itech, "id">>({
    resolver: yupResolver(techSchema),
  });

  const { editTech } = useTechs();

  const onSubmitFunction = (data: Omit<Itech, "id">) => {
    const newData = {
      oldStatus: techData.status,
      status: data.status,
      tech: techData,
    };
    editTech(newData);
    reset();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        w="100%"
        maxW="450px"
        h="350px"
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
            Tecnologia Detalhes
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
            defaultValue={techData.title}
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
          <Flex gap="4" alignItems="center">
            <Button
              w="70%"
              h="45px"
              color="white"
              type="submit"
              m="2rem 0 0 0"
              transition="0.5s"
              borderRadius="0.5rem"
              _hover={{ opacity: 0.7 }}
              bg={theme.colors.red[500]}
            >
              Salvar Alterações
            </Button>
            <Button
              w="30%"
              h="45px"
              color="white"
              m="2rem 0 0 0"
              transition="0.5s"
              borderRadius="0.5rem"
              bg={theme.colors.gray[100]}
              _hover={{ bg: theme.colors.red[500] }}
            >
              Exluir
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
