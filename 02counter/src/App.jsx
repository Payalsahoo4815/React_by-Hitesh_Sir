import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15);

  // let counter = 5;

  const addValue = () => {
    // counter += 1;
    // console.log("Counter Value: ", counter);
    setCounter(counter + 1);
    if (counter >= 20) {
      // alert("Counter reached 20");
      setCounter(20);
    }
 } 
  const removeValue = () => {
    // console.log("Counter Value: ", counter);
    setCounter(counter - 1);
    if (counter <= 0) {
      // alert("Counter reached 0");
      setCounter(0);
    }

  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
      </>
  )
}

export default App;
