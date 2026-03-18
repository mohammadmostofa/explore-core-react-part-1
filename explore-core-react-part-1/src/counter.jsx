import { useState } from "react"

export default function Counter(){
  const countStyle = {
    border:'2px solid yellow'
  }

  const [count, setCount] = useState(0);

  const handleAdd = () =>{

    const newCount = count + 1;
     setCount(newCount)

  }

          
      return(
                 
          
           
        <div style={countStyle}>
  
          <h2>Count:{count} </h2>
          <button onClick={handleAdd}>Add</button>
        </div>

      )
}