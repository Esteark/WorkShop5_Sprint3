import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../../router/Routers'
import './styles.scss'

const ProductCar = ({name, price, quantity, img, handleTotal, total}) => {
  const {formatterPeso} = useContext(AppContext)
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
               <p className='productCar__itemsprecio'>{price ? formatterPeso.format(price) : '$ 0'}</p> 
            </div>
        </div>
    </article>
  )
}

export default ProductCar