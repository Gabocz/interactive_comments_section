import {useState} from 'react'
import CancelBtn from './CancelBtn'
import Warning from './Warning'

function ReplyForm({presentUser, replyingTo, addNewReply, id, setShowReplyForm}) {
    const [replyContent, setReplyContent] = useState('')
    const [showWarning, setShowWarning] = useState(false)

    const handleInputChange = (e) => {
      setReplyContent(e.target.value.replace(`@${replyingTo} `, ''))
      if(e.target.value.replace(`@${replyingTo} `, '').length < 10) {
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
        <div className="card comment reply addMarginTop">
            <form action="#" onSubmit={handleSubmit} id="reply-form">
                <img className="profileImg presUser" src={process.env.PUBLIC_URL + presentUser.image.png} alt="user profile" name= "userImg"/>
                <textarea 
                   className="textarea" 
                   name="content"
                   cols="49" 
                   rows="4"
                   minLength="10"
                   maxLength="250"
                   defaultValue={`@${replyingTo} `} 
                   onChange={handleInputChange}>
                   </textarea>
                   {showWarning && <Warning/>}
            </form>
             <div className='btnContainer'>
                <button type="submit" form="reply-form" className="button active reply">Reply</button>
                <CancelBtn setShowReplyForm={setShowReplyForm}/>
                </div>
        </div>
    )
}

export default ReplyForm
