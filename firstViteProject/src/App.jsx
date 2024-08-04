import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter,setCounter] =useState(5)

    const addValue=()=>{
      if(counter==20) {
        setCounter(counter=20)
      }else{
        setCounter(counter+1)
      }
//  counter =counter+1
 console.log(counter)

  }
  const removeValue =()=>{
    if(counter<=0) {
      setCounter(counter=0)
    }else{
      setCounter(counter-1)
    }
   console.log(counter)
  }
  return (
    <>
     <h1>chai and react</h1>
     <h3>Counter Value : {counter}</h3>
     <button onClick={addValue}>Add value</button>
     <br />
     <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
