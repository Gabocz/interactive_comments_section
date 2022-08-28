import {useState} from 'react'
import Warning from './Warning'

function NewComment({presentUser, createNewComment}) {
    const [newCommentContent, setNewCommentContent] = useState('')
    const [showWarning, setShowWarning] = useState(false)
    

   const handleInputChange = (e) => {
    setNewCommentContent(e.target.value)
    if(e.target.value.length < 10) {
        setShowWarning(true)
    } else {
        setShowWarning(false)
    }
   }
   
   const handleSubmit = (e) => {
    e.preventDefault()
    if(newCommentContent.length > 10) {
    createNewComment(newCommentContent)
    setNewCommentContent('')
    setShowWarning(false)
   }
}


    return (
        <div className="card newComment">
            <form action="#" onSubmit={handleSubmit}>
                <img className="profileImg presUser" src={process.env.PUBLIC_URL + presentUser.image.png} alt="user profile"/>
                <textarea 
                   className="textarea" 
                   name="content"
                   cols="60" 
                   rows="3"
                   minLength="10" 
                   maxLength="250"
                   value={newCommentContent} 
                   onChange={handleInputChange}
                   placeholder="Min. 10, max. 250 characters..."
                   autoFocus
                   ></textarea>
                <button type="submit" className="button active reply send">Send</button>
                   <Warning showWarning={showWarning}/>
            </form>
        </div>
    )
}

export default NewComment
