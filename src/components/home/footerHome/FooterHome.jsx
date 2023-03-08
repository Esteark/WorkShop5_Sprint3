import React from "react";
import "./stylesFooter.scss";
import { BiBookOpen } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { BiBasket } from "react-icons/bi";

const FooterHome = () => {
  return (
    <footer className="footerSec">
      <figure>
        <BiBookOpen className="icon" />
        <figcaption>
          <h4>Home</h4>
        </figcaption>
      </figure>

      <article className="secB">
        <figure className="iconCarrito">
          <BiBasket className="icon" />
        </figure>
        <div id="halfcircle"></div>
      </article>

      <figure>
        <BiSearch className="icon iconSearch" />
        <figcaption>
          <h4 className="textSearch">Buscar</h4>
        </figcaption>
      </figure>
    </footer>
  );
};

export default FooterHome;
