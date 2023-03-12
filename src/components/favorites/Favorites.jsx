import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../router/Routers';
import ProductCar from '../carrito/ProductCar/ProductCar';

const Favorites = () => {
    const {favorites, setFavorites, products} = useContext(AppContext)
    const navigate = useNavigate()
    const handleBack = () =>{
        navigate(-1)
    }
    console.log(products, favorites)
  return (
    <div>
         <section className="carContainer">
        <header onClick={() => handleBack()} className="formPayment__header">
          <span className="material-symbols-outlined arrow">arrow_back_ios</span>
          <p>Volver</p>
        </header>

      {favorites.length ? (
          <section className='carProducts'>
            {favorites.map((elem, index) => {
              const product = products.find((item) => item.id == elem);
              console.log(product)
              return (
                <ProductCar
                  name={product.name}
                  price={product.price}
                  img={product.img[0]}
                  setFavorites={setFavorites}
                  key={index}
                  id={product.id}
                />
              );
            })}
          </section>

      ) : (
        <><h1>Agregar producto a favoritos</h1></>
      )}
    </section>
    </div>
  )
}

export default Favorites  