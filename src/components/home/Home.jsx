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
  const { products, userLogin, validateUserSesion, inCar, obtenerProducts } =
    useContext(AppContext);
  const [ofertas, setOfertas] = useState([]);
  const [productFilter, setProductFilter] = useState(products.slice(0, 6));
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
    setProductFilter(products.slice(0, 6));
  }, [products]);

  return (
    <HomeContext.Provider value={{ ofertas, products }}>
      <main className="SecMainHome">
        <InfoUser />
        <section className="textHeaderMain">
          <h3>Comidas disponibles</h3>
          <Link className="linkProductsHeader" to={"/products"}>
            Ver todas
          </Link>
        </section>
        <section className="SliderSecOfertas">
          <SliderOfertas />
        </section>
        <section className="SecProductsSlider">
          {products.length && productFilter.length ? (
            productFilter.map((item, index) => (
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
