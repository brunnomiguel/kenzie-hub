import { ReactNode } from "react";
import { AuthProvider } from "./Auth";
import { TechsProvider } from "./Techs";
import { ChakraProvider } from "@chakra-ui/react";

interface IappProvider {
  children: ReactNode;
}

export const AppProvider = ({ children }: IappProvider) => {
  return (
    <ChakraProvider>
      <AuthProvider>
        <TechsProvider>{children}</TechsProvider>
      </AuthProvider>
    </ChakraProvider>
  );
};
