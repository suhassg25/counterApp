import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue]= useState(0);

  return (
    <>
     <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"flex-start"}}>
      <h1 style={{margin:0, padding:0}}>Counter App</h1>
      <div style={{display:"flex", flexDirection:"column", marginLeft:10}}>
        <p>Count: {value}</p>
        <div style={{display:"flex"}}>
          <button onClick={()=>{setValue((prev)=>prev+1)}}>Increment</button>
        <button onClick={()=>{setValue((prev)=>prev-1)}}>Decrement</button>
        </div>
      </div>
     </div>

    </>
  )
}

export default App
