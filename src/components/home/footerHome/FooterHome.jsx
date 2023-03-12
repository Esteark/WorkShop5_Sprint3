import React, { useContext, useEffect } from "react";
import "./stylesFooter.scss";
import { BiBookOpen } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { BiBasket } from "react-icons/bi";
import { AppContext } from "../../../router/Routers";
import { useNavigate } from "react-router-dom";

const FooterHome = () => {
  const { inCar } = useContext(AppContext);
  useEffect(() => {
    console.log(inCar);
  }, [inCar]);
  const navigate = useNavigate();

  const navigateTo = (op) => {
    switch (op) {
      case 1:
        navigate(`/car/0`);
        break;
      case 2:
        navigate("/products");
        break;
      default:
        navigate("/home");
    }
  };

  return (
    <footer className="footerSec">
      <figure
        className="footerSec__secA"
        onClick={() => {
          navigateTo(0);
        }}
      >
        <div>
          <BiBookOpen className="icon" />
          <figcaption>
            <h4>Home</h4>
          </figcaption>
        </div>
      </figure>

      <article className="footerSec__secB">
        <figure
          className="iconCarrito"
          onClick={() => {
            navigateTo(1);
          }}
        >
          <BiBasket className="icon" />
          <div
            className={`iconProductsFooter ${!inCar[0]?.id ? "hidden" : ""}`}
          >
            <p>{!inCar[0]?.id ? 0 : inCar.length}</p>
          </div>
        </figure>
        <div className="hole"></div>
      </article>

      <figure
        className="footerSec__secC"
        onClick={() => {
          navigateTo(2);
        }}
      >
        <div>
          <BiSearch className="icon iconSearch" />
          <figcaption>
            <h4 className="textSearch">Buscar</h4>
          </figcaption>
        </div>
      </figure>
    </footer>
  );
};

export default FooterHome;
