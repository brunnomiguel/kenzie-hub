import { useToast } from "@chakra-ui/react";
import { createContext, useContext, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services";

interface IauthProvider {
  children: ReactNode;
}

interface Iuser {
  id: number;
  bio: string;
  name: string;
  email: string;
  contact: string;
  avatar_url: string;
  course_module: string;
}

interface IauthState {
  token: string;
  user: Iuser;
}

interface IsignInCredentials {
  email: string;
  password: string;
}

interface IsignUpCredentials {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  bio: string;
  contact: string;
  course_module: string;
}

interface IauthContextData {
  user: Iuser;
  token: string;
  signIn: (credentials: IsignInCredentials) => Promise<void>;
  signUp: (credentials: IsignUpCredentials) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<IauthContextData>({} as IauthContextData);

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export const AuthProvider = ({ children }: IauthProvider) => {
  const [data, setData] = useState<IauthState>(() => {
    const token = localStorage.getItem("@Kenziehub:token");
    const user = localStorage.getItem("@Kenziehub:user");

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as IauthState;
  });

  const toast = useToast();
  const navigate = useNavigate();

  const signIn = async (data: IsignInCredentials) => {
    const response = await api.post("/sessions", data);

    const { token, user } = response.data;

    localStorage.setItem("@Kenziehub:token", JSON.stringify(token));
    localStorage.setItem("@Kenziehub:user", JSON.stringify(user));

    setData({ token, user });

    navigate("/dashboard", { replace: true });
  };

  const signUp = async ({
    name,
    email,
    password,
    bio,
    contact,
    course_module,
  }: IsignUpCredentials) => {
    const body = { name, email, password, bio, contact, course_module };
    await api
      .post("/users", body)
      .then((_) => {
        toast({
          title: "Success!",
          description: "Cadastro realizado com sucesso!",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        navigate("/", { replace: true });
      })
      .catch((_) => {
        toast({
          title: "Oopss!",
          description: "Algo deu errado ao realizar cadastro",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  };

  const signOut = () => {
    localStorage.removeItem("@AniControl:token");
    localStorage.removeItem("@AniControl:user");

    setData({} as IauthState);
  };

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        token: data.token,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
