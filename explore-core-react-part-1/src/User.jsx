import { use } from "react"

  
  export default function User ({fatchUser}){
     
    const users = use(fatchUser)
console.log(users)
              return(
                <div className="card">
                  <h2>User:{users.length}</h2>
                </div>
              )
  }