import React, {useEffect, useState, useContext} from "react";
import "./login.scss";
import icon from "../../assets/img/pizza.png";
import { useForm } from "react-hook-form";
import {getUsers} from '../../services/usuariosActions.js'
import { setInfoUser } from "../../services/infoLocalUser";
import { AppContext } from "../../router/Routers";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomeLogin = () => {
  const [validateUsers, setValidateUsers] = useState([])
  const {register, handleSubmit, formState: {errors}} = useForm()
  const {setUserLogin} = useContext(AppContext)
  const navigate = useNavigate()
  
  const getUsuarios = async() =>{
    const data = await getUsers()
    setValidateUsers(data)
  }
  useEffect(() => {
    getUsuarios()
   
  }, [])
  const onSubmit = (value) =>{
    console.log(value)
    let validateUser = false
    let userLogin = {}
    validateUsers.forEach(user => {
      console.log(user)
      if(value.userName === user.nomUser && value.password === user.passWord){
        console.log(user)
        validateUser = true
        userLogin = user
      }else if(value.userName === user.email && value.password === user.passWord){
        validateUser = true
        userLogin = user
      }
    });
    console.log(validateUser)
    if(validateUser){
      setInfoUser(userLogin)
      setUserLogin(userLogin)
      navigate('/home')
      toast('Bienvenido')
    }else{
      toast('Error')
    }

  }
  
  return (
    <section className="secForm">
      <div className="logoANDicon">
        <img src={icon} alt="" className="icon" />
        <h2 className="logo">PiSassScript</h2>
      </div>

      <div className="form__text">
        <h2>Iniciar sesión en tu cuenta</h2>
        <p>
          Disfruta de la mejor pizza creada para las personas amantes del
          código.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="form__inputContainer">
          <span className="material-symbols-outlined">person</span>
          <input type="text" placeholder="Usuario" className="form__input" {...register('userName', {required: "Ingrese un nombre o email valido"})}/>
        </div>

        <div className="form__inputContainer">
          <span className="material-symbols-outlined">lock</span>
          <input type="text" placeholder="Contraseña" className="form__input" {...register('password', {required: "constraseña incorrecta"})}/>
        </div>

        <button className="form__button">Iniciar sesión</button>
        <a href="" className="form__password">
          Restablecer contraseña
        </a>
      </form>

      <div className="form__register">
        <p className="registerP">¿No tienes una cuenta?</p>
        <a href="" className="registerA">
          Regístrate aquí
        </a>
      </div>
    </section>
  );
};

export default HomeLogin;
