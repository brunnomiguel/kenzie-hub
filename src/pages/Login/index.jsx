import { AnimateContent, Content, Container } from "./style";
import { FiEye, FiEyeOff } from "react-icons/fi";

import formSchema from "./formYup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useHistory, Redirect } from "react-router-dom";
import { useState } from "react";

import Button from "../../components/Button";
import Input from "../../components/Input";

import api from "../../services/api";
import { toast } from "react-toastify";

const Login = ({ authenticated, setAuthenticated }) => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const history = useHistory();

  const handleNavigate = (path) => {
    return history.push(path);
  };

  const onSubmitFunction = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        const { token, user } = response.data;

        localStorage.setItem("@Kenziehub:token", JSON.stringify(token));
        localStorage.setItem("@Kenziehub:user", JSON.stringify(user));

        setAuthenticated(true);

        return history.push(`/dashboard`);
      })
      .catch((_) => toast.error("E-mail ou senha inválidos"));

    reset();
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <h1>Kenzie Hub</h1>
      <Content>
        <AnimateContent>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h2>Login</h2>
            <Input
              label="E-mail"
              placeholder="Digite seu e-mail"
              register={register}
              name="email"
              error={errors.email?.message}
            />
            <Input
              label="Senha"
              placeholder="Digite sua senha"
              type={showPassword ? "text" : "password"}
              register={register}
              name="password"
              error={errors.password?.message}
            >
              <Button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEye /> : <FiEyeOff />}
              </Button>
            </Input>
            <Button type="submit">Entrar</Button>
            <p>Ainda não possui uma conta?</p>
          </form>
          <Button greySchema onClick={() => handleNavigate("/register")}>
            Cadastre-se
          </Button>
        </AnimateContent>
      </Content>
    </Container>
  );
};

export default Login;
