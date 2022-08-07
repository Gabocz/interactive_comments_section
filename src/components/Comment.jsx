import RatingComponent from "./RatingComponent"
import ReplyBtnComponent from "./ReplyBtnComponent"
import DeleteBtnComponent from "./DeleteBtnComponent"
import EditBtnComponent from "./EditBtnComponent"

function Comment({comment, presentUser, setIdToDelete, deleteComment}) {
    const user = comment.user
    const id = comment.id
   

    return (
           <div className={comment.replyingTo ? "card comment reply" : "card comment"}  id={id}>
              <RatingComponent comment={comment}/>
               <div>
                 <div className="user">
                 <img className="profileImg" src={user.image.png} alt="user" />
                 <span className="username">{user.username}</span>
                 <span className="createdAt">{comment.createdAt}</span>
                 {presentUser.username===user.username && <DeleteBtnComponent id={id} setIdToDelete={setIdToDelete} deleteComment={deleteComment}/>}
                 {presentUser.username===user.username && <EditBtnComponent/>}
                 {presentUser.username!==user.username && <ReplyBtnComponent/>}
               </div>
               <div className="commentText">
                 <p>{comment.content}</p>
               </div>
              </div>
        </div>
        )
}

export default Comment


