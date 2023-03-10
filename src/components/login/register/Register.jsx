import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useValidate from "../../../hooks/useValidate";
import { AppContext } from "../../../router/Routers";
import "./stylesRegister.scss";

const Register = () => {
  const { userLogin, validateUserSesion } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    validateUserSesion();
  }, []);

  useEffect(() => {
    if (userLogin.hasOwnProperty("nomUser")) {
      navigate("/home");
    }
  }, [userLogin]);

  //Iniciamos el hook personalido
  const [validate, handleValidate] = useValidate("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitForm = (data) => {
    handleValidate(data.nomUser, "nomUser");
    console.log(validate);
  };

  return (
    <section className="secForm secRegister">
      <h2>Regístrate e inicia sesión en tu cuenta</h2>

      <form
        className="form secRegisterForm"
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <div className="inputsContainer">
          <div className="form__inputContainer">
            <span className="material-symbols-outlined">person</span>
            <input
              type="text"
              placeholder="Usuario"
              className="form__input"
              {...register("nomUser", {
                required: "Ingresa un nombre válido por favor",
              })}
            />
          </div>

          <div className="form__inputContainer">
            <span className="material-symbols-outlined">mail</span>
            <input
              type="text"
              placeholder="Email"
              className="form__input"
              {...register("email", {
                required: "Ingresa un nombre válido por favor",
              })}
            />
          </div>

          <div className="password">
            <h4>Ingresa tu constraseña</h4>

            <div className="form__inputContainer">
              <span className="material-symbols-outlined">lock</span>
              <input
                type="password"
                placeholder="Contraseña"
                className="form__input"
                {...register("password2", {
                  required: "Ingresa un nombre válido por favor",
                })}
              />
            </div>

            <div className="form__inputContainer inputPassword2">
              <span className="material-symbols-outlined">lock</span>
              <input
                type="password"
                placeholder="Confirma tu contraseña"
                className="form__input"
                {...register("password", {
                  required: "Ingresa un nombre válido por favor",
                })}
              />
            </div>
          </div>

          <div className="form__inputContainer">
            <span className="material-symbols-outlined">image</span>
            <input
              type="text"
              placeholder="URL de tu Foto"
              className="form__input inputConfirm"
              {...register("img", {
                required: "Ingresa un nombre válido por favor",
              })}
            />
          </div>
        </div>

        <button className="form__button">Registrarme</button>
      </form>

      <div className="form__register">
        <p className="registerP">¿Ya tienes una cuenta?</p>
        <Link to="/" className="registerA">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
};

export default Register;
