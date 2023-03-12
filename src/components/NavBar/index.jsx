import { Container, Introduction } from "./style";
import Button from "../Button";
import { useHistory } from "react-router-dom";

const NavBar = ({
  nameButton,
  path,
  setAuthenticated,
  name,
  course_module,
  largeSchema = false,
}) => {
  const history = useHistory();

  const handleNavigation = (path) => {
    if (history.location.pathname === "/dashboard") {
      localStorage.clear();
      setAuthenticated(false);
    }
    return history.push(path);
  };

  return (
    <Container largeSchema={largeSchema}>
      <div>
        <h1>Kenzie Hub</h1>
        <Button onClick={() => handleNavigation(path)}>{nameButton}</Button>
      </div>
      <div>
        {history.location.pathname === "/dashboard" && (
          <Introduction>
            <h2>Olá, {name}</h2>
            <p>{course_module}</p>
          </Introduction>
        )}
      </div>
    </Container>
  );
};

export default NavBar;
