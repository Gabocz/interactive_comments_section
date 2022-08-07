import MinusBtn from "./MinusBtn"
import PlusBtn from "./PlusBtn"
import {useState, useEffect} from 'react'

function RatingComponent({comment}) {
   const commScore = comment.score
   const [score, setScore] = useState(commScore)
   const [minusBtnClicked, setMinusBtnClicked] = useState(false)
   const [plusBtnClicked, setPlusBtnClicked] = useState(false)

   useEffect(() => {
      resetBtns()
   })

   const resetBtns = () => {
      if(minusBtnClicked&&plusBtnClicked) {
        setMinusBtnClicked(false)
        setPlusBtnClicked(false)
      }
   }
   

       return (
        <div className="ratingComponent">
            <PlusBtn score={score} setScore={setScore} setPlusBtnClicked={setPlusBtnClicked} plusBtnClicked={plusBtnClicked}/>
            <span className="score">{score}</span>
            <MinusBtn score={score} setScore={setScore} setMinusBtnClicked={setMinusBtnClicked} minusBtnClicked={minusBtnClicked}/>
        </div>
    )
}

export default RatingComponent
