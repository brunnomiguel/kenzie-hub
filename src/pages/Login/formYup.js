import * as yup from "yup";

const validateCharacter = "^.{6,}$";

const formSchema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("Campo obrigatório!"),
  password: yup
    .string()
    .required("Campo obrigatório!")
    .matches(validateCharacter, "Requerido mínimo de seis caracteres"),
});

export default formSchema;
