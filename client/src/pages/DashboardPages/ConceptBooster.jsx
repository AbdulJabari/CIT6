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
                <div className="ml-6 mt-8 w-[68vw] h-full bg-gray-200 pl-6 py-6 rounded-lg">
                  <h3 className=" text-blue-600 text-3xl font-extrabold mb-4">
                    {wrongAnswers.title}
                  </h3>
                  {console.log(wrongAnswers.wrongAnswers)}
                  {wrongAnswers.wrongAnswers.map((wrongAnswer) => (
                    <div className="text-xl pb-6 bg-white rounded-lg w-[97%] mb-5">
                      <h4 className="text-2xl font-bold pl-4">
                        {wrongAnswer.question}
                      </h4>
                      <h4 className="pl-10 text-red-600">
                        <span className="text-red-700 font-bold">Answer: </span>
                        {wrongAnswer.answer}
                      </h4>
                      <h4 className="pl-10 text-green-600">
                        <span className="text-green-700 font-bold">
                          Explanation:{' '}
                        </span>
                        {wrongAnswer.explanation}
                      </h4>
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
