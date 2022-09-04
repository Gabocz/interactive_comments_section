import {useState} from 'react'
import CancelBtn from './CancelBtn'

function EditForm({comment, id, updateComment, isBeingEdited, setIsBeingEdited}) {
    const [commentContent, setCommentContent] = useState(comment.content)
    
    

    const handleInputChange = (e) => {
        const updatedCommentContent = e.target.value.replace(`@${comment.replyingTo}`, '')
        setCommentContent(updatedCommentContent)
        
       }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateComment(id, commentContent)
        setIsBeingEdited(false)
    }
       
    return (
        

        <div>
            <form onSubmit={handleSubmit}>
            <textarea onChange={handleInputChange} className="textarea edit" cols="58" rows="4" maxLength="250" defaultValue={comment.replyingTo ? `@${comment.replyingTo} ${comment.content}` : comment.content}></textarea>
            <button type="submit" className="button active update">UPDATE</button>
            </form>
            <CancelBtn isBeingEdited={isBeingEdited} setIsBeingEdited={setIsBeingEdited}/>
            
        </div>
    )
}

export default EditForm
