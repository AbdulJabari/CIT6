import ProgressBar from '@ramonak/react-progress-bar'

import { FaCircleExclamation } from 'react-icons/fa6'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import DashboardSidebar from '../../components/DashboardSidebar/DashboardSidebar'
import { GlobalContext } from '../../context/GlobalState'

export default function ConceptBooster() {
  const navigate = useNavigate()
  const { apiResponse, loadingApi, fetchListOfApiResponse } =
    useContext(GlobalContext)

  console.log('This is theApiResponse values; ', apiResponse)

  useEffect(() => {
    fetchListOfApiResponse()
  }, [])

  if (loadingApi)
    return (
      <h1 className="mt-12 font-extrabold text-3xl text-center">
        Fetching API Response
      </h1>
    )

  return (
    <div className="mt-20 ml-8 w-auto h-full  gap-x-0">
      <h1 className="mt-4 text-red-900 font-bold text-4xl  mb-2 tracking-wider ">
        User Data Analytics
      </h1>
      <div className="w-[94%] h-[2px] border border-red-900 mt-3 mb-7"></div>
      <div className="flex h-auto w-auto">
        <DashboardSidebar />
        <div className="w-full h-full ml-10 mb-20">
          <h2 className="text-3xl font-bold text-blue-600">
            Mistakes Explanation
          </h2>
          {apiResponse && apiResponse.length > 0
            ? apiResponse.map((wrongAnswers) => (
                <div className="ml-6 mt-8 w-[68vw] h-full bg-gray-200">
                  <h3 className=" text-blue-600 text-xl">
                    {wrongAnswers.title}
                  </h3>
                  {console.log(wrongAnswers.wrongAnswers)}
                  {wrongAnswers.wrongAnswers.map((wrongAnswer) => (
                    <div>
                      <h4>{wrongAnswer.question}</h4>
                      <h4>{wrongAnswer.answer}</h4>
                      <h4>{wrongAnswer.explanation}</h4>
                    </div>
                  ))}
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  )
}
