import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useValidate from "../../../hooks/useValidate";
import { AppContext } from "../../../router/Routers";
import { showNotification } from "../../../services/Notify";
import { addUser } from "../../../services/usuariosActions";
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
  const validacion = useValidate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitForm = (data) => {
    if (data.password !== data.password2) {
      showNotification("Las contraseñas no coinciden revísalas por favor");
    } else {
      const newUser = {
        nomUser: data.nomUser,
        email: data.email,
        passWord: data.password,
        img: data.img,
      };
      const response = addUser(newUser);
      if (response) {
        showNotification("Usuario agregado, inicie sesión por favor");
        navigate("/exito");
      } else {
        showNotification("Ocurrió un error al procesar la solicitud");
      }
    }
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
                required: "el campo no debe estar vacío",
                pattern: {
                  value: validacion.nomUser,
                  message:
                    "El nombre de usuario no puede contener espacios vacíos",
                },
              })}
            />
          </div>
          {errors.nomUser ? (
            <span className="lblError">{errors.nomUser.message}</span>
          ) : (
            <></>
          )}

          <div className="form__inputContainer">
            <span className="material-symbols-outlined">mail</span>
            <input
              type="text"
              placeholder="Email"
              className="form__input"
              {...register("email", {
                required: "El campo no debe estar vacío",
                pattern: {
                  value: validacion.email,
                  message: "Ingresa un correo válido por favor",
                },
              })}
            />
          </div>
          {errors.email ? (
            <span className="lblError">{errors.email.message}</span>
          ) : (
            <></>
          )}
          <div className="password">
            <h4>Ingresa tu constraseña</h4>

            <div className="form__inputContainer">
              <span className="material-symbols-outlined">lock</span>
              <input
                type="password"
                placeholder="Contraseña"
                className="form__input"
                {...register("password", {
                  required: "El campo no debe estar vacío",
                  pattern: {
                    value: validacion.password,
                    message:
                      "La contraseña debe contener almenos una mayuscula un numero y un caracter especial",
                  },
                })}
              />
            </div>

            <div className="form__inputContainer inputPassword2">
              <span className="material-symbols-outlined">lock</span>
              <input
                type="password"
                placeholder="Confirma tu contraseña"
                className="form__input"
                {...register("password2", {
                  required: "El campo no debe estar vacío",
                })}
              />
            </div>
          </div>
          {errors.password ? (
            <span className="lblError">{errors.password.message}</span>
          ) : errors.password2 ? (
            <span className="lblError">{errors.password2.message}</span>
          ) : (
            <></>
          )}
          <div className="form__inputContainer">
            <span className="material-symbols-outlined">image</span>
            <input
              type="text"
              placeholder="URL de tu Foto"
              className="form__input inputConfirm"
              {...register("img", {
                required: "El campo no debe estar vacío",
              })}
            />
          </div>
        </div>
        {errors.img ? (
          <span className="lblError">{errors.img.message}</span>
        ) : (
          <></>
        )}

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
