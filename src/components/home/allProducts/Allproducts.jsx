import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../router/Routers";
import FooterHome from "../footerHome/FooterHome";
import InfoUser from "../infoUser/InfoUser";
import SliderProducts from "../SliderProducts/SliderProducts";
import "./stylesAll.scss";
import pizza from "../../../assets/img/pizza2.png";

const Allproducts = () => {
  const { products } = useContext(AppContext);
  const [filter, setFilter] = useState(products);

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  const handleFilter = ({ target }) => {
    console.log(target.value);
    if (Object.entries(products).length !== 0) {
      if (target.length !== 0) {
        let array = products.filter((item) =>
          item.name.toLowerCase().startsWith(target.value.toLowerCase().trim())
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
        <article>
          <input
            type="text"
            className="secAllProducts__input"
            onChange={(e) => {
              handleFilter(e);
            }}
            placeholder="Buscar producto"
          />
        </article>
        <section className="SecProductsFilter">
          {filter.length !== 0 ? (
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
