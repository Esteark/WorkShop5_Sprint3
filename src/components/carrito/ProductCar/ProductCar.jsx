import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../router/Routers";
import "./styles.scss";
import { IoHeart } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FaRegTimesCircle } from "react-icons/fa";
import { setCarrito, setLocalFavorites } from "../../../services/infoLocalUser";
import Swal from "sweetalert2";

const ProductCar = ({ name, price, quantity, img, handleTotal, total, id }) => {
  const { formatterPeso, favorites, setFavorites, inCar, setInCar } =
    useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (quantity) {
      handleTotal(total + price);
    }
  }, [inCar]);

  const handleDelete = () => {
    if (quantity) {
      Swal.fire({
        title: "¿Estás seguro de eliminar este producto del carrito?",
        showCancelButton: true,
        confirmButtonColor: "#00b000",
        cancelButtonColor: "#fe164e",
        confirmButtonText: "Eliminar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          const newCar = inCar.filter((elem) => Number(elem.id) !== Number(id));
          console.log(newCar);
          setInCar(newCar);
          setCarrito(newCar);
        }
      });
    } else {
      Swal.fire({
        title: "¿Estás seguro de quitar este producto de tus favoritos?",
        showCancelButton: true,
        confirmButtonColor: "#00b000",
        cancelButtonColor: "#fe164e",
        confirmButtonText: "Eliminar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          const newFav = favorites.filter((elem) => elem !== id);
          setFavorites(newFav);
          setLocalFavorites(newFav);
        }
      });
    }
  };

  return (
    <article className="productCar">
      <figure
        onClick={() => navigate(`/producto/${id}`)}
        className="productCar__img"
        style={{
          background: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></figure>
      <div className="productCar__items">
        <div className="productCar__head">
          <h2
            onClick={() => navigate(`/producto/${id}`)}
            className="productCar__name"
          >
            {name ? name : ""}
          </h2>
          <FaRegTimesCircle
            style={{ color: "#fe164e" }}
            onClick={handleDelete}
          />
        </div>
        <div className="productCar__items-values">
          <p className="productCar__itemscantidad">
            {quantity ? (
              `x${quantity}`
            ) : (
              <IoHeart style={{ color: "#fe164e" }} />
            )}
          </p>
          <p className="productCar__itemsprecio">
            {price ? formatterPeso.format(price) : "$ 0"}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ProductCar;
