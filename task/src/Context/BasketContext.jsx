import React, { createContext, useContext, useState } from 'react'
 const BasketContext=createContext()
export const BasketProvider = ({children}) => {
const [basket, setbasket] = useState([])
const datalarrr={
    basket,
    setbasket
}
  return (
   <BasketContext.Provider value={datalarrr}>
{children}
   </BasketContext.Provider>
  )
}

export const useBasket=()=>useContext(BasketContext)
export default BasketProvider