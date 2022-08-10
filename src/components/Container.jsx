import Comment from "./Comment"
import NewComment from "./NewComment"


function Container({comments, presentUser, createNewComment, deleteComment, updateComment}) {
   
 
      return (
        <main className="container">
            
            {comments.map((comment) => {
               return (
                <div>
                  <Comment comment={comment} key={comment.id} presentUser={presentUser} deleteComment={deleteComment} updateComment={updateComment}/>
                 </div>
               )
              })}
              <NewComment presentUser={presentUser} createNewComment={createNewComment}/>
            
        </main>
    )
}

export default Container
