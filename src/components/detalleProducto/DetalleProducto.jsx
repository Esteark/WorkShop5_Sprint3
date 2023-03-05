import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './styles.scss'
import { BiChevronLeft } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { RiShoppingBasket2Line } from "react-icons/ri";

const users = [
  {
    "id": 0,
    "nomUser": "Angie",
    "email": "angielamaslinda@gmail.com",
    "passWord": "123",
    "img": "https://p4.wallpaperbetter.com/wallpaper/778/599/670/women-model-brunette-long-hair-wallpaper-preview.jpg"
  }
]
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

const DetalleProducto = () => {
  const [counter, setcounter] = useState(0)
  return (
    <main className="container">
      <section className="secProduct">
        <figure className="">
          <figure className="back__home">
            <BiChevronLeft className="icon_back" />
            <h3>Todas las pizzas</h3>
          </figure>
        </figure>
        <Carousel
          emulateTouch={true}
          showArrows={false}
          showStatus={false}
          showIndicators={true}
          showThumbs={false}
          width={"100%"}
          infiniteLoop={true}
          dynamicHeight={false}
          className='carousel'
        >
          {product ? (
            product.img.map((item, index) => (
              <figure className="figure__carousel"
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0,0,0,1) 2%, rgba(32,32,32,0) 38%), url(${item}) `,
                  backgroundSize: 'cover'
                }} key={index}>
              </figure>
            ))
          ) : (
            <></>
          )}
        </Carousel>

        <section className="product">
          <h1 className="product__name">{product.name}</h1>
          <div className="product__items">
            <figure className="product__price">${product.price} COP</figure>
            <figure className="product__review"> <AiFillStar />{product.comments.length < 0 ? 'Sin reviews' : (product.comments.length > 1 ? `${product.comments.length} Reviews` : `${product.comments.length} Review`)} </figure>
          </div>
          <article>
            <h3>Descripción</h3>
            <p>{product.description}</p>
          </article>
          <section className="comments">
            {product.comments.map((comment, ind)=>{
              const user = users.filter((user)=> user.id == comment.idUser)
              console.log(user)
              return <>
               <article key={ind}>
            <figure className="comments__img">

            </figure>
            <div>
              <h2>{user.name}</h2>
              <figure></figure>
              <p></p>
            </div>
            </article>
              </>
            })}
          </section>
        </section>
      </section>
      <footer className="product__footer">
        <figure className="counter">
          <p className="plus" onClick={()=> setcounter(counter=> counter > 0 ? counter-1 : counter)}>-</p>
          <h4 className="count">{counter}</h4>
          <p className="minus" onClick={()=> setcounter(counter=> counter+1)}>+</p>
        </figure>
        <figure className="iconCar">
            <span className="inBasket"></span>
            <RiShoppingBasket2Line className="basket"/>
        </figure>
        <button className="paybtn">Pagar</button>
      </footer>
    </main>
  );
};

export default DetalleProducto;
