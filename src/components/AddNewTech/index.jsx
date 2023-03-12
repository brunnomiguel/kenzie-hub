import { MainContainer, Container, TitleContent, Content } from "./style";
import { FiX } from "react-icons/fi";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import api from "../../services/api";
import { toast } from "react-toastify";

import Button from "../Button";
import Input from "../Input";
import SelectContent from "../Select";
import Options from "../OptionsSelect";

const AddNewTech = ({ id = "modal", onClose = () => {}, loadTechs }) => {
  const token = JSON.parse(localStorage.getItem("@Kenziehub:token")) || "";

  const handleOutsideClick = (event) => {
    if (event.target.id === id) {
      onClose();
    }
  };

  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório!"),
    status: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const submitNewTech = (techs) => {
    const { title, status } = techs;
    api
      .post(
        "/users/techs",
        {
          title: title,
          status: status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((_) => {
        toast.success("Tecnologia adicionada com sucesso!");
        return loadTechs();
      })
      .catch((_) => toast.error("Tecnologia já adicionada"));
  };

  return (
    <MainContainer id={id} onClick={handleOutsideClick}>
      <Container>
        <TitleContent>
          <h4>Cadastrar Tecnologia</h4>
          <Button onClick={onClose}>
            <FiX />
          </Button>
        </TitleContent>
        <Content onSubmit={handleSubmit(submitNewTech)}>
          <Input
            label="Tecnologia"
            placeholder="Tecnologia"
            register={register}
            name="title"
            error={errors.title?.message}
          />
          <SelectContent
            name="status"
            label="Selecionar Nível"
            error={errors.status?.message}
            register={register}
          >
            <Options value="Iniciante">Iniciante</Options>
            <Options value="Intermediario">Intermediário</Options>
            <Options value="Avançado">Avançado</Options>
          </SelectContent>
          <Button type="submit">Adicionar Tecnologia</Button>
        </Content>
      </Container>
    </MainContainer>
  );
};
export default AddNewTech;
