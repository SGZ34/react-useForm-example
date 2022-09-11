import * as yup from "yup";
import es from "yup-es";
yup.setLocale(es);

export const LoginSchema = yup
  .object({
    correo: yup.string().email().min(10).max(80).required(),
    password: yup.string().min(10).max(80).required(),
  })
  .required();
