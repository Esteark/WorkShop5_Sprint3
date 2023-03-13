import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import "./seccionPago.scss";
import Swal from "sweetalert2";
import useValidate from "../../../hooks/useValidate";
import { AppContext } from "../../../router/Routers";
import { addCompra } from "../../../services/comprasActions";
import { useNavigate } from "react-router-dom";
import { clearCarrito } from "../../../services/infoLocalUser";

const SeccionPago = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { inCar, setInCar } = useContext(AppContext);
  const navigate = useNavigate();

  //Iniciamos el hook personalido
  const validacion = useValidate();

  let slash = false;
  const handleDate = ({ target }) => {
    console.log(target.value.split("").length);
    if (target.value.split("").length == 2 && !slash) {
      target.value = target.value + "/";
      slash = true;
    } else if (target.value.split("").length == 1) {
      slash = false;
    }
  };
  const onSubmitForm = (data) => {
    const newCompra = {
      nomUser: data.nomUser,
      address: data.address,
      products: [...inCar],
    };
    Swal.fire({
      title: "Hola",
      text: "Te encuentras completamente seguro de realizar la compra",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#00b000",
      cancelButtonColor: "#fe164e",
      confirmButtonText: "Si, comprar ahora",
      cancelButtonText: "No, cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const response = addCompra(newCompra);
        if (response) {
          navigate("/exito");
          clearCarrito();
          setInCar([{}]);

          Swal.fire(
            "Compra realizada",
            "En breves momentos recibirás la confirmación",
            "success"
          );
        } else {
          Swal.fire(
            "Ups",
            "Ocurrió un error al intentar procesar la solicitud",
            "error"
          );
        }
      }
    });
  };

  return (
    <section className="secFormPayment">
      <form onSubmit={handleSubmit(onSubmitForm)} className="formPayment">
        <h3>Información de pago</h3>
        <div className="formPayment__inputContainer">
          <label htmlFor="">Nombre completo</label>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            className="formPayment__input"
            {...register("nomUser", {
              required: "el campo no debe estar vacío",
            })}
          />
        </div>
        {errors.nomUser ? (
          <span className="lblErrorPago">{errors.nomUser.message}</span>
        ) : (
          <></>
        )}

        <div className="formPayment__inputContainer">
          <label htmlFor="">Número de Targeta de Crédito</label>
          <input
            type="text"
            placeholder="1234 1234 1234 1234"
            className="formPayment__input"
            {...register("credit", {
              required: "el campo no debe estar vacío",
              pattern: {
                value: validacion.creditNumber,
                message: "La tarjeta de credito debe contener solo 16 dígitos",
              },
            })}
            maxLength={16}
          />
        </div>
        {errors.credit ? (
          <span className="lblErrorPago">{errors.credit.message}</span>
        ) : (
          <></>
        )}

        <div className="formPayment__inputContainer--DateCvv">
          <div className="formPayment__inputContainer--date">
            <label htmlFor="">Fecha vencimiento</label>
            <input
              type="text"
              placeholder="MM/YY"
              className="formPayment__input--date"
              onInput={(e) => handleDate(e)}
              {...register("date", {
                required: "el campo no debe estar vacío",
                pattern: {
                  value: validacion.date,
                  message: "Ingresa una fecha válida por favor",
                },
              })}
              maxLength={5}
            />
          </div>

          <div className="formPayment__inputContainer--cvv">
            <label htmlFor="">CVV</label>
            <input
              type="text"
              className="formPayment__input--cvv"
              {...register("cvc", {
                required: "el campo cvc no debe estar vacío",
                pattern: {
                  value: validacion.cvc,
                  message: "Ingresa un cvc válido por favor",
                },
              })}
            />
          </div>
        </div>
        {errors.date ? (
          <span className="lblErrorPago">{errors.date.message}</span>
        ) : errors.cvc ? (
          <span className="lblErrorPago">{errors.cvc.message}</span>
        ) : (
          <></>
        )}

        <div className="formPayment__inputContainer">
          <label htmlFor="">Dirección</label>
          <input
            type="text"
            placeholder="Av.morales # 123"
            className="formPayment__input"
            {...register("address", {
              required: "el campo no debe estar vacío",
            })}
          />
        </div>
        {errors.address ? (
          <span className="lblErrorPago">{errors.address.message}</span>
        ) : (
          <></>
        )}

        <button className="formPayment__button">Pagar Ahora</button>
      </form>
    </section>
  );
};

export default SeccionPago;
