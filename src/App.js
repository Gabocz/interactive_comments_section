import './App.css';
import Container from './components/Container';
import {CurrentUser} from './data';
import {CommentsData} from './data';
import {useState} from 'react';

let allComments = []
function getAllComments () {
    for (let comment of CommentsData) {
      allComments.push(comment)
      for(let reply of comment.replies) {
        allComments.push(reply)
      }
    }
   return allComments
}

getAllComments()


function App() {
  const [presentUser, SetPresentUser] = useState(CurrentUser)
  const [comments, SetComments] = useState(allComments)

  return (
    <div className="App">
      <Container comments={comments} presentUser={presentUser} SetComments={SetComments}/>
      
    </div>
  );
}

export default App;
