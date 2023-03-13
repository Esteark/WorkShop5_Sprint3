import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../router/Routers";
import { IoHeart } from "react-icons/io5";
import "./styles.scss";
import {
  clearCarrito,
  clearfavorites,
  logoutUser,
} from "../../services/infoLocalUser";
import Swal from "sweetalert2";

const Profile = () => {
  const { userLogin, setInCar, setFavorites } = useContext(AppContext);
  console.log(userLogin);
  const navigate = useNavigate();
  const logout = () => {
    Swal.fire({
      title: `Hola, ${userLogin.nomUser}`,
      text: "Te encuentras completamente seguro de querer cerrar la sesión",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#00b000",
      cancelButtonColor: "#fe164e",
      confirmButtonText: "Si, quiero salir",
      cancelButtonText: "No, cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        logoutUser();
        setInCar([{}]);
        setFavorites([]);
        clearCarrito();
        clearfavorites();
        navigate("/");
        Swal.fire(
          "Adiós 😥",
          "Esperamos volver a verte pronto en PizzaScript",
          "success"
        );
      }
    });
  };

  return (
    <section>
      <header
        onClick={() => navigate(-1)}
        className="formPayment__header backProfile"
        style={{ cursor: "pointer" }}
      >
        <span className="material-symbols-outlined arrow">arrow_back_ios</span>
        <p>Volver</p>
      </header>
      <div className="bgModal">
        <img src={userLogin.img} className="profileImg" alt="" />
        <section>
          <section className="profileInfo">
            <h1>{userLogin.nomUser}</h1>
            <h4>{userLogin.email}</h4>
          </section>
          <div className="profileButtons">
            <button onClick={() => navigate("/favorites")}>
              Favoritos <IoHeart />
            </button>
            <button onClick={logout}>Cerrar Sesión</button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Profile;
