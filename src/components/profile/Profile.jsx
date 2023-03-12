import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../router/Routers";
import { IoHeart } from "react-icons/io5";
import "./styles.scss";
import { logoutUser } from "../../services/infoLocalUser";

const Profile = () => {
  const { userLogin } = useContext(AppContext);
  console.log(userLogin);
  const navigate = useNavigate();
  const logout = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <div className="bgModal">
      <header
        onClick={() => navigate(-1)}
        className="formPayment__header backProfile"
      >
        <span class="material-symbols-outlined arrow">arrow_back_ios</span>
        <p>Volver</p>
      </header>
      <img src={userLogin.img} className="profileImg" alt="" />
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
    </div>
  );
};

export default Profile;
