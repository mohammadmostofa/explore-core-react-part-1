import { use } from "react"
import Friend from "./Friend"

export default function Friends ({friendsPromise}){
  const friends = use(friendsPromise)
      return(

        <div className="card">
          <h2>Friends:{friends.length} </h2>
             {/* friends er moode map loop dibo jate potita items single 
             babe friend er modde giye joma hoi */}
             {/* potita object er id alada alada korar jonno
             .......... key = {objectname.id} likete hobe */}

             {
                 friends.map(friend => <Friend key={friend.id} friend ={friend} ></Friend> )
             }
        </div>

      )
}