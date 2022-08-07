function PresUserComment({presentUser}) {

   const handleSubmit = () => {
    
       
   }

    return (
        <div className="presUserComment card">
            <form action="#" onSubmit={handleSubmit}>
                <img className="profileImg presUser" src={presentUser.image.png} alt="user profile" name= "userImg"/>
                <textarea className="textarea" name="content" id="" cols="60" rows="3"></textarea>
                <button type="submit" className="button active reply">Send</button>
            </form>
            
        </div>
    )
}

export default PresUserComment
