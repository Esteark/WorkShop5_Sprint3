import React from "react";
import "./pedidoExitoso.scss";

const PedidoExitoso = () => {
  return (
    <section className="secOrderSuccessful">
      <div className="OrderSuccessful">
        <img
          className="OrderSuccessful__icon scale-in-center"
          src="https://cdn-icons-png.flaticon.com/512/9452/9452161.png"
          alt=""
        />
        <h2 className="OrderSuccessful__h2">Tu pedido está en proceso</h2>
        <p className="OrderSuccessful__p">
          Serás notificado cuando llegue el repartidor
        </p>
      </div>

      <button className="secOrderSuccessful__button">Aceptar</button>
    </section>
  );
};

export default PedidoExitoso;
