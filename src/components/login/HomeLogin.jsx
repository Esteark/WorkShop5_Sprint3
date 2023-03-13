import React, { useEffect, useState, useContext } from "react";
import "./login.scss";
import icon from "../../assets/img/pizza.png";
import { useForm } from "react-hook-form";
import { setInfoUser } from "../../services/infoLocalUser";
import { AppContext } from "../../router/Routers";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { showNotification } from "../../services/Notify";

const HomeLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    userLogin,
    setUserLogin,
    validateUserSesion,
    validateUsers,
    getUsuarios,
  } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    getUsuarios();
    validateUserSesion();
  }, []);

  useEffect(() => {
    if (userLogin.hasOwnProperty("nomUser")) {
      navigate("/home");
    }
  }, [userLogin]);

  const onSubmit = (value) => {
    console.log(value);
    let validateUser = false;
    let userLogin = {};
    validateUsers.forEach((user) => {
      console.log(user);
      if (
        value.userName.trim() === user.nomUser &&
        value.password === user.passWord
      ) {
        console.log(user);
        validateUser = true;
        userLogin = user;
        setInfoUser(user);
      } else if (
        value.userName.trim() === user.email &&
        value.password === user.passWord
      ) {
        validateUser = true;
        userLogin = user;
        setInfoUser(user);
      }
    });
    console.log(validateUser);
    if (validateUser) {
      setInfoUser(userLogin);
      setUserLogin(userLogin);
      navigate("/home");
      toast("Bienvenido");
    } else {
      showNotification("usuario o contraseña incorrecta");
    }
  };

  return (
    <section className="secForm">
      <div className="logoANDicon">
        <img src={icon} alt="" className="icon" />
        <h2 className="logo">PiSassScript</h2>
      </div>

      <div className="form__text">
        <h2>Iniciar sesión en tu cuenta</h2>
        <p>
          Disfruta de la mejor pizza creada para las personas amantes del
          código.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="form__inputContainer">
          <span className="material-symbols-outlined">person</span>
          <input
            type="text"
            placeholder="Usuario"
            className="form__input"
            {...register("userName", {
              required: "Ingrese un nombre o email valido",
            })}
          />
        </div>
        {errors.userName ? (
          <>
            <span className="lblErrorLogin">No dejes este campo vacío</span>
          </>
        ) : (
          <></>
        )}

        <div className="form__inputContainer">
          <span className="material-symbols-outlined">lock</span>
          <input
            type="password"
            placeholder="Contraseña"
            className="form__input"
            {...register("password", { required: "constraseña incorrecta" })}
          />
        </div>
        {errors.password ? (
          <>
            <span className="lblErrorLogin">No dejes este campo vacío</span>
          </>
        ) : (
          <></>
        )}

        <button className="form__button">Iniciar sesión</button>
        <a href="" className="form__password">
          Restablecer contraseña
        </a>
      </form>

      <div className="form__register">
        <p className="registerP">¿No tienes una cuenta?</p>
        <Link to="/register" className="registerA">
          Regístrate aquí
        </Link>
      </div>
    </section>
  );
};

export default HomeLogin;
