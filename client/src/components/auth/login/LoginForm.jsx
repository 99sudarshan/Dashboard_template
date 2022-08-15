import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginInputs } from "./loginInputs";

const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {loginInputs.map((item, i) => {
        const { type, name, placeholder, validation, label } = item;
        return (
          <div className="flex flex-col gap-1" key={i}>
            <label>{label}</label>
            <input
              type={type}
              placeholder={placeholder}
              {...register(name, validation)}
            />
            <small className="error">{errors?.[name]?.message}</small>
          </div>
        );
      })}
      <button type="submit" className="button-style mt-4 w-full">
        Log in
      </button>
    </form>
  );
};

export default LoginForm;
