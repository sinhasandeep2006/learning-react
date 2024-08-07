import { useState } from 'react'

import './App.css'

function App() {
  let [color, setColor] = useState("olive")
  const skyblueColor = () => {
    setColor(precolor => precolor = "skyblue")
  }
  const blackColor = () => {
    setColor(precolor => precolor = "black")
  }
  const greenColor = () => {
    setColor(precolor => precolor = "green")
  }
  const yellowColor = () => {
    setColor(precolor => precolor = "yellow")
  }
  const redColor = () => {
    setColor(precolor => precolor = "red")
  }
  const pinkColor = () => {
    setColor(precolor => precolor = "pink")
  }
  const greyColor = () => {
    setColor(precolor => precolor = "grey")
  }
  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flexx-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg rounded-xl px-3 py-4 bg-white ">
          <button onClick={skyblueColor} className="outline-none text-white px-4 py-1 rounded-full" style={{ backgroundColor: "skyblue" }}
          >Blue</button>
          <button onClick={blackColor} className="outline-none text-white px-4 py-1 rounded-full" style={{ backgroundColor: "black" }}>Black</button>
          <button onClick={greenColor}className="outline-none text-white px-4 py-1 rounded-full" style={{ backgroundColor: "Green" }}>Green</button>
          <button onClick={yellowColor} className="outline-none text-white px-4 py-1 rounded-full" style={{ backgroundColor: "yellow" }}>Yellow</button>
          <button onClick={redColor}className="outline-none text-white px-4 py-1 rounded-full" style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={pinkColor}className="outline-none text-white px-4 py-1 rounded-full" style={{ backgroundColor: "pink" }}>Pink</button>
          <button onClick={greyColor} className="outline-none text-white px-4 py-1 rounded-full" style={{ backgroundColor: "Grey" }}>Grey</button>
        </div>
      </div>
    </div>
  )
}

export default App
