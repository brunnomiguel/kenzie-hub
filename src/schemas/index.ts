import * as yup from "yup";

const validateUpperCase = /^(?=.*[A-Z])/;
const validateLowerCase = /^(?=.*[a-z])/;
const validateNumbers = /(?=.*[0-9])/;
const validateSpecialCharacter = /^(?=.*[!#@$%&*.])/;
const validateCharacter = /^.{8,}$/;

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .required("Please, type your e-mail")
    .email("Invalid e-mail"),
  password: yup.string().required("Please, type your password"),
});

export const signUpSchema = yup.object().shape({
  name: yup.string().required("Por favor, digite o seu nome"),
  email: yup
    .string()
    .required("Por favor, digite o seu e-mail")
    .email("E-mail inválido"),
  password: yup
    .string()
    .required("Campo obrigatório!")
    .matches(validateUpperCase, "Senha deve conter 1 letra maiuscula")
    .matches(validateLowerCase, "Senha deve conter 1 letra minuscula")
    .matches(validateNumbers, "Senha deve conter 1 numero")
    .matches(
      validateSpecialCharacter,
      "Senha deve conter um caractere especial"
    )
    .matches(
      validateCharacter,
      "Senha deve conter o mínimo de oito caracteres"
    ),
  confirm_password: yup
    .string()
    .required("Confirm password required")
    .oneOf([yup.ref("password")], "Password don't match"),
  bio: yup.string().required("Digite algo sobre você"),
  contact: yup.string().required("Por favor, digite um contato"),
  course_module: yup
    .string()
    .required("Por favor, selecione um módulo para início"),
});

export const techSchema = yup.object().shape({
  title: yup.string().required("Por favor, digite uma tecnologia"),
  status: yup.string().required("Por favor, selecione um status"),
});
