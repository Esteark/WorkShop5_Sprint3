import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../router/Routers";
import ProductCar from "../carrito/ProductCar/ProductCar";
import "./stylesFavorites.scss";

const Favorites = () => {
  const { favorites, setFavorites, products } = useContext(AppContext);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  console.log(products, favorites);
  return (
    <div>
      <section className="carContainerfav">
        <header
          onClick={() => handleBack()}
          className="formPayment__header"
          style={{ cursor: "pointer" }}
        >
          <span className="material-symbols-outlined arrow">
            arrow_back_ios
          </span>
          <p>Volver</p>
        </header>

        {favorites.length ? (
          <section className="carProductsFav">
            {favorites.map((elem, index) => {
              const product = products.find((item) => item.id == elem);
              console.log(product);
              return (
                <ProductCar
                  name={product.name}
                  price={product.price}
                  img={product.img[0]}
                  setFavorites={setFavorites}
                  key={index}
                  id={product.id}
                />
              );
            })}
          </section>
        ) : (
          <>
            <section className="pizzaNotFound notFavorites">
              <img src="https://img.freepik.com/free-icon/pizza_318-531095.jpg" alt="" />
              <h3>Aún no tienes tu menú de favoritos, <Link to='/home'>Empiza a buscar tu comida favorita ahora</Link></h3>
            </section>
          </>
        )}
      </section>
    </div>
  );
};

export default Favorites;
