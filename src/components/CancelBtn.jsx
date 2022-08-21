function CancelBtn({setShowReplyForm}) {
  const handleClick = () => {
    setShowReplyForm(false)
  }
    

  return (
    <div>
        <button onClick={handleClick} className="button active cancel">Cancel</button>
    </div>
  )
}

export default CancelBtn
