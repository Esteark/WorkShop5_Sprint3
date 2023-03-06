import React, { createContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getOfertas } from "../../services/ofertasActions";
import { getProducts } from "../../services/productsActions";
import InfoUser from "./infoUser/InfoUser";
import SliderOfertas from "./sliderOfertas/SliderOfertas";
import SliderProductos from "./SliderProducts/SliderProducts";
import "./stylesHome.scss";

export const HomeContext = createContext();

const Home = () => {
  const [ofertas, setOfertas] = useState([]);
  const getInOfertas = async () => {
    const ofert = await getOfertas();
    setOfertas(ofert);
  };
  const [products, setProductos] = useState([]);
  const obtenerProducts = async () => {
    const productos = await getProducts();
    setProductos(productos);
  };
  useEffect(() => {
    getInOfertas();
    obtenerProducts();
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <HomeContext.Provider value={{ ofertas, products }}>
      <main className="SecMainHome">
        <InfoUser />
        <section className="textHeaderMain">
          <h3>Pizzas disponibles</h3>
          <Link className="linkProductsHeader" to={"/"}>
            Ver todas
          </Link>
        </section>
        <SliderOfertas />
        <section>
          {products.length !== 0 ? (
            products.map((item, index) => (
              <SliderProductos
                img={item.img}
                name={item.name}
                price={item.price}
                key={item.id}
              />
            ))
          ) : (
            <></>
          )}
        </section>
      </main>
    </HomeContext.Provider>
  );
};

export default Home;
