import React, { useState } from 'react'
import Counter from './Counter'
import  CounterProvider from './Context/CounterContext'
import { useEffect } from 'react'
import BasketProvider, { useBasket } from './Context/BasketContext'
import Basket from './Basket'


const App = () => {
  const [data, setdata] = useState([])
  const {basket, setbasket} = useBasket()
  useEffect(()=>{
    const fetchdata =async function () {
      const res=await fetch('https://northwind.vercel.app/api/categories')
      const jsondata=await res.json()
      setdata(jsondata)
    }
    fetchdata()
},[])

  return (
    <>
   <CounterProvider>
    <Counter/>
   </CounterProvider>
   {data && data.map((item)=>(
    <div className='card'>
       <ul>
       <li>{item.id}</li>
  <li>{item.name}</li>
       <li> {item.description}</li>
       </ul>
      <button className='btn' onClick={()=>setbasket([...basket,item])}>Add to basket</button>
    </div>
   ))}
    <Basket/>
   </>
  )
}

export default App
