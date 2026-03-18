
export default function Friend({friend}){
  console.log(friend)
  const {name,username,email,phone} = friend;
  return(
        <div className="card">
          <h3>Name:{name}</h3>
          <h3>username:{username} </h3>
          <h4>Email:{email} </h4>
          <h4>phon: {phone} </h4>
        </div>
       )
}