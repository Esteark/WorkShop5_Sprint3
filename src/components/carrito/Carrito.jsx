import React, { useContext, useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../router/Routers";
import ProductCar from "./ProductCar/ProductCar";
import './styles.scss'

const Carrito = () => {
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0)
  const {products, inCar} = useContext(AppContext)
  const handleBack = () =>{
    navigate(-1)
  }
  const handleTotal = (price) =>{
    setTotalPrice(totalPrice => totalPrice + price)
  }
  return <section className="carContainer">
    <figure onClick={()=> handleBack()} className="backCar">
      <BiChevronLeft className="backCar__icon"/>
      <p>Volver</p>
    </figure>
   
      { inCar[0]?.id ? 
      <>
      <section className="carProducts">
        {inCar.map((elem, index)=>{
          const product = products.find((item)=> item.id == elem.id) 
          const currentPrice = (product.price*elem.cantidad)
        return <ProductCar 
        name={product.name} 
        price={currentPrice} 
        img={product.img[0]}
        handleTotal={handleTotal}
        total={totalPrice}
        quantity={elem.cantidad}
        key={index} />
      }) }
      </section>
    <button className="payButton">Pagar {totalPrice} </button>
      </>
    : <></>}
  </section>;
};

export default Carrito;
