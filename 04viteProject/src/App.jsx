import { useState, useCallback } from 'react'


function App() {
  const [lenght, setlength] = useState(6)
  const [numberAllowed, setNumberAllowes] = useState(false)
  const [charAllowed, setcharAllowes] = useState(false)
  const [Password, setPassword] = useState("")
  const passwordGenertor = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+{}~`?/|"
    for (let i = 0; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)
    }
    setPassword(pass)
  }, [lenght, numberAllowed, charAllowed, setPassword])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 my-8 text-orange-500 bg-gray-700">
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-fidden mb-4"></div>
        <input
          type="text"
          value={Password}
          className='online-none w-full py-1 px-3'
          placeholder='Password' 
          readOnly
          />

      </div>
    </>
  )
}

export default App
