import * as yup from "yup";

const passwordRules =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&'])[^ ]{8,}$/;

export const basicSchema = yup.object().shape({
  email: yup.string().email("Por favor ingrese un email válido."),
  age: yup
    .number()
    .positive("La edad debe ser un número positivo")
    .integer()
    .required("Campo requerido"),
  password: yup
    .string()
    .min(8)
    .matches(passwordRules, {
      message:
        "Por favor ingrese una contraseña más fuerte (Números, mayúsculas y símbolos).",
    })
    .required("Campo requerido"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Las contraseñas debe coincidir"),
});
