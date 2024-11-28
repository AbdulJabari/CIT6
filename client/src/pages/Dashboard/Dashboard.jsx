import RadialBarAnalytics from '../../components/RadialBarAnalytics/RadialBarAnalytics'
import { FaAnglesRight } from 'react-icons/fa6'
import StatsBar from '../../components/StatsBar/StatsBar'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import DashboardSidebar from '../../components/DashboardSidebar/DashboardSidebar'
import { useNavigate } from 'react-router-dom'
// import { beginnerModules } from '../../modules'
// import { stats } from '../../stats'

export default function Dashboard() {
  //For testing remove stats, completedLessonsCounter, strugglingLessons and excellingLessons in useContext and uncomment the stats, beginnerModules, completedLessonsCounter, strugglingLessons and excellingLessons testing data
  // const completedLessonsCounter =
  //   stats?.length > 0
  //     ? stats.reduce((acc, cur) => {
  //         if (cur.isFinished === true) {
  //           return acc + 1
  //         }
  //         return acc
  //       }, 0)
  //     : null

  // function computeStrugglingLessons() {
  //   const strugglingLessons = []
  //   beginnerModules.map((module, index) => {
  //     if (stats[index].timeCompleted > module.duration) {
  //       return strugglingLessons.push(stats[index])
  //     }
  //   })
  //   console.log(strugglingLessons)
  //   return strugglingLessons
  // }

  // function computeExcellingLessons() {
  //   const excellingLessons = []
  //   beginnerModules.map((module, index) => {
  //     if (stats[index].timeCompleted < module.duration) {
  //       return excellingLessons.push(stats[index])
  //     }
  //   })

  //   return excellingLessons
  // }

  // const strugglingLessons =
  //   stats?.length > 0 ? computeStrugglingLessons() : null

  // const excellingLessons = stats?.length > 0 ? computeExcellingLessons() : null
  const {
    strugglingLessons,
    excellingLessons,
    stats,
    completedLessonsCounter,
    loading,
  } = useContext(GlobalContext)

  const navigate = useNavigate()

  if (loading)
    return (
      <h1 className="mt-16 text-center text-3xl font-extrabold">
        Loading User Stats
      </h1>
    )

  console.log('These is the stats array', stats)
  return (
    <div className="mt-20 ml-8 w-auto h-full gap-x-0">
      <h1 className="mt-4 text-red-900 font-bold text-4xl  mb-2 tracking-wider ">
        User Data Analytics
      </h1>
      <div className="w-[94%] h-[2px] border border-red-900 mt-3 mb-7"></div>
      <div className="flex w-auto h-auto">
        <DashboardSidebar />
        <div className="w-full h-full flex flex-wrap gap-20 gap-y-16 ml-10 relative mb-20">
          <div className="w-[33rem] h-[31rem] bg-gray-200 rounded-3xl">
            <h3 className="text-center font-bold text-3xl mt-6">
              Completed Quizzes Summary
            </h3>
            <div className="relative left-20 -ml-4">
              {stats && stats.length > 0 ? (
                <RadialBarAnalytics
                  completed={completedLessonsCounter}
                  notCompleted={stats?.length - completedLessonsCounter}
                  stats={stats}
                />
              ) : (
                <RadialBarAnalytics completed={0} notComplete={10} />
              )}
            </div>
            <div className="w-full h-[2px] bg-black"></div>
            <div className="absolute w-[0.1rem] h-[10.5%] bg-black left-72 -ml-5"></div>
            <div className="w-full h-auto flex gap-3 justify-around items-center mt-16 ">
              <div className="text-center -mt-10">
                <h3 className="text-xl font-bold">Completed</h3>
                <h4 className="text-4xl">{completedLessonsCounter}</h4>
              </div>
              <div className="text-center -mt-10">
                <h3 className="text-xl font-bold">Not Completed</h3>
                <h4 className="text-4xl">
                  {stats?.length - completedLessonsCounter}
                </h4>
              </div>
            </div>
          </div>
          <div className="w-[33rem] h-[31rem] bg-gray-200 rounded-3xl -ml-4">
            <h3 className="text-center font-bold text-3xl mt-6">Quiz Scores</h3>
            {stats && stats?.length > 0
              ? stats.map((stat, index) => {
                  if (stat.isFinished && index < 4) {
                    return (
                      <StatsBar stat={stat} color={'#1E88E5'} size={'small'} />
                    )
                  }
                })
              : null}
            {completedLessonsCounter > 3 ? (
              <div className="mt-2 mr-7 text-blue-600">
                <h4
                  className="text-right text-xl"
                  onClick={() => navigate('/dashboard/timespentandquizscore')}
                >
                  <FaAnglesRight className="text-right inline-block" /> See more
                </h4>
              </div>
            ) : null}
          </div>
          <div className="w-[33rem] h-[31rem] bg-gray-200 rounded-3xl ">
            <h3 className="text-center font-bold text-3xl mt-6">
              Struggling With These Lessons
            </h3>
            {strugglingLessons && strugglingLessons?.length > 0
              ? strugglingLessons.map((lesson, index) => {
                  if (index < 4) {
                    return (
                      <StatsBar
                        stat={lesson}
                        color={'#E53935'}
                        size={'small'}
                      />
                    )
                  }
                })
              : null}

            {strugglingLessons?.length >= 4 ? (
              <div className="mt-2 mr-7 text-blue-600">
                <h4
                  className="text-right text-xl"
                  onClick={() => navigate('/dashboard/lessonsofexcellence')}
                >
                  <FaAnglesRight className="text-right inline-block" /> See more
                </h4>
              </div>
            ) : null}
          </div>
          <div className="w-[33rem] h-[31rem] bg-gray-200 rounded-3xl -ml-4">
            <h3 className="text-center font-bold text-3xl mt-6">
              You Passed These Lessons
            </h3>
            {excellingLessons && excellingLessons?.length > 0
              ? excellingLessons.map((lesson, index) => {
                  if (index < 4) {
                    return (
                      <StatsBar
                        stat={lesson}
                        color={'#43A047'}
                        size={'small'}
                      />
                    )
                  }
                })
              : null}

            {excellingLessons?.length >= 4 ? (
              <div className="mt-2 mr-7 text-blue-600">
                <h4
                  className="text-right text-xl"
                  onClick={() => navigate('/dashboard/areasofdifficulty')}
                >
                  <FaAnglesRight className="text-right inline-block" /> See more
                </h4>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
