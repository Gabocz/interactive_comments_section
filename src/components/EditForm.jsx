import {useState} from 'react'
import CancelBtn from './CancelBtn'
import Warning from './Warning'

function EditForm({comment, id, updateComment, isBeingEdited, setIsBeingEdited}) {
    const [commentContent, setCommentContent] = useState(comment.content)
    const [showWarning, setShowWarning] = useState(false)
    

    const handleInputChange = (e) => {
        const updatedCommentContent = e.target.value.replace(`@${comment.replyingTo}`, '')
        if(e.target.value.replace(`@${comment.replyingTo}`, '').length < 10) {
            setShowWarning(true)
        } else {
            setShowWarning(false)
  
        }
        setCommentContent(updatedCommentContent)
        
       }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(commentContent.length > 10) {
            updateComment(id, commentContent)
            setIsBeingEdited(false)
        }      
    }
       
    return (
        

        <div>
            <form id="edit-form" onSubmit={handleSubmit}>
            <textarea onChange={handleInputChange} className="textarea edit" cols="58" rows="4" maxLength="250" defaultValue={comment.replyingTo ? `@${comment.replyingTo} ${comment.content}` : comment.content}></textarea>
            {showWarning && <Warning isBeingEdited={isBeingEdited}/>}
            </form>
            <div className={isBeingEdited ? "btnContainer edit": "btnContainer"}>
            <button type="submit" form="edit-form" className="button active update">UPDATE</button>
            <CancelBtn isBeingEdited={isBeingEdited} setIsBeingEdited={setIsBeingEdited}/>
            </div>
        </div>
    )
}

export default EditForm
