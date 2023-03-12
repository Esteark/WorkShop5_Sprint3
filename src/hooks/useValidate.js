import React, { useEffect, useState } from "react";

const useValidate = (campoValidate = "") => {
  const [regEmail, setRegEmail] = useState(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  const [validacion, setValidacion] = useState({
    nomUser: /^[^\s]+$/,
    email: regEmail,
    password: /^(?=.*\d)(?=.*[A-Z])(?=.*\W)[a-zA-Z\d\W]{6,}$/,
    creditNumber: /^[0-9]{16}$/,
    date: /^(0[1-9]|1[0-2])\/[0-9]{2}$/,
    cvc: /^[0-9]{1,3}$/,
  });

  return validacion;
};

export default useValidate;
