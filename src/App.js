import './App.css';
import Container from './components/Container';
import {CurrentUser} from './data';
import {CommentsData} from './data';
import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid'


function getAllComments () {
  let allComments = []
    for (let comment of CommentsData) {
      allComments.push(comment)
      for(let reply of comment.replies) {
        allComments.push(reply)
      }
    }
   return allComments
}


function App() {
  const [presentUser, SetPresentUser] = useState(CurrentUser)
  const [comments, SetComments] = useState(getAllComments())

 const createNewComment = (content)  => {
    if(content.length > 10) {
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

  const updateComment = (id, updatedContent) => { 
       const foundComment = comments.find(comment => comment.id === id)
       foundComment.content = updatedContent
       const newComments = [...comments]
       SetComments(newComments)
     }
  

  const deleteComment = (IdToDelete) => {
    const newComments = comments.filter(comment => comment.id !== IdToDelete)
    SetComments(newComments, ...comments)
  }
 
  return (
    <div className="App">
      <Container comments={comments} presentUser={presentUser} createNewComment={createNewComment} deleteComment={deleteComment} updateComment={updateComment}/>
      
    </div>
  );
}

export default App;
