export default function Post({post}){
  // const {title,userId,body} = post;
  //without distructuring system 

  return(

        <div className="card">
             <h3>User Id : {post.userId} </h3>
               <h3>Title: {post.title} </h3>
               <h2>body: {post.body} </h2>

        </div>

      )
}