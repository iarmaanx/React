import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("grey")

  return (
      <div className="w-screen h-screen flex justify-center items-end " style={{background:color}}>
         <div className="bg-white rounded-xl px-3 h-14 flex justify-center mb-10 items-center gap-5 font-bold">
              <button className='rounded bg-red-600 px-4 h-10 rounded-3xl' 
              onClick={() => setColor("red")}>Red</button>
              <button className='rounded bg-green-600 px-4 h-10 rounded-3xl' 
              onClick={() => setColor("green")}>Green</button>
              <button className='rounded bg-blue-600 px-4 h-10 rounded-3xl' 
              onClick={() => setColor("blue")}>Blue</button>
              <button className='rounded bg-black px-4 h-10 rounded-3xl text-white' 
              onClick={() => setColor("black")}>Black</button>
              <button className='rounded bg-orange-600 px-4 h-10 rounded-3xl' 
              onClick={() => setColor("pink")}>Pink</button>
              <button className='rounded bg-yellow-300 px-4 h-10 rounded-3xl' 
              onClick={() => setColor("yellow")}>Yellow</button>
              <button className='rounded bg-yellow-600 px-4 h-10 rounded-3xl' 
              onClick={() => setColor("brown")}>Brown</button>
              <button className='rounded bg-green-300 px-4 h-10 rounded-3xl' 
              onClick={() => setColor("seagreen")}>Seagreen</button>
         </div>
        
      </div>
  )
}

export default App
