import React from "react";
import "./login.scss";
import icon from "../../assets/img/pizza.png";

const HomeLogin = () => {
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

      <form action="" className="form">
        <div className="form__inputContainer">
          <span class="material-symbols-outlined">person</span>
          <input type="text" placeholder="Usuario" className="form__input" />
        </div>

        <div className="form__inputContainer">
          <span class="material-symbols-outlined">lock</span>
          <input type="text" placeholder="Contraseña" className="form__input" />
        </div>

        <button className="form__button">Iniciar sesión</button>
        <a href="" className="form__password">
          Restablecer contraseña
        </a>
      </form>

      <div className="form__register">
        <p className="registerP">¿No tienes una cuenta?</p>
        <a href="" className="registerA">
          Regístrate aquí
        </a>
      </div>
    </section>
  );
};

export default HomeLogin;
