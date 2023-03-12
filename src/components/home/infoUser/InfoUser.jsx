import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../router/Routers";
import { IoHeart } from "react-icons/io5";
import "./stylesUser.scss";

const InfoUser = () => {
  const { userLogin } = useContext(AppContext);
  const [heart, setHeart] = useState(false)
  const navigate = useNavigate()
  const handleModal = () =>{
    navigate('/profile')
  }
  return (
   
    <section className="SecUser">
      <article className="SecUser__article">
        <h2>Home</h2>
        <p>
          ¡Que bueno verte{" "}
          <span className="spanNomUser">
            {userLogin.hasOwnProperty("nomUser") ? userLogin.nomUser : "User"}!
          </span>
        </p>
      </article>
      <figure onMouseEnter={()=>setHeart(true)} onMouseLeave={()=>setHeart(false)} className="SecUser__figure" onClick={handleModal}>
        <img
          src={userLogin.img}
          alt=""
        />
        <IoHeart className={`favoriteUser ${!heart ? 'visibility' : ''}`}/>
      </figure>
      
    </section>
   
  );
};

export default InfoUser;
