import RatingComponent from "./RatingComponent"
import ReplyBtnComponent from "./ReplyBtnComponent"
import DeleteBtnComponent from "./DeleteBtnComponent"
import EditBtnComponent from "./EditBtnComponent"
import EditForm from "./EditForm"
import ReplyForm from "./ReplyForm"
import CurrentUserSign from "./CurrentUserSign"
import {useState} from 'react'

function Comment({comment, presentUser, updateComment, addNewReply, setShowConfirmation, deleteComment, confirmDelete, setClickedId}) {
    const user = comment.user
    const id = comment.id
    const [isBeingEdited, setIsBeingEdited] = useState(false)
    const [showReplyForm, setShowReplyForm] = useState(false)

    return ( 
        <> 
            <div className={comment.replyingTo ? "card reply addMarginTop" : "card"}  id={id}>
              <RatingComponent comment={comment} presentUser={presentUser} isBeingEdited={isBeingEdited}/>
               <div>
                 <div className="user">
                 <img className="profileImg" src={process.env.PUBLIC_URL + user.image.png} alt="user" />
                 <span className="username">{user.username}</span>
                 {presentUser.username===user.username && <CurrentUserSign/>}
                 <span className="createdAt">{comment.createdAt}</span>
              </div>
              <div className="commentText">
                 { isBeingEdited && <EditForm comment={comment} updateComment={updateComment} id={id} isBeingEdited={isBeingEdited} setIsBeingEdited={setIsBeingEdited}/> }
                 { !isBeingEdited && <p> {comment.replyingTo && <span className="replyingTo">@{comment.replyingTo}</span>} {comment.content}</p> }
               </div>
              </div>
                 {presentUser.username===user.username && <DeleteBtnComponent setShowConfirmation={setShowConfirmation} id={id} deleteComment={deleteComment} confirmDelete={confirmDelete} setClickedId={setClickedId} isBeingEdited={isBeingEdited}/>}
                 {presentUser.username===user.username && <EditBtnComponent setIsBeingEdited={setIsBeingEdited} isBeingEdited={isBeingEdited}/>}
                 {presentUser.username!==user.username && <ReplyBtnComponent setShowReplyForm={setShowReplyForm}/>}
             </div>
           {showReplyForm && <ReplyForm 
              presentUser={presentUser} 
              id={comment.id} 
              replyingTo={user.username} 
              addNewReply={addNewReply} 
              setShowReplyForm={setShowReplyForm}
              />}
        </>
        )
}

export default Comment


