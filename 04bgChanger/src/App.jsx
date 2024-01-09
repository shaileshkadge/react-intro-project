import { useState } from "react"

function App() {
  
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none px-4 py-2 rounded-3xl" style={{backgroundColor: "Black", color: "white"}} onClick={() => {setColor("Black")}}>Dark Mode</button>
          <button className="outline-none px-4 py-2 rounded-3xl" style={{backgroundColor: "Red"}} onClick={() => {setColor("red")}}>Red</button>
          <button className="outline-none px-4 py-2 rounded-3xl" style={{backgroundColor: "Green"}} onClick={() => {setColor("green")}}>Green</button>
          <button className="outline-none px-4 py-2 rounded-3xl" style={{backgroundColor: "Blue"}} onClick={() => {setColor("Blue")}}>Blue</button>
          <button className="outline-none px-4 py-2 rounded-3xl" style={{backgroundColor: "Pink"}} onClick={() => {setColor("Pink")}}>Pink</button>
          <button className="outline-none px-4 py-2 rounded-3xl" style={{backgroundColor: "Gray"}} onClick={() => {setColor("Gray")}}>Gray</button>
          <button className="outline-none px-4 py-2 rounded-3xl" style={{backgroundColor: "Lavender"}} onClick={() => {setColor("Lavender")}}>Lavender</button>
          <button className="outline-none px-4 py-2 rounded-3xl" style={{backgroundColor: "Orange"}} onClick={() => {setColor("Orange")}}>Orange</button>
          <button className="outline-none px-4 py-2 rounded-3xl" style={{backgroundColor: "white"}} onClick={() => {setColor("white")}}>White</button>
          <button className="outline-none px-4 py-2 rounded-3xl" style={{backgroundColor: "Purple"}} onClick={() => {setColor("purple")}}>Purple</button>
        </div>
      </div>

    </div>
  )
}

export default App
