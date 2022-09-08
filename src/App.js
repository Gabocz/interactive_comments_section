import './App.css';
import Container from './components/Container';
import {CurrentUser} from './data';
import {CommentsData} from './data';
import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid'
import WindowConfirmation from './components/WindowConfirmation';


function App() {

  const [presentUser, SetPresentUser] = useState(CurrentUser)
  const [comments, SetComments] = useState(CommentsData)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [clickedId, setClickedId] = useState()
 

 const createNewComment = (content)  => {
    if(10 < content.length  && content.length < 300) {
    const newComment = {
      id: uuidv4(),
      content: content, 
      createdAt: new Date().toLocaleDateString(),
      score: 0,
      user: {
        image: presentUser.image,
        username: presentUser.username
      }, 
      replies: []
  }
   const newComments = [newComment, ...comments]
   SetComments(newComments)
  }
  }
  
  const customFilter = (object, key, value) => {
    if (Array.isArray(object)) {
      for (const obj of object) {
        const result = customFilter(obj, key, value);
        if (result) {
          return obj;
        }
      }
    } else {
      if (object.hasOwnProperty(key) && object[key] === value) {
        return object;
      }
  
      for (const k of Object.keys(object)) {
        if (typeof object[k] === "object") {
          const o = customFilter(object[k], key, value);
          if (o !== null && typeof o !== 'undefined')
            return o;
        }
      }
  
      return null;
    }
  }
  

  const updateComment = (id, newContent) => {
     const commentToUpdate = customFilter(comments, 'id', id)
       if (commentToUpdate.replies.length) {
       const foundReply = commentToUpdate.replies.find(reply =>reply.id === id)
       foundReply.content = newContent
     } else {
        commentToUpdate.content = newContent
     }
     
  }

    const addNewReply = (content, replyingTo, id)  => {
      if(content.length > 10) {
      const newReply = {
        id: uuidv4(),
        content: content, 
        createdAt: new Date().toLocaleDateString(),
        score: 0,
        replyingTo: replyingTo,
        user: {
          image: presentUser.image,
          username: presentUser.username
        }, 
        replies: []
    }
       const foundComment = customFilter(comments, 'id', id)
       foundComment.replies.push(newReply)
       const newComments = [...comments]
       SetComments(newComments)
  }
}
  
  const deleteComment = (id) => {
      const commentToUpdate = customFilter(comments, 'id', id)
    if(commentToUpdate.id === id) {
       const newComments = comments.filter(comment => comment.id !== id)
       SetComments(newComments)
    } else {
       const updatedReplies = commentToUpdate.replies.filter(reply => reply.id !== id)
       const updatedComment = {...commentToUpdate, replies : updatedReplies}
       const newComments = comments.filter(comment => comment.id !== commentToUpdate.id)
       newComments.push(updatedComment)
       SetComments(newComments)
    }
  setShowConfirmation(false)
}

 
  return (
    <div className="App">

      {showConfirmation && <WindowConfirmation setConfirmDelete={setConfirmDelete} deleteComment={deleteComment} setShowConfirmation={setShowConfirmation} clickedId={clickedId}/>}

      <Container 
        comments={comments} 
        presentUser={presentUser} 
        createNewComment={createNewComment} 
        deleteComment={deleteComment} 
        updateComment={updateComment} 
        addNewReply={addNewReply}
        setShowConfirmation={setShowConfirmation}
        confirmDelete={confirmDelete}
        setClickedId={setClickedId}
        />
      
    </div>
  );
}

export default App;
