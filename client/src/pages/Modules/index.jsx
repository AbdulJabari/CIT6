import { beginnerModules } from '../../modules'
import { useNavigate } from 'react-router-dom'
import { FaArrowRight, FaLightbulb } from 'react-icons/fa'
import './modules.css'
import { GlobalContext } from '../../context/GlobalState'
import { useContext, useEffect } from 'react'

export default function Modules() {
  const navigate = useNavigate()
  const { fetchListOfModules, loading } = useContext(GlobalContext)
  // const { beginnerModules } = useContext(GlobalContext)

  useEffect(() => {
    fetchListOfModules()
  }, [])

  if (loading)
    return (
      <h1 className="mt-16 text-center text-3xl font-extrabold">
        Loading User Stats
      </h1>
    )

  return (
    <div className="font-sans mt-12 w-[95vw] h-[100vh]  flex-col p-3 pl-10">
      <h1 className="mt-4 text-green-600 font-bold text-3xl  mb-2 tracking-wider">
        Beginner Topics
      </h1>
      <div className="w-[90%] h-[2px] border border-green-600"></div>
      <div className="flex flex-wrap items-center gap-5 mt-10 pl-8">
        {beginnerModules.map((module) => {
          return (
            <div
              className="w-[20%] h-[10%] flex flex-col gap-5 border-2 border-green-600 rounded-lg p-3"
              key={module.id}
            >
              <div className="w-full h-10 bg-green-400 text-center pt-2 rounded-t-lg">
                <h3 className="font-bold">{module.name}</h3>
              </div>
              <div className="flex flex-row gap-2 items-center flex-wrap m-0">
                {module.keywords.map((keyword) => {
                  return (
                    <div className="w-auto h-auto border-2 rounded-lg p-0.5 border-gray-400  text-[10px] flex-wrap">
                      {keyword}
                    </div>
                  )
                })}
              </div>
              <p className="text-sm">{module.desc}</p>
              <button
                className="text-left bg-green-600 w-32 p-2 rounded-lg text-xs text-white flex items-center gap-2 pl-3 hover:animate-bounce active:animate-ping font-bold"
                onClick={() => navigate(`/modules/${module.id}`)}
              >
                Dive Into Topic
                <FaLightbulb />
              </button>
            </div>
          )
        })}
      </div>
      {/* <h1 className="mt-16 text-yellow-600 font-bold text-3xl  mb-2 tracking-wider">
        Intermediate Topics
      </h1>
      <div className="w-[90%] h-[2px] border border-yellow-600"></div>
      <div className="flex items-center gap-5 mt-10 pl-8">
        {beginnerModules.map((module) => {
          return (
            <div className="w-[20%] h-[10%] flex flex-col gap-5 border-2 border-yellow-600 rounded-lg p-3">
              <div className="w-full h-10 bg-yellow-400 text-center pt-2 rounded-t-lg">
                <h3 className="font-bold">{module.name}</h3>
              </div>
              <div className="flex flex-row gap-2 items-center flex-wrap m-0">
                {module.keywords.map((keyword) => {
                  return (
                    <div className="w-auto h-auto border-2 rounded-lg p-0.5 border-gray-400  text-[10px] flex-wrap">
                      {keyword}
                    </div>
                  )
                })}
              </div>
              <p className="text-sm">{module.desc}</p>
              <button
                className="text-left bg-yellow-600 w-32 p-2 rounded-lg text-md text-white flex items-center gap-2 pl-3"
                onClick={() => navigate('/')}
              >
                Read Topic
                <FaArrowRight />
              </button>
            </div>
          )
        })}
      </div> */}
    </div>
  )
}
