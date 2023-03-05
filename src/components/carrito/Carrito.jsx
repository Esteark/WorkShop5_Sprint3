import React from "react";
import { BiChevronLeft } from "react-icons/bi";
import ProductCar from "./ProductCar/ProductCar";
import './styles.scss'
const product = {
  "id": 0,
  "type": 0,
  "name": "Pizza a la carlo",
  "price": 15000,
  "reviews": 3,
  "img": [
    "https://cdn.colombia.com/gastronomia/2011/08/25/pizza-margarita-3684.jpg",
    "https://www.saborusa.com/ni/wp-content/uploads/sites/19/2019/11/Animate-a-disfrutar-una-deliciosa-pizza-de-salchicha-Foto-destacada.png",
    "https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2021/03/30/6063031b90a87.r_d.1083-871-0.jpeg"
  ],
  "comments": [
    {
      "idUser": 0,
      "comment": "Me parecio una pizza una nota",
      "starts": 5
    }
  ],
  "description": "Esponjosos bordes rellenos de queso, con las más frescas verduras para condimentar la base de extraqueso que rellena esta gran pizza"
}
const Carrito = () => {
  return <section className="carContainer">
    <figure className="backCar">
      <BiChevronLeft className="backCar__icon"/>
      <p>Volver</p>
    </figure>
    <section className="carProducts">
    <ProductCar 
    name={product.name} 
    price={product.price} 
    img={product.img[0]}
    quantity="x2"/>
    </section>
  </section>;
};

export default Carrito;
