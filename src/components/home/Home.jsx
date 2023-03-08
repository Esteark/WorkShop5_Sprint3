import React, { createContext, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../router/Routers";
import { getOfertas } from "../../services/ofertasActions";
import InfoUser from "./infoUser/InfoUser";
import SliderOfertas from "./sliderOfertas/SliderOfertas";
import SliderProductos from "./SliderProducts/SliderProducts";
import { useNavigate } from "react-router-dom";
import "./stylesHome.scss";
import FooterHome from "./footerHome/FooterHome";

export const HomeContext = createContext();

const Home = () => {
  const { products, userLogin, validateUserSesion, inCar } = useContext(AppContext);
  const [ofertas, setOfertas] = useState([]);
  const getInOfertas = async () => {
    const ofert = await getOfertas();
    setOfertas(ofert);
  };

  const navigate = useNavigate();

  useEffect(() => {
    getInOfertas();
    validateUserSesion();
    if (Object.entries(userLogin).length == 0) {
      navigate("/");
    }
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
        <section className="SliderSecOfertas">
          <SliderOfertas />
        </section>
        <section className="SecProductsSlider">
          {products.length !== 0 ? (
            products.map((item, index) => (
              <SliderProductos
                img={item.img}
                name={item.name}
                price={item.price}
                key={index}
                id={item.id}
              />
            ))
          ) : (
            <></>
          )}
        </section>
      </main>
      <FooterHome />
    </HomeContext.Provider>
  );
};

export default Home;
