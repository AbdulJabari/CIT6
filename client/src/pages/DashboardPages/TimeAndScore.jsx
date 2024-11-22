import { useNavigate } from 'react-router-dom'
import StatsBar from '../../components/StatsBar/StatsBar'
// import { stats } from '../../stats'
import DashboardSidebar from '../../components/DashboardSidebar/DashboardSidebar'
import { createContext, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

export default function TimeAndScore() {
  const { stats } = useContext(GlobalContext)

  return (
    <div className="mt-20 ml-8 w-auto h-full  gap-x-0">
      <h1 className="mt-4 text-red-900 font-bold text-4xl  mb-2 tracking-wider ">
        User Data Analytics
      </h1>
      <div className="w-[94%] h-[2px] border border-red-900 mt-3 mb-7"></div>
      <div className="flex h-auto w-auto">
        <DashboardSidebar />
        <div className="w-full h-full ml-10 mb-20">
          <div className="w-[70rem] h-full bg-gray-200 rounded-3xl -ml-4 pb-12">
            <h3 className="text-center font-bold text-3xl pt-8">
              Time Spent & Quiz Scores
            </h3>
            {stats && stats?.length > 0
              ? stats.map((stat) => {
                  if (stat.isFinished) {
                    return (
                      <StatsBar stat={stat} color={'#1E88E5'} size={'large'} />
                    )
                  }
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  )
}
