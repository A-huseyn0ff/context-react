import React from 'react'
import { useCount } from './Context/CounterContext'

const Counter = () => {
const [count,setCount]=useCount()
  return (
   <>
{count}
<button onClick={()=>setCount(count=>count+1)}>+</button>
   </>
  )
}

export default Counter

