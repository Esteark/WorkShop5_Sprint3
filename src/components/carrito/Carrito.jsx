import React, { useContext, useEffect, useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../router/Routers";
import ProductCar from "./ProductCar/ProductCar";
import SeccionPago from "./seccionPago/SeccionPago";
import "./styles.scss";

const Carrito = () => {
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);
  const [confirmPayment, setconfirmPayment] = useState(false);
  const { products, inCar, formatterPeso, obtenerProducts } =
    useContext(AppContext);

  // const [product, setProduct] = useState([{}]);

  const { pago } = useParams();
  const handleBack = () => {
    navigate(-1);
  };
  const handleTotal = (price) => {
    setTotalPrice((totalPrice) => totalPrice + price);
  };
  const handleFormPayment = () => {
    setconfirmPayment(!confirmPayment);
  };

  useEffect(() => {
    Number(pago) === 1 ? setconfirmPayment(true) : setconfirmPayment(false);
    if (products.length) {
      obtenerProducts();
    }
  }, []);

  useEffect(() => {
    console.log(products);
    console.log(inCar);
  }, [products]);

  return (
    <section className="carContainer">
      {confirmPayment ? (
        <header
          className="formPayment__header"
          onClick={() => handleFormPayment()}
        >
          <span className="material-symbols-outlined arrow">
            arrow_back_ios
          </span>
          <p>Carrito de compras</p>
        </header>
      ) : (
        <header onClick={() => handleBack()} className="formPayment__header">
          <span className="material-symbols-outlined arrow">
            arrow_back_ios
          </span>
          <p>Volver</p>
        </header>
      )}

      {inCar[0]?.id ? (
        <>
          {products.length ? (
            <section
              className={`carProducts ${confirmPayment ? "" : "height"}`}
            >
              {inCar.map((elem, index) => {
                console.log(products);
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
                    id={product.id}
                  />
                );
              })}
            </section>
          ) : (
            <></>
          )}
          {confirmPayment ? (
            <SeccionPago />
          ) : (
            <button
              className="payButton formPayment__button"
              onClick={() => handleFormPayment()}
            >
              Pagar {totalPrice ? formatterPeso.format(totalPrice) : "$ 0"}
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
