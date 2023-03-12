import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../router/Routers";
import FooterHome from "../footerHome/FooterHome";
import InfoUser from "../infoUser/InfoUser";
import SliderProducts from "../SliderProducts/SliderProducts";
import "./stylesAll.scss";
import pizza from "../../../assets/img/pizza2.png";
import { BsSearchHeart } from "react-icons/bs";

const Allproducts = () => {
  const { products, obtenerProducts } = useContext(AppContext);
  const [filter, setFilter] = useState(products);

  useEffect(() => {
    if (products.length) {
      obtenerProducts();
    }
  }, []);

  useEffect(() => {
    setFilter(products);
  }, [products]);

  const handleFilter = ({ target }) => {
    console.log(target.value);
    if (Object.entries(products).length !== 0) {
      if (target.length !== 0) {
        let array = products.filter((item) =>
          item.name.toLowerCase().includes(target.value.toLowerCase().trim())
        );
        setFilter(array);
      } else {
        setFilter(products);
      }
    }
  };
  return (
    <>
      <section className="secAllProducts">
        <InfoUser />
        <article className="searchContainer">
          <input
            type="text"
            className="secAllProducts__input"
            onChange={(e) => {
              handleFilter(e);
            }}
            placeholder="Buscar producto"
          />
          <BsSearchHeart className="seachIcon" />
        </article>
        <section className="SecProductsFilter">
          {products.length && filter.length ? (
            filter.map((item, index) => (
              <SliderProducts
                img={item.img}
                name={item.name}
                price={item.price}
                key={index}
                id={item.id}
              />
            ))
          ) : (
            <article className="pizzaNotFound">
              <figure>
                <img src={pizza} alt="" className="pizzaNotFound__img" />
              </figure>
              <h3 className="pizzaNotFound__h3">
                No encontramos ningún producto con ese nombre
              </h3>
            </article>
          )}
        </section>
      </section>

      <FooterHome />
    </>
  );
};

export default Allproducts;
