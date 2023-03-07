import React from "react";
import { Link } from "react-router-dom";
import "./stylesRegister.scss";

const Register = () => {
  return (
    <section className="secForm secRegister">
      <h2>Regístrate e inicia sesión en tu cuenta</h2>

      <form className="form secRegisterForm">
        <div className="inputsContainer">
          <div className="form__inputContainer">
            <span className="material-symbols-outlined">person</span>
            <input type="text" placeholder="Usuario" className="form__input" />
          </div>

          <div className="form__inputContainer">
            <span class="material-symbols-outlined">mail</span>
            <input type="text" placeholder="Email" className="form__input" />
          </div>

          <div className="password">
            <h4>Confirmar constraseña</h4>

            <div className="form__inputContainer">
              <span className="material-symbols-outlined">lock</span>
              <input
                type="password"
                placeholder="Contraseña"
                className="form__input"
              />
            </div>

            <div className="form__inputContainer inputPassword2">
              <span className="material-symbols-outlined">lock</span>
              <input
                type="password"
                placeholder="Contraseña"
                className="form__input"
              />
            </div>
          </div>

          <div className="form__inputContainer">
            <span class="material-symbols-outlined">image</span>
            <input
              type="text"
              placeholder="URL de tu Foto"
              className="form__input inputConfirm"
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
