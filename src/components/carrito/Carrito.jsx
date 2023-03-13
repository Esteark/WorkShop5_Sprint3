import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { AppContext } from "../../router/Routers";
import ProductCar from "./ProductCar/ProductCar";
import SeccionPago from "./seccionPago/SeccionPago";
import "./styles.scss";
import pizza from "../../assets/img/pizza2.png";

const Carrito = () => {
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);
  const [confirmPayment, setconfirmPayment] = useState(false);
  const { products, inCar, formatterPeso, obtenerProducts } = useContext(AppContext);
  const [back, setBack] = useState(false)
  

  // const [product, setProduct] = useState([{}]);

  const { pago } = useParams();
  const handleBack = () => {
    navigate(-1);
  };
  const handleTotal = (price) => {
    setTotalPrice((totalPrice) => totalPrice + price);
  };

  

  useEffect(() => {
    if(Number(pago) === 1){
      setconfirmPayment(true) 
      setBack(true)
    } 
    if (products.length) {
      obtenerProducts();
    }
  }, []);

  
  const handleFormPayment = () => {
    if(back){
     navigate(-1) 
    }else{
      setconfirmPayment(!confirmPayment);
    }
  };

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
        <section
          className={`productFormContainer ${
            confirmPayment ? "directionRow" : ""
          }`}
        >
          {products.length ? (
            <section
              className={`carProducts ${
                confirmPayment ? "heightWithForm" : "height"
              }`}
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
        </section>
      ) : (
        <>
          <article className="pizzaNotFound">
            <figure>
              <img src={pizza} alt="" className="pizzaNotFound__img" />
            </figure>
            <h3>
              No has elegido productos,{" "}
              <Link to={"/Home"} className="pizzaNotFound__link">
                dale click acá para volver el menú
              </Link>
            </h3>
          </article>
        </>
      )}
    </section>
  );
};

export default Carrito;
