import { useState } from "react";


const Hello = () => {
  const [count, setCount] = useState(0)

  return(
      <div className="flex  flex-row justify-center items-center text-teal-700">
        <h1>{count}</h1>
        <button  onClick={() => setCount(count + 1)}>+</button>
      </div>
  )
} 



export default Hello;