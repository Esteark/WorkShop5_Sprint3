import React, { createContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getOfertas } from "../../services/ofertasActions";
import { getProducts } from "../../services/productsActions";
import InfoUser from "./infoUser/InfoUser";
import SliderOfertas from "./sliderOfertas/SliderOfertas";
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

  return (
    <HomeContext.Provider value={{ ofertas }}>
      <main className="SecMainHome">
        <InfoUser />
        <section className="textHeaderMain">
          <h3>Pizzas disponibles</h3>
          <Link className="linkProductsHeader" to={"/"}>
            Ver todas
          </Link>
        </section>
        <SliderOfertas />
      </main>
    </HomeContext.Provider>
  );
};

export default Home;
