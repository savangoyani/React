import React,{useRef , useState} from 'react'

export default function Ref() {
    const input = useRef('0')
    const [inputvalue,setInput]=useState(0)
    const getRefinput = ()=> {
        input.current.focus()
        setInput(input.current.value)
    }

  return (
    <div>
        <input type="text" ref={input}/>
        <button onClick={() =>{
            getRefinput()
        }}>click</button>
        <div id ="b">{inputvalue}</div>
    </div>
  )
}
