import React, { useEffect } from 'react'
import './styles.scss'

const ProductCar = ({name, price, quantity, img, handleTotal, total}) => {
  useEffect(() => {
   handleTotal(total + price)
  }, [])
   
  return (
    <article className='productCar'>
        <figure className='productCar__img' style={{background: `url(${img})`, backgroundSize: 'cover'}}>

        </figure>
        <div className='productCar__items'>
            <h2 className='productCar__name'>{name}</h2>
            <div className='productCar__items-values'>
               <p className='productCar__itemscantidad'>x{quantity}</p>
               <p className='productCar__itemsprecio'>{price}</p> 
            </div>
        </div>
    </article>
  )
}

export default ProductCar