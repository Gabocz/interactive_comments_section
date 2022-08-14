import {useState} from 'react'
import Warning from './Warning'

function ReplyForm({presentUser, replyingTo, addNewReply, id, setShowReplyForm}) {
    const [replyContent, setReplyContent] = useState(`@${replyingTo}`)
    const [showWarning, setShowWarning] = useState(false)

    const handleInputChange = (e) => {
      setReplyContent(e.target.value.replace(`@${replyingTo} `, ''))
      if(e.target.value.replace(`@${replyingTo} `, '').length < 10 && e.target.value.length < 300) setShowWarning(true)
      }
   
   const handleSubmit = (e) => {
    e.preventDefault()
    addNewReply(replyContent, replyingTo, id)
    setShowReplyForm(false)
    setShowWarning(false)
   }


    return (
        <div className="card reply addMarginTop">
            <form action="#" onSubmit={handleSubmit}>
                <img className="profileImg presUser" src={presentUser.image.png} alt="user profile" name= "userImg"/>
                <textarea 
                   className="textarea" 
                   name="content"
                   cols="50" 
                   rows="3"
                   minLength="10"
                   maxLength="300"
                   defaultValue={`@${replyingTo} `} 
                   onChange={handleInputChange}>
                   </textarea>
                <button type="submit" className="button active reply">Reply</button>
                   <Warning showWarning={showWarning}/>
            </form>
            
        </div>
    )
}

export default ReplyForm
