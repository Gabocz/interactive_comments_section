import {useState} from 'react'

function PresUserComment({presentUser, createNewComment}) {
    const [newCommentContent, setNewCommentContent] = useState('')
    

   const handleInputChange = (e) => {
    setNewCommentContent(e.target.value)
   }
   
   const handleSubmit = (e) => {
    e.preventDefault()
    createNewComment(newCommentContent)
    setNewCommentContent('')
   }


    return (
        <div className="newComment card">
            <form action="#" onSubmit={handleSubmit}>
                <img className="profileImg presUser" src={presentUser.image.png} alt="user profile" name= "userImg"/>
                <textarea 
                   className="textarea" 
                   name="content"
                   cols="60" 
                   rows="3" 
                   value={newCommentContent} 
                   onChange={handleInputChange}
                   placeholder="Min. 10, max. 250 characters..."
                   ></textarea>
                <button type="submit" className="button active reply">Send</button>
            </form>
            
        </div>
    )
}

export default PresUserComment
