import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import RadialBar from '../RadialBar/RadialBar'

const SeeResults = () => {
  const [questions, setQuestions] = useState([])
  const [moduleId, setModuleId] = useState('')
  const [numCorrect, setNumCorrect] = useState(0)
  let onClose
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.state) {
      const { questions, moduleId, numCorrect, onClose } = location.state
      onClose = onClose
      setQuestions(questions)
      setModuleId(moduleId)
      setNumCorrect(numCorrect)
    }
  }, [location])
  return (
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
      <RadialBar numCorrect={numCorrect} questionLength={questions.length} />
      <h3 className="font-bold text-2xl -mt-4">
        {numCorrect} / {questions.length}
      </h3>

      <button
        className="rounded-lg  p-3 px-8 bg-green-600 mt-7 text-white font-bold text-lg block mx-auto mb-2"
        onClick={() =>
          navigate('/keyanswers', { state: { questions, moduleId } })
        }
      >
        Check Answers
      </button>
    </div>
  )
}
export default SeeResults
