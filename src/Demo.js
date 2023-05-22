import React,{ useEffect,useState} from 'react'

export default function Demo() {
    const [cnt,setCnt]=useState (0)
    const [color,setcolor]=useState('#ADD8E6')
    const Setcunter =(c)=> {
        setCnt(++c);
    }

    const SetColor =(c)=>{
        setcolor(c)
    }

    useEffect(()=>{
        console.log('use effect');
        document.body.style.backgroundColor = color 
        if (cnt == 3) {
            document.getElementById('btn').style.backgroundColor='green'
        }
    })

  return (
    <div>
        <button style={{backgroundColor:color}} id='btn' onClick={() => {Setcunter(cnt)}}>Click Me! {cnt}</button>
        <input type="color" name="" id="" onChange={(b) =>{ SetColor(b.target.value) }}  />
    </div>
    
    
  )
}
