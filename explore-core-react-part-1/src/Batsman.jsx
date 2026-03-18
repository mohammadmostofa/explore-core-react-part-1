import { useState } from "react"

export default function Batsman (){

  const [run, setrun] = useState(0);
  const [ six, setsix] = useState(0);

  const handleSingles = () =>{
         const updated = run + 1;
         setrun(updated);
  }

  const handleFour = () =>{
         const updated = run + 4;
         setrun(updated)
  }

  const handleSix = () =>{
         const updated  = run + 6;
         setrun(updated);

         const updatedSix = six + 1;
         setsix(updatedSix)

        }

  

  const handleRemove = () =>{
        const totalRemove = 0;
        setrun(totalRemove)
  }



  return(
    
    <div>

           <h2> Player:Bangle Batsman  </h2>
            
            <p>six:{six} </p>

            {
              run > 50 && <p>Your score:50</p>
            }
           <h3>Score:{run} </h3>
           <button onClick={handleSingles}>Singles</button>
           <button onClick={handleFour}>Four</button>
           <button onClick={handleSix}>Six</button><br />
           <button onClick={handleRemove}>Delete</button>


    </div>

  )

}