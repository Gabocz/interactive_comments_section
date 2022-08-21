function WindowConfirmation({setConfirmDelete, setShowConfirmation, deleteComment, clickedId}) {

  const handleClickConfirm = () => {
    setConfirmDelete(true)
    deleteComment(clickedId)
  }

  const handleClickCancel = () => {
    setShowConfirmation(false)
  }

  return (
    <div className="overlay">
       <div className="dialogueBox">
        <p className="title">Delete comment</p>
        <p className="message">Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
          <div className="btnGroup">
            <button className="button active confirmCancel" onClick={handleClickCancel}>No, cancel</button>
            <button className="button active confirmDelete" onClick={handleClickConfirm}>Yes, delete</button>
          </div>
       </div>
    </div>
  )
}

export default WindowConfirmation