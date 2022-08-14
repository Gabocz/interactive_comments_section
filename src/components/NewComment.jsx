import {useState} from 'react'
import Warning from './Warning'

function NewComment({presentUser, createNewComment}) {
    const [newCommentContent, setNewCommentContent] = useState('')
    const [showWarning, setShowWarning] = useState(false)
    

   const handleInputChange = (e) => {
    setNewCommentContent(e.target.value)
    if(e.target.value.length < 10 && e.target.value.length < 300) setShowWarning(true)
   }
   
   const handleSubmit = (e) => {
    e.preventDefault()
    createNewComment(newCommentContent)
    setNewCommentContent('')
    setShowWarning(false)
   }


    return (
        <div className="card">
            <form action="#" onSubmit={handleSubmit}>
                <img className="profileImg presUser" src={presentUser.image.png} alt="user profile" name= "userImg"/>
                <textarea 
                   className="textarea" 
                   name="content"
                   cols="60" 
                   rows="3"
                   minLength="10" 
                   maxLength="300"
                   value={newCommentContent} 
                   onChange={handleInputChange}
                   placeholder="Min. 10, max. 250 characters..."
                   autoFocus
                   ></textarea>
                <button type="submit" className="button active reply">Send</button>
                   <Warning showWarning={showWarning}/>
            </form>
        </div>
    )
}

export default NewComment
