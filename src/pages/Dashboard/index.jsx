import { Container, Main, ResponseContainer, TitleContent } from "./style";
import { FiPlus } from "react-icons/fi";

import { Redirect } from "react-router-dom";
import { useState, useEffect } from "react";

import api from "../../services/api";
import { toast } from "react-toastify";

import NavBar from "../../components/NavBar";
import Button from "../../components/Button";
import Card from "../../components/Card";
import EditRemoveTech from "../../components/EditRemoveTech";
import AddNewTech from "../../components/AddNewTech";

const Dashboard = ({ authenticated, setAuthenticated }) => {
  const [techs, setTechs] = useState([]);
  const [tech, setTech] = useState({});

  const [addTech, setAddTech] = useState(false);
  const [editAndRemoveTech, setEditAndRemoveTech] = useState(false);

  const token = JSON.parse(localStorage.getItem("@Kenziehub:token")) || "";
  const { id, name, course_module } =
    JSON.parse(localStorage.getItem("@Kenziehub:user")) || {};

  const orderTechs = () => {
    const compareTech = techs.sort((firstTech, secondTech) => {
      if (firstTech.title < secondTech.title) return -1;
      if (firstTech.title > secondTech.title) return 1;
      return 0;
    });
    return compareTech;
  };
  orderTechs();

  const loadTechs = () => {
    api
      .get(`/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => setTechs(data.techs))
      .catch((_) => toast.error("Erro ao carregar Tecnologias"));
  };

  useEffect(() => {
    loadTechs();
    return () => {
      setTechs([]);
    };
  }, []);

  const captureTech = (techId) => {
    const verifyTech = techs.filter((tech) => tech.id === techId);
    setTech(...verifyTech);
  };

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      <NavBar
        name={name}
        course_module={course_module}
        nameButton="Sair"
        path="/login"
        setAuthenticated={setAuthenticated}
        largeSchema
      />
      <Main>
        <TitleContent>
          <h2>Tecnologias</h2>
          <Button onClick={() => setAddTech(true)}>
            <FiPlus />
          </Button>
        </TitleContent>
        {addTech ? (
          <AddNewTech onClose={() => setAddTech(false)} loadTechs={loadTechs} />
        ) : null}
        {editAndRemoveTech ? (
          <EditRemoveTech
            tech={tech}
            onClose={() => setEditAndRemoveTech(false)}
            loadTechs={loadTechs}
          />
        ) : null}
        <ResponseContainer>
          {techs.map((tech) => (
            <Card
              onFunction={setEditAndRemoveTech}
              captureTech={captureTech}
              key={tech.id}
              techId={tech.id}
              nameTech={tech.title}
              statusTech={tech.status}
            />
          ))}
        </ResponseContainer>
      </Main>
    </Container>
  );
};

export default Dashboard;
