import {
  MainContainer,
  Container,
  TitleContent,
  Content,
  ButtonsContent,
} from "./style";
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

const EditRemoveTech = ({
  id = "modal",
  onClose = () => {},
  loadTechs,
  tech,
}) => {
  const token = JSON.parse(localStorage.getItem("@Kenziehub:token")) || "";

  const handleOutsideClick = (event) => {
    if (event.target.id === id) {
      onClose();
    }
  };

  const formSchema = yup.object().shape({
    status: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const statusUpdate = (newStatus) => {
    const { status } = tech;
    if (status !== newStatus.status) {
      api
        .put(`/users/techs/${tech.id}`, newStatus, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((_) => {
          toast.success("Status atualizado com sucesso!");
          return loadTechs();
        });
    } else {
      toast.error("Selecione um status diferente do atual!");
    }
  };

  const deleteTech = (techId) => {
    api
      .delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.success("Tecnologia removida com sucesso!");
        return loadTechs();
      })
      .catch((_) => toast.error("Exclusão já realizada!"));
  };

  return (
    <MainContainer id={id} onClick={handleOutsideClick}>
      <Container>
        <TitleContent>
          <h4>Detalhes da Stack</h4>
          <Button onClick={onClose}>
            <FiX />
          </Button>
        </TitleContent>
        <Content onSubmit={handleSubmit(statusUpdate)}>
          <Input disabled label="Stack" value={tech.title} name="title" />
          <SelectContent
            name="status"
            label="Atualizar Nível"
            error={errors.status?.message}
            register={register}
          >
            <Options value="Iniciante">Iniciante</Options>
            <Options value="Intermediario">Intermediário</Options>
            <Options value="Avançado">Avançado</Options>
          </SelectContent>
          <ButtonsContent>
            <Button type="submit">Salvar alterações</Button>
            <Button
              greySchema
              type="button"
              onClick={() => deleteTech(tech.id)}
            >
              Excluir
            </Button>
          </ButtonsContent>
        </Content>
      </Container>
    </MainContainer>
  );
};
export default EditRemoveTech;
