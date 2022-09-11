import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { LoginSchema } from "./schemas";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="card col-8 offset-2 mt-4"
    >
      <div className="card-body container">
        <input
          {...register("correo", { required: true })}
          className={`form-control ${errors.correo ? "is-invalid" : ""}`}
          placeholder="Correo"
        />
        <span className="invalid-feedback">{errors.correo?.message}</span>

        <input
          {...register("password", { required: true })}
          className={`form-control mt-3 ${errors.correo ? "is-invalid" : ""}`}
          placeholder="Contraseña"
          type="password"
        />

        <span className="invalid-feedback">{errors.password?.message}</span>

        <button type="submit" className="btn btn-primary w-100 mt-4">
          Enviar
        </button>
      </div>
    </form>
  );
}
