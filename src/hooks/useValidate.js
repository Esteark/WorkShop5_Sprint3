import React, { useEffect, useState } from "react";

const useValidate = (campoValidate = "") => {
  //Estados con las expresiones regulares
  //Expresion regular que me valdia un correo electronico
  const [regEmail, setRegEmail] = useState(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  //Estado que con la expresion regular para una contraseña de 3 caracteres o mas
  const [regpass, setRegPass] = useState(/^.{3,}$/);

  //Funcion para validar que la cadeno no este vacia
  const validateEmpty = (campo) => {
    if (campo.lenght !== 0) {
      return true;
    } else {
      return false;
    }
  };

  //Funcion para validadr nombre de usuario y email

  const validateUser = (campo = "") => {
    if (validateEmpty(campo)) {
      console.log(campo.trim().indexOf(" "));
      if (campo.trim().indexOf(" ") === -1) {
        return { value: false, message: "" };
      } else {
        return {
          value: true,
          message: "El nombre de usuario no puede contener espacios",
        };
      }
    } else {
      return {
        value: true,
        message: "El campo del nombre o correo del usuario es requerido",
      };
    }
  };

  const validateEmail = (campo) => {
    if (regEmail.test(campo)) {
      return { value: false, message: "" };
    } else {
      return {
        value: true,
        message: "Ingresa un correo válido por favor",
      };
    }
  };

  const validatePassWordUser = (campo = "") => {
    if (validateEmpty(campo)) {
      if (regpass.test(campo)) {
        return { value: true, message: "" };
      } else {
        return {
          value: false,
          message: "la contraseña debe contener al menos 3 caracteres",
        };
      }
    } else {
      return { value: false, message: "La contraseña es requerida" };
    }
  };
  const validateCreditNumber = () => {};
  const validateDate = () => {};
  const validateCvc = (campo = "") => {
    if (validateEmpty(campo)) {
      if (campo.lenght === 3) {
        return { value: true, message: "" };
      } else {
        return {
          value: false,
          message: "El cvc debe contener minimo 3 dígitos",
        };
      }
    } else {
      return { value: false, message: "El campo cvc es requerido" };
    }
  };
  const validateDireccion = (campo = "") => {
    if (validateEmpty(campo)) {
      return { value: true, message: "" };
    } else {
      return { value: false, message: "La dirección es requerida" };
    }
  };

  const [validate, setValidate] = useState({
    nomUser: validateUser(campoValidate),
    email: validateEmail(campoValidate),
    password: validatePassWordUser(campoValidate),
    creditNumber: validateCreditNumber(),
    date: validateDate(),
    cvc: validateCvc(campoValidate),
    address: validateDireccion(campoValidate),
  });

  const handleValidate = (campo, tipoValida) => {
    switch (tipoValida) {
      case "nomUser":
        console.log("entro");
        setValidate({ ...validate, nomUser: validateUser(campo) });
        break;
      case "email":
        setValidate({ ...validate, [tipoValida]: validateEmail(campo) });
        break;
      case "password":
        setValidate({
          ...validate,
          [tipoValida]: validatePassWordUser(campo),
        });
        break;
      default:
        console.log("Propiedad incorrecta");
        break;
    }
  };

  return [validate, handleValidate];
};

export default useValidate;
