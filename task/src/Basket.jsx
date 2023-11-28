import React from 'react'

import { useBasket } from './Context/BasketContext'

const Basket = () => {
const {basket, setbasket} = useBasket()
  return (
   <>
<div className='basket'>
    {basket.map((product)=>(
<div className='product'>
  {product.name}
  {product.description}
</div>
    ))}
</div>
   </>
  )
}

export default Basket