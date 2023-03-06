import React from "react";
import { useNavigate } from "react-router-dom";
import "./stylesSlider.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const SliderProducts = ({ img, name, price, id }) => {
  const navigate = useNavigate();
  const clickProduct = () => {
    console.log(id);
    navigate(`/producto/${id}`);
  };
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
            backgroundImage: `linear-gradient(0deg, rgba(0,0,0,1) 2%, rgba(32,32,32,0) 38%), url(${item}) `,
            backgroundSize: "cover",
          }}
        >
          <p onClick={clickProduct}>{name}</p>
          <button onClick={clickProduct}>{price}</button>
        </figure>
      ))}
    </Carousel>
  );
};

export default SliderProducts;
