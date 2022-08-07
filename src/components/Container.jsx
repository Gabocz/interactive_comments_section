import Comment from "./Comment"
import PresUserComment from "./PresUserComment"
import {useState} from 'react'

function Container({comments, presentUser, SetComments}) {
  
 
  const deleteComment = (IdToDelete) => {
    const newComments = comments.filter(comment => comment.id !== IdToDelete)
    SetComments(newComments, ...comments)
  }

       return (
        <main className="container">
            
            {comments.map((comment) => {
               return (
                <div>
                  <Comment comment={comment} key={comment.id} presentUser={presentUser} deleteComment={deleteComment}/>
                 </div>
               )
              })}
              <PresUserComment presentUser={presentUser}/>
            
        </main>
    )
}

export default Container
