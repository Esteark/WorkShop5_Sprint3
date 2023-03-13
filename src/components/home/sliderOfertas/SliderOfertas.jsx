import React, { useContext, useEffect, useState } from "react";
import { HomeContext } from "../Home";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Oferta from "../oferta/Oferta";

const SliderOfertas = () => {
  const { ofertas } = useContext(HomeContext);
  //Estado para controlar tamaño de la ventana
  const [windowSize, setWindowSize] = useState([window.innerWidth]);

  const [sizeSlider, setSizeSlider] = useState();
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
      if (window.innerWidth >= 768) {
        setSizeSlider(true);
      } else {
        setSizeSlider(false);
      }
    };

    window.addEventListener("resize", handleWindowResize);
    if (window.innerWidth >= 768) {
      setSizeSlider(true);
    }

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  useEffect(() => {
    console.log(ofertas);
  }, [ofertas]);

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
          centerSlidePercentage={sizeSlider ? 25 : 70}
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
