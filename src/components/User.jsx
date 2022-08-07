import CurrentUserSign from "./CurrentUserSign"

function User({comment, reply}) {
    return (
        <div className="user">
            <img src={reply ? reply.user.image.png : comment.comment.user.image.png} alt="user profile" className="profileImg"/>
                <span className="username">{reply ? reply.user.username : comment.comment.user.username}</span>
                 {(reply && reply.user.username==="juliusomo") && <CurrentUserSign/>}
                <span className="createdAt">{reply ? reply.createdAt : comment.comment.createdAt}</span>
        </div>
    )
}

export default User


