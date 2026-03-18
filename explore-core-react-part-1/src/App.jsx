import { Suspense } from 'react'
import './App.css'
import Batsman from './Batsman'
import Counter from './Counter'
import User from './User'
import Friends from './Friends'

const fatchUser = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => data);

// asyn process

const fetchFriends = async () =>{
         const res = await fetch('https://jsonplaceholder.typicode.com/users')
         return res.json();
         
}

function App() {

  // call the fetchfriends
  const friendsPromise = fetchFriends();//call function fetchFriends();

  return (
    <>

    <Suspense fallback = { <h3>Loading...</h3> } >
      <User fatchUser = {fatchUser}>   </User>
    </Suspense>

    <Suspense fallback ={ <h3>Friends are coming soon...</h3>} >
    {/* set the fetchfriends variable  in friend */}
    <Friends friendsPromise = {friendsPromise} ></Friends>
   
    </Suspense>
   
<Batsman></Batsman>     
<Counter></Counter>  
     
    </>
  )
}




export default App
