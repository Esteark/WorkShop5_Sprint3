import React, { useContext, useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../router/Routers";
import ProductCar from "./ProductCar/ProductCar";
import SeccionPago from "./seccionPago/SeccionPago";
import "./styles.scss";

const Carrito = () => {
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);
  const [confirmPayment, setconfirmPayment] = useState(false);
  const { products, inCar, formatterPeso } = useContext(AppContext);
  const handleBack = () => {
    navigate(-1);
  };
  const handleTotal = (price) => {
    setTotalPrice((totalPrice) => totalPrice + price);
  };
  const handleFormPayment = () => {
    setconfirmPayment(!confirmPayment);
  };
  return (
    <section className="carContainer">
      {confirmPayment ? (
        <header
          className="formPayment__header"
          onClick={() => handleFormPayment()}
        >
          <span class="material-symbols-outlined arrow">arrow_back_ios</span>
          <p>Carrito de compras</p>
        </header>
      ) : (
        <figure onClick={() => handleBack()} className="backCar">
          <BiChevronLeft className="backCar__icon" />
          <p>Volver</p>
        </figure>
      )}

      {inCar[0]?.id ? (
        <>
          <section className={`carProducts ${confirmPayment ? "" : "height"}`}>
            {inCar.map((elem, index) => {
              const product = products.find((item) => item.id == elem.id);
              const currentPrice = product.price * elem.cantidad;
              return (
                <ProductCar
                  name={product.name}
                  price={currentPrice}
                  img={product.img[0]}
                  handleTotal={handleTotal}
                  total={totalPrice}
                  quantity={elem.cantidad}
                  key={index}
                />
              );
            })}
          </section>
          {confirmPayment ? (
            <SeccionPago />
          ) : (
            <button
              className="payButton formPayment__button"
              onClick={() => handleFormPayment()}
            >
              Pagar {totalPrice ? formatterPeso.format(totalPrice) : "$ 0"}{" "}
            </button>
          )}
        </>
      ) : (
        <></>
      )}
    </section>
  );
};

export default Carrito;
