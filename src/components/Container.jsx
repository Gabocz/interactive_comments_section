import Comment from "./Comment"
import NewComment from "./NewComment"



function Container({comments, presentUser, createNewComment, deleteComment, updateComment, addNewReply}) {
   
      return (
        <main className="container">
            
            {comments.map((comment) => {
              return (
                <>
                <div>
                  <Comment 
                    comment={comment} 
                    key={comment.id} 
                    presentUser={presentUser} 
                    deleteComment={deleteComment} 
                    updateComment={updateComment}
                    addNewReply={addNewReply}/>
                </div>
                {comment.replies && comment.replies.length > 0 && comment.replies.map((reply => {
                  return (
                   <div>
                  <Comment comment={reply} 
                    presentUser={presentUser}
                    deleteComment={deleteComment} 
                    updateComment={updateComment}
                    addNewReply={addNewReply}
                  />
                  </div>
                  )
                }))}
                 
                </>
              )
              })  
            }
              <NewComment presentUser={presentUser} createNewComment={createNewComment}/>

        </main>
    )
}

export default Container
