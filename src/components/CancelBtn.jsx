function CancelBtn({setShowReplyForm, isBeingEdited, setIsBeingEdited}) {
  const handleClick = () => {
    if(isBeingEdited) {
      setIsBeingEdited(false)
      return
    } else {
      setShowReplyForm(false)
    }
  }
    

  return (
    <div>
        <button onClick={handleClick} className={isBeingEdited ? "button active cancel edit mobile" : "button active cancel"} >Cancel</button>
    </div>
  )
}

export default CancelBtn
