import React, { useState, useContext, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./styles.scss";
import { BiChevronLeft } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { AppContext } from "../../router/Routers";
import { useNavigate, useParams } from "react-router-dom";
import { setCarrito } from "../../services/infoLocalUser";

const users = [
  {
    id: 0,
    nomUser: "Angie",
    email: "angielamaslinda@gmail.com",
    passWord: "123",
    img: "https://p4.wallpaperbetter.com/wallpaper/778/599/670/women-model-brunette-long-hair-wallpaper-preview.jpg",
  },
];

const DetalleProducto = () => {
  const { idProduct } = useParams();
  const navigate = useNavigate();
  const { products, inCar, setInCar } = useContext(AppContext);
  const [counter, setcounter] = useState(0);
  const [product, setProduct] = useState({});
  useEffect(() => {
    const data = products.filter((item) => item.id == idProduct);
    setProduct(data[0]);
  }, [products]);

  useEffect(() => {
    inCar.forEach((element) => {
      if (element.id === idProduct) {
        setcounter(element.cantidad);
      }
    });
  }, []);

  const backHome = () => {
    navigate(-1);
  };
  const handleProduct = (opt) => {
    if (opt === "Add") {
      const newProduct = {
        id: idProduct,
        cantidad: counter + 1,
      };
      let findProduct = false;
      let newCar = inCar.map((elem) => {
        if (elem.id === idProduct || !elem.id) {
          findProduct = true;
          return newProduct;
        } else {
          return elem;
        }
      });
      if (!findProduct) {
        newCar = [...newCar, newProduct];
      }
      setInCar(newCar);
      setcounter((counter) => counter + 1);
      setCarrito(newCar);
    } else if (opt === "Minus") {
      if (counter > 0) {
        const newProduct = {
          id: idProduct,
          cantidad: counter - 1,
        };
        let newCar = inCar.map((elem) => {
          if (elem.id === idProduct || !elem.id) {
            return newProduct;
          } else {
            return elem;
          }
        });
        if (newProduct.cantidad == 0) {
          newCar = newCar.filter((elem) => elem.id !== newProduct.id);
        }
        if (newCar.length == 0) {
          newCar = [{}];
        }
        setInCar(newCar);
        setcounter((counter) => counter - 1);
        setCarrito(newCar);
      }
    }
  };
  const handleCar = (op) => {
    if (op === 0) {
      navigate(`/car/0`);
    }else{
      navigate(`/car/1`);
    }
  };
  return (
    <main className="container">
      <section className="secProduct">
        <figure className="">
          <figure onClick={() => backHome()} className="back__home">
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
          className="carouseld"
        >
          {product?.img ? (
            product.img.map((item, index) => (
              <figure
                key={index}
                className="figure__carousel"
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0,0,0,1) 2%, rgba(32,32,32,0) 38%), url(${item}) `,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></figure>
            ))
          ) : (
            <></>
          )}
        </Carousel>

        {product?.img ? (
          <>
            <section className="product">
              <h1 className="product__name">{product.name}</h1>
              <div className="product__items">
                <figure className="product__price">${product.price} COP</figure>
                <figure className="product__review">
                  {" "}
                  <AiFillStar />
                  {product.comments.length < 0
                    ? "Sin reviews"
                    : product.comments.length > 1
                    ? `${product.comments.length} Reviews`
                    : `${product.comments.length} Review`}{" "}
                </figure>
              </div>
              <article>
                <h3>Descripción</h3>
                <p>{product.description}</p>
              </article>
              <section className="comments">
                {/* {product.comments.map((comment, ind) => {
                  const user = users.filter((user) => user.id == comment.idUser)
                  console.log(user)
                  return
                  <article key={ind}>
                    <figure className="comments__img">

                    </figure>
                    <div>
                      <h2>{user.name}</h2>
                      <figure></figure>
                      <p></p>
                    </div>
                  </article>
                })} */}
              </section>
            </section>
          </>
        ) : (
          <></>
        )}
      </section>
      <footer className="product__footer">
        <figure className="counter">
          <p className="plus" onClick={() => handleProduct("Minus")}>
            -
          </p>
          <h4 className="count">{counter}</h4>
          <p className="minus" onClick={() => handleProduct("Add")}>
            +
          </p>
        </figure>
        <figure
          onClick={() => {
            handleCar(0);
          }}
          className="iconCar"
        >
          {inCar[0]?.id ? <span className="inBasket">{inCar.length}</span> : ""}
          <RiShoppingBasket2Line className="basket" />
        </figure>
        <button
          className="paybtn"
          onClick={() => {
            handleCar(1);
          }}
        >
          Pagar
        </button>
      </footer>
    </main>
  );
};

export default DetalleProducto;
