import React, { useContext } from "react";
import { HomeContext } from "../Home";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Oferta from "../oferta/Oferta";

const SliderOfertas = () => {
  const { ofertas } = useContext(HomeContext);

  return (
    <section className="SecOfertas">
      {ofertas.length !== 0 ? (
        <Carousel
          emulateTouch={true}
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          centerMode={true}
          infiniteLoop={true}
        >
          {ofertas.map((item, index) => (
            <Oferta key={index} info={item} />
          ))}
        </Carousel>
      ) : (
        <></>
      )}
    </section>
  );
};

export default SliderOfertas;
