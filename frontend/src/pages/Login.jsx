import { useForm } from "react-hook-form";
import { login } from "../servises/axiosInstance";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

const Login = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    try {
      const {
        data: { token },
      } = await login(email, password);

      setToken(token);
      navigate("/contacts");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Email"
        {...register("email", { required: "Email is required" })}
      />
      <input
        placeholder="Password"
        {...register("password", { required: "Password is required" })}
      />

      {errors.email && <span>{errors.email.message}</span>}
      {errors.password && <span>{errors.password.message}</span>}

      <input type="submit" />
    </form>
  );
};

export default Login;
