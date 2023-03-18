import { useToast } from "@chakra-ui/react";
import { createContext, useContext, useState, ReactNode } from "react";
import { api } from "../../services";
import { useAuth } from "../Auth";

interface ItechProvider {
  children: ReactNode;
}

interface ItechContextData {
  techs: Itech[];
  loadTechs: () => Promise<void>;
  addNewTech: (data: Omit<Itech, "id">) => Promise<void>;
  editTech: (data: IeditTech) => Promise<void>;
  removeTech: (techId: number) => Promise<void>;
}

interface Itech {
  id: string;
  title: string;
  status: string;
}

interface IeditTech {
  oldStatus: string;
  status: string;
  tech: Itech;
}

const TechsContext = createContext<ItechContextData>({} as ItechContextData);

export const useTechs = () => {
  const context = useContext(TechsContext);

  if (!context) {
    throw new Error("useTechs must be used within an TechsProvider");
  }

  return context;
};

export const TechsProvider = ({ children }: ItechProvider) => {
  const [techs, setTechs] = useState<Itech[]>([]);

  const { token, user } = useAuth();

  const toast = useToast();

  const loadTechs = async () => {
    await api
      .get(`/users/${user.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => setTechs(data.techs))
      .catch((_) => {
        toast({
          title: "Oopss!",
          description: "Algo deu errado ao carregar tecnologias",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  };

  const addNewTech = async (data: Omit<Itech, "id">) => {
    await api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast({
          title: "Success!",
          description: "Tecnologia cadastrada com sucesso",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        loadTechs();
      })
      .catch((_) => {
        toast({
          title: "Oopss!",
          description: "Algo deu errado ao cadastrar tecnologia",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  };

  const editTech = async (data: IeditTech) => {
    const { oldStatus, status, tech } = data;

    if (oldStatus !== status) {
      await api
        .put(
          `/users/techs/${tech.id}`,
          { status: status },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((_) => {
          toast({
            title: "Success!",
            description: "Status atualizado com sucesso",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
          loadTechs();
        })
        .catch((_) => {
          toast({
            title: "Oopss!",
            description: "Algo deu errado ao atualizar status!",
            status: "error",
            duration: 2000,
            isClosable: true,
          });
        });
    } else {
      toast({
        title: "Oopss!",
        description: "Digite um status diferente do atual",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const removeTech = async (techId: number) => {
    await api
      .delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast({
          title: "Success!",
          description: "Tecnologia removida!",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        loadTechs();
      })
      .catch((_) => {
        toast({
          title: "Oopss!",
          description: "Algo deu errado ao excluir tecnologia",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  };

  return (
    <TechsContext.Provider
      value={{ techs, loadTechs, addNewTech, editTech, removeTech }}
    >
      {children}
    </TechsContext.Provider>
  );
};
