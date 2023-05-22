import React, { useState } from 'react'

export default function Test() {
  let std = [
    { name: 'SAWAN', marks: 80 },
    { name: 'umang', marks: 80 },
  ]
  let [stdnt, setMark] = useState(std)
  //   console.log(stdnt)

  const setCounter = (stdd) => {
    var newStd = stdd.map((obj) => {
      return { name: obj.name, marks: obj.marks + 5 }
    })
    console.log(newStd)
    setMark(newStd)
  }
  return (
    <>
      <button
        onClick={() => {
          setCounter(stdnt)
        }}
        style={{ width: '100px', backgroundColor: 'blue', color: 'white' }}
      >
        Click me
      </button>
      <h1></h1>
    </>
  )
}