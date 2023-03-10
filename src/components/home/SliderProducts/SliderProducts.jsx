import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./stylesSlider.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { AppContext } from "../../../router/Routers";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";

const SliderProducts = ({ img, name, price, id }) => {
  const [cantidad, setCantidad] = useState(0);

  const navigate = useNavigate();
  const clickProduct = () => {
    navigate(`/producto/${id}`);
  };

  const { inCar } = useContext(AppContext);

  const { formatterPeso } = useContext(AppContext);

  const cantidadCarrito = () => {
  
    inCar.forEach((item, index) => {
      if (Number(item.id) === Number(id)) {
        setCantidad(item.cantidad)
      }
    });
  };
  useEffect(() => {
   console.log(cantidad)
  }, [cantidad])
  
  useEffect(() => {
    cantidadCarrito();
  }, [inCar]);

  return (
    <Carousel
      emulateTouch={true}
      showArrows={false}
      showStatus={false}
      showIndicators={true}
      showThumbs={false}
      width={"100%"}
      infiniteLoop={true}
    >
      {img.map((item, index) => (
        <figure
          className="SecFigureProducts"
          key={index}
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0,0,0,1) 23%, rgba(32,32,32,0.08175770308123254) 60%), url(${item}) `,
            backgroundSize: "cover",
          }}
        >
           <div className="SecIcons">
            <figure className={`iconCarrito ${cantidad ? '' : 'visibility'}`}>
              <IoBagCheckOutline className="icon" />
              <div
                className={`iconProductsFooter ${
                  cantidad == 0 ? "hidden" : ""
                }`}
              >
                <p>{cantidad}</p>
              </div>
            </figure>
            <figure className="iconCarrito">
              <IoHeart className="icon" />
            </figure>
          </div> 
          <div>
            <p onClick={clickProduct}>{name}</p>
            <button onClick={clickProduct}>
              {price ? `${formatterPeso.format(price)} K COP` : 0}
            </button>
          </div>
        </figure>
      ))}
    </Carousel>
  );
};

export default SliderProducts;
