import * as yup from "yup";

const validateCharacter = "^.{6,}$";

const formSchema = yup.object().shape({
  name: yup.string().required("Campo obrigatório!"),
  email: yup.string().email("E-mail inválido").required("Campo obrigatório!"),
  password: yup
    .string()
    .required("Campo obrigatório!")
    .matches(validateCharacter, "Requerido mínimo de seis caracteres"),
  confirmPassword: yup
    .string()
    .required("Campo obrigatório!")
    .oneOf([yup.ref("password"), null], "Senhas não conferem"),
  bio: yup.string().required("Campo obrigatório!"),
  contact: yup.string().required("Campo obrigatório!"),
  course_module: yup.string().required("Campo obrigatório!"),
});

export default formSchema;
