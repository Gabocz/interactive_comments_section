import Comment from "./Comment"
import NewComment from "./NewComment"
import { v4 as uuidv4 } from 'uuid'



function Container({comments, presentUser, createNewComment, deleteComment, updateComment, addNewReply, setShowConfirmation, confirmDelete, setClickedId}) {
   
      return (
        <main className="container">
            
            {comments.map((comment) => {
              return (
                <div key={uuidv4()}>
                <div>
                  <Comment 
                    comment={comment} 
                     key={comment.id} 
                    presentUser={presentUser} 
                    deleteComment={deleteComment} 
                    updateComment={updateComment}
                    addNewReply={addNewReply}
                    setShowConfirmation={setShowConfirmation}
                    confirmDelete={confirmDelete}
                    setClickedId={setClickedId}
                 />
                </div>
                {comment.replies && comment.replies.length > 0 && comment.replies.map((reply => {
                  return (
                   <div key={uuidv4()}>
                  <Comment comment={reply} 
                    key={reply.id} 
                    presentUser={presentUser}
                    deleteComment={deleteComment} 
                    updateComment={updateComment}
                    addNewReply={addNewReply}
                    setShowConfirmation={setShowConfirmation}
                    confirmDelete={confirmDelete}
                    setClickedId={setClickedId}
                  />
                  </div>
                  )
                }))}
                </div>
              )
              })  
            }
              <NewComment 
                presentUser={presentUser} 
                createNewComment={createNewComment}/>

        </main>
    )
}

export default Container
