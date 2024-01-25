import React, { useState } from 'react'
import questions from '../questions'


export default function QuestionBox(props) {
  const [score, incrementScore] = useState(0)
  const [currentQuestion, changeQuestion] = useState(0)
  const[color, highlight]= useState("white")
  const checkQuestion = (ans) => {
    return questions[currentQuestion].options[ans].isCorrect
  }
  const setQuestion = (ans) => {
    if (currentQuestion < questions.length - 1) {
      if (checkQuestion(ans)) {
        incrementScore(prevscore => prevscore + 10)
      }
      console.log(score)
      highlight("white")
      changeQuestion(currentQuestion + 1)
    }
    else {
      props.handleClick()

    }
  }
  return (
    <div>
      <div className='top-section'>
        <p>{`Question ${currentQuestion+1} of 5`}</p>
        <h1 className='question' style={{color:color}}>{questions[currentQuestion].text}</h1>
      </div>
      <div className='options'>
        <div className='option pointer' onClick={() => { setQuestion(0) }}>{questions[currentQuestion].options[0].text}</div>
        <div className='option pointer' onClick={() => { setQuestion(1) }}>{questions[currentQuestion].options[1].text}</div>
        <div className='option pointer' onClick={() => { setQuestion(2) }}>{questions[currentQuestion].options[2].text}</div>
        <div className='option pointer' onClick={() => { setQuestion(3) }}>{questions[currentQuestion].options[3].text}</div>
      </div>
      <div className='highlight'>
        <button id='highlight' className='pointer' onClick={() => highlight("red")}>Highlight</button>
        <button id='con-highlight' className='pointer' onClick={() => highlight("white")}>Remove Highlight</button>

      </div>
    </div>
  )
}
