import React from "react";
import "./stylesOferta.scss";

const Oferta = ({ info = {} }) => {
  return (
    <article className="SecOferta">
      <h3 className="SecOferta__nameCupon">{info.nameOferta}</h3>
      <div className="SecOferta__precio">
        <h2>{info.porcentaje}%</h2>
        <h2>OFF</h2>
      </div>
    </article>
  );
};

export default Oferta;
