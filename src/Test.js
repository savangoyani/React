import React,{useState} from 'react'

export default function Test() {
const [count, setCount] = useState(0)

const Increement = (cnt) => {
    setCount(++cnt)
}

const Decreement = (cnt) => {
    setCount(--cnt)
}

const Multiplay  = (cnt) => {
    setCount(cnt *2)
}

const Division  = (cnt) => {
    setCount(cnt /2)
}
    return (
    
    <div>
        <button onClick={()=>{Increement(count)}}>+ Increement</button>
        <button onClick={()=>{Decreement(count)}}>- Decreement</button>
        <button onClick={()=>{Multiplay(count)}}>*  Multiplay 2</button>
        <button onClick={()=>{Division(count)}}>/  Division </button>
        <h1>{count} </h1>
    </div>
  )
}
