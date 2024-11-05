import './modal.css'

import { useState } from 'react'
import M from 'materialize-css'
import RadialBar from '../RadialBar/RadialBar'
import { useNavigate } from 'react-router-dom'
import { beginnerModules } from '../../modules'

const ModalQuiz = ({ onClose, time, questions }) => {
  const [numCorrect, setNumCorrect] = useState(0)
  const [questionIndex, setQuestionIndex] = useState(0)
  const navigate = useNavigate()

  function handleOptionClick(e) {
    if (questionIndex < questions.length) {
      if (
        e.target.innerHTML.toLowerCase() ===
        questions[questionIndex].answer.toLowerCase()
      ) {
        M.toast({
          html: 'Correct Answer!',
          classes: 'toast-valid',
          displayLength: 1500,
        })
        setNumCorrect((prevCount) => {
          const newCount = prevCount + 1
          console.log(newCount)
          return newCount
        })
        handleNextQuestion()
      } else {
        M.toast({
          html: 'Incorrect Answer!',
          classes: 'toast-invalid',
          displayLength: 1500,
        })

        handleNextQuestion()
      }
    }
  }

  function handleNextQuestion() {
    if (questionIndex + 1 < questions.length) {
      setQuestionIndex((prevCount) => {
        const newCount = prevCount + 1
        return newCount
      })
    } else {
      console.log('Game ended')
    }
  }

  return (
    <div className="fixed z-100 p-[150px] left-0 top-0 w-full h-full modal overflow-hidden">
      <div className="relative bg-white m-auto p-8  border-red-800 rounded-lg border-2 w-[80%] modal-content">
        {questionIndex + 1 < questions.length ? (
          <div>
            <div className="px-1 pt-4 bg-white flex justify-between items-center">
              <h2 className="font-bold text-2xl">
                {questionIndex + 1}/{questions.length}
              </h2>
              <span
                onClick={onClose}
                className="cursor-pointer text-4xl font-bold pr-1 -mt-16 -mr-4"
              >
                &times;
              </span>
            </div>
            <div className="px-4 h-[100px]">
              <p className="text-2xl flex gap-4">
                <span className="font-bold">Question{questionIndex + 1}: </span>
                {questions[questionIndex].question
                  ? questions[questionIndex].question
                  : 'Question'}
              </p>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center gap-3">
              <div className="py-0.5 px-4 flex gap-5">
                <button
                  className="question"
                  onClick={(e) => {
                    handleOptionClick(e)
                  }}
                >
                  {questions[questionIndex].choices[0]}
                </button>
                <button
                  className="question"
                  onClick={(e) => {
                    handleOptionClick(e)
                  }}
                >
                  {questions[questionIndex].choices[1]}
                </button>
              </div>
              <div className="py-0.5 px-4 flex gap-5">
                <button
                  className="question"
                  onClick={(e) => {
                    handleOptionClick(e)
                  }}
                >
                  {questions[questionIndex].choices[2]}
                </button>
                <button
                  className="question"
                  onClick={(e) => {
                    handleOptionClick(e)
                  }}
                >
                  {questions[questionIndex].choices[3]}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center gap-4">
            <h2 className="text-3xl font-bold text-green-600 m-0 p-0">
              Congrats ! You Finished The Quiz{' '}
              <span
                onClick={onClose}
                className="cursor-pointer text-4xl font-bold pr-1 fixed right-72 -mt-8 text-black"
              >
                &times;
              </span>
            </h2>
            <RadialBar
              numCorrect={numCorrect}
              questionLength={questions.length - 1}
            />
            <h3 className="font-bold text-2xl -mt-4">
              {numCorrect} / {questions.length - 1}
            </h3>
            <div className="inline-block text-left">
              <h4>
                <span className="font-bold">Time Spent:</span> {time}
              </h4>
              <h4>
                <span className="font-bold">Average Time Spent:</span> 5 mins
                and 30 seconds
              </h4>
            </div>
            <button
              className="rounded-lg  p-3 px-8 bg-green-600 mt-7 text-white font-bold text-lg block mx-auto mb-2"
              onClick={() => navigate(`/modules/${beginnerModules[1].id}`)}
            >
              Next Module
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
export default ModalQuiz
