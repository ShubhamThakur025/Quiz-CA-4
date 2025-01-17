import React, { useState } from 'react'
import questions from '../questions'

export default function QuestionBox(props) {
  
  //to manage score, questionCount, color per dark mode
  const [score, incrementScore] = useState(0)
  const [currentQuestion, changeQuestion] = useState(0)
  const [color, highlight] = useState("white")

  //to check the accuracy of answering questions
  const checkQuestion = (ans) => {
    return questions[currentQuestion].options[ans].isCorrect
  }

  //to update questions, increment score and switch to result page
  const setQuestion = (ans) => {
    let updatedScore = score
    if (checkQuestion(ans)) {
      updatedScore += 1
      incrementScore(updatedScore)
    }
    if (currentQuestion < questions.length - 1) {
      highlight("white")
      changeQuestion(currentQuestion + 1)
    }
    else {
      props.handleClick(updatedScore)

    }
  }
  return (
    <div>
      <div className='top-section'>
        <p id='question-series'>{`Question ${currentQuestion + 1} of 5`}</p>
        <h1 className='question' style={{ color: color }}>{questions[currentQuestion].text}</h1>
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
