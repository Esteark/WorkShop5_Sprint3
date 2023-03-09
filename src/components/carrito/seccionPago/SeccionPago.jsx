import React from "react";
import "./seccionPago.scss";

const SeccionPago = () => {
  return (
    <section className="secFormPayment">
      <form action="" className="formPayment">
        <h3>Información de pago</h3>
        <div className="formPayment__inputContainer">
          <label htmlFor="">Nombre completo</label>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            className="formPayment__input"
          />
        </div>

        <div className="formPayment__inputContainer">
          <label htmlFor="">Número de Targeta de Crédito</label>
          <input
            type="text"
            placeholder="1234 1234 1234 1234"
            className="formPayment__input"
          />
        </div>

        <div className="formPayment__inputContainer--DateCvv">
          <div className="formPayment__inputContainer--date">
            <label htmlFor="">Fecha vencimiento</label>
            <input
              type="text"
              placeholder="MM/YY"
              className="formPayment__input--date"
            />
          </div>

          <div className="formPayment__inputContainer--cvv">
            <label htmlFor="">CVV</label>
            <input type="text" className="formPayment__input--cvv" />
          </div>
        </div>

        <div className="formPayment__inputContainer">
          <label htmlFor="">Dirección</label>
          <input
            type="text"
            placeholder="Av.morales # 123"
            className="formPayment__input"
          />
        </div>

        <button className="formPayment__button">Pagar Ahora</button>
      </form>
    </section>
  );
};

export default SeccionPago;
