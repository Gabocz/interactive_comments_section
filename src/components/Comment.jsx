import RatingComponent from "./RatingComponent"
import ReplyBtnComponent from "./ReplyBtnComponent"
import DeleteBtnComponent from "./DeleteBtnComponent"
import EditBtnComponent from "./EditBtnComponent"
import EditForm from "./EditForm"
import {useState} from 'react'

function Comment({comment, presentUser, setIdToDelete, deleteComment, updateComment}) {
    const user = comment.user
    const id = comment.id
    const [isBeingEdited, setIsBeingEdited] = useState(false)
   

    return (
           <div className={comment.replyingTo ? "card comment reply" : "card comment"}  id={id}>
              <RatingComponent comment={comment}/>
               <div>
                 <div className="user">
                 <img className="profileImg" src={user.image.png} alt="user" />
                 <span className="username">{user.username}</span>
                 <span className="createdAt">{comment.createdAt}</span>
              </div>
              <div className="commentText">
                 { isBeingEdited && <EditForm comment={comment} updateComment={updateComment} id={id} setIsBeingEdited={setIsBeingEdited}/> }
                 { !isBeingEdited && <p> {comment.replyingTo && <span className="replyingTo">@{comment.replyingTo}</span>} {comment.content}</p> }
               </div>
              </div>
                 {presentUser.username===user.username && <DeleteBtnComponent id={id} setIdToDelete={setIdToDelete} deleteComment={deleteComment}/>}
                 {presentUser.username===user.username && <EditBtnComponent setIsBeingEdited={setIsBeingEdited} id={id}/>}
                 {presentUser.username!==user.username && <ReplyBtnComponent/>}
        </div>
        )
}

export default Comment


