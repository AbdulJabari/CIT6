import { useNavigate } from 'react-router-dom'
import { beginnerModules } from '../../modules'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const KeyAnswers = () => {
  const [questions, setQuestions] = useState([])
  const [moduleId, setModuleId] = useState('')

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.state) {
      const { questions, moduleId } = location.state
      setQuestions(questions)
      setModuleId(moduleId)
    }
  }, [location])
  return (
    <div className="w-[70vw] h-full bg-red-200 overflow-hidden mx-auto p-1 mt-16 rounded-lg mb-8">
      <h1 className="text-4xl font-extrabold mt-6 text-center mb-8 underline text-red-900">
        KEY ANSWERS
      </h1>
      {questions && questions.length > 0
        ? questions.map((question, index) => (
            <div className="pl-6 mb-4 bg-white rounded-3xl pb-2 w-[90%] mx-auto">
              <h4 className="text-3xl ">
                Question #{index + 1}: {question.question}
              </h4>
              <h4 className="text-green-900 text-2xl font-bold">
                Answer: {question.answer}
              </h4>
            </div>
          ))
        : null}
      <button
        className="rounded-lg  p-3 bg-red-600 mt-7 text-white font-bold text-lg  mx-auto flex items-center gap-2  px-4 mb-5"
        onClick={() => navigate(`/modules/${moduleId}`)}
      >
        <FaArrowCircleLeft />
        Back to Module
      </button>
    </div>
  )
}
export default KeyAnswers
