import {useState} from 'react'
import CancelBtn from './CancelBtn'
import Warning from './Warning'

function ReplyForm({presentUser, replyingTo, addNewReply, id, setShowReplyForm}) {
    const [replyContent, setReplyContent] = useState('')
    const [showWarning, setShowWarning] = useState(false)

    const handleInputChange = (e) => {
      setReplyContent(e.target.value.replace(`@${replyingTo} `, ''))
      if(replyContent.length < 10) {
          setShowWarning(true)
      } else {
          setShowWarning(false)

      }
      }
   
   const handleSubmit = (e) => {
    e.preventDefault()
    if(replyContent.length > 10) {
       addNewReply(replyContent, replyingTo, id)
       setShowReplyForm(false)
       setShowWarning(false)
    }
    
   }


    return (
        <div className="card reply addMarginTop">
            <form action="#" onSubmit={handleSubmit}>
                <img className="profileImg presUser" src={presentUser.image.png} alt="user profile" name= "userImg"/>
                <textarea 
                   className="textarea" 
                   name="content"
                   cols="49" 
                   rows="4"
                   minLength="10"
                   maxLength="300"
                   defaultValue={`@${replyingTo} `} 
                   onChange={handleInputChange}>
                   </textarea>
                <button type="submit" className="button active reply">Reply</button>
                   <Warning showWarning={showWarning}/>
            </form>
                <CancelBtn setShowReplyForm={setShowReplyForm}/>
            
        </div>
    )
}

export default ReplyForm
