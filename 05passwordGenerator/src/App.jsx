import { useState,useCallback,useEffect,useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password,setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) {
      str += "0123456789"
    }
    if(charAllowed){
      str += "~`!@#$%^&*()_-+={[}]|:;'<,>.?/"
    }
    for(let i = 1; i <= length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length + 1 ) 
      pass += str.charAt(randomIndex)
    }
    setPassword(pass)

  },[length, numberAllowed, charAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()// it selects the text in the input field
    passwordRef.current?.setSelectionRange(0, 99) // it select the text in the input field from 0 to 99    characters
    window.navigator.clipboard.writeText(password)
    
  }, [password]) 

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-3xl text-center text-white my-4">
          Password Generator
        </h1>

        <div className="flex shadow round-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="w-full px-3 py-1  outline-none bg-amber-50  rounded-l-xl"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-r-xl text-center">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>

        </div>
      </div>
    </>
  );
}

export default App
