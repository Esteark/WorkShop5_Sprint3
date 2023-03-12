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
<<<<<<< HEAD
      <img src={userLogin.img} className="profileImg" alt="" />
      <section className="profileInfo">
=======
      <img src={userLogin.img} className='profileImg' alt="" />
      <section>
      <section className='profileInfo'>
>>>>>>> 1b6efb98d8f71607d10666b0b065f8718d3a40e0
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
  );
};

export default Profile;
