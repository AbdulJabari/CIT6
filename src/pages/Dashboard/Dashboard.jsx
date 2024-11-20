import ProgressBar from '@ramonak/react-progress-bar'
import RadialBarAnalytics from '../../components/RadialBarAnalytics/RadialBarAnalytics'
import {
  FaBookOpen,
  FaClipboardList,
  FaClock,
  FaEye,
  FaMedal,
} from 'react-icons/fa'
import { FaAnglesRight, FaCircleExclamation } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { stats } from '../../stats'
import StatsBar from '../../components/StatsBar/StatsBar'

export default function Dashboard() {
  const navigate = useNavigate()

  const completedLessonsCounter = stats.reduce((acc, cur) => {
    if (cur.isFinished === true) {
      return acc + 1
    }
    return acc
  }, 0)
  console.log(completedLessonsCounter)

  return (
    <div className="mt-20 ml-8 w-auto h-full gap-x-0">
      <h1 className="mt-4 text-red-900 font-bold text-4xl  mb-2 tracking-wider ">
        User Data Analytics
      </h1>
      <div className="w-[94%] h-[2px] border border-red-900 mt-3 mb-7"></div>
      <div className="flex w-auto h-auto">
        <div className=" w-[25%] h-[96vh] bg-gray-200 rounded-lg flex flex-col gap-y-6  item-start text-lg font-bold sticky top-8">
          <h3 className=" ml-6 mt-14 flex items-center gap-1 text-blue-600">
            <FaClipboardList /> Summary
          </h3>
          <h3
            className=" ml-6 flex items-center gap-1 cursor-pointer hover:text-blue-600"
            onClick={() => navigate('/dashboard/timespentandquizscore')}
          >
            <FaClock /> Time Spent & Quiz Scores
          </h3>
          <h3
            className=" ml-6 flex items-center gap-1 cursor-pointer hover:text-blue-600"
            onClick={() => navigate('/dashboard/lessonsofexcellence')}
          >
            <FaMedal /> Lessons of Excellence
          </h3>
          <h3
            className=" ml-6 flex items-center gap-1 cursor-pointer hover:text-blue-600"
            onClick={() => navigate('/dashboard/areasofdifficulty')}
          >
            <FaCircleExclamation /> Areas of Difficulty
          </h3>
          <h3
            className=" ml-6 flex items-center gap-1 cursor-pointer hover:text-blue-600"
            onClick={() => navigate('/dashboard/conceptbooster')}
          >
            <FaBookOpen />
            Concept Booster
          </h3>
        </div>
        <div className="w-full h-full flex flex-wrap gap-20 gap-y-16 ml-10 relative mb-20">
          <div className="w-[33rem] h-[29.5rem] bg-gray-200 rounded-3xl">
            <h3 className="text-center font-bold text-3xl mt-6">
              Completed Lessons Summary
            </h3>
            <div className="relative left-20 -ml-4">
              <RadialBarAnalytics
                completed={completedLessonsCounter}
                notComplete={stats.length - completedLessonsCounter}
              />
            </div>
            <div className="w-full h-[2px] bg-black"></div>
            <div className="absolute w-[0.1rem] h-[8.5%] bg-black left-72 -ml-5"></div>
            <div className="w-full h-auto flex gap-3 justify-around items-center mt-12 ">
              <div className="text-center -mt-10">
                <h3 className="text-xl font-bold">Completed</h3>
                <h4 className="text-4xl">{completedLessonsCounter}</h4>
              </div>
              <div className="text-center -mt-10">
                <h3 className="text-xl font-bold">Not Completed</h3>
                <h4 className="text-4xl">
                  {stats.length - completedLessonsCounter}
                </h4>
              </div>
            </div>
          </div>
          <div className="w-[33rem] h-[29.5rem] bg-gray-200 rounded-3xl -ml-4">
            <h3 className="text-center font-bold text-3xl mt-6">
              Time Spent & Quiz Scores
            </h3>
            {stats && stats.length > 0
              ? stats.map((stat) => {
                  if (stat.isFinished) {
                    return <StatsBar stat={stat} />
                  }
                })
              : null}
            {completedLessonsCounter > 3 ? (
              <div className="mt-2 mr-7 text-blue-600">
                <h4 className="text-right text-xl">
                  <FaAnglesRight className="text-right inline-block" /> See more
                </h4>
              </div>
            ) : null}
          </div>
          <div className="w-[33rem] h-[29.5rem] bg-gray-200 rounded-3xl ">
            <h3 className="text-center font-bold text-3xl mt-6">
              Struggling With These Lessons
            </h3>
            <div>
              <div className="flex justify-between items-center px-12">
                <div>
                  <p className="opacity-0 text-xs">.</p>
                  <p className="mt-0">Introduction to Blockchain</p>
                </div>
                <div className="mt-0 ">
                  <p>4/7</p>
                  <p className="mt-0">00:03:23</p>
                </div>
              </div>
              <div className="w-[82%] ml-12 mt-2">
                <ProgressBar
                  completed={60}
                  completedClassName="bg-blue-600 rounded-full w-[60%] text-right h-[15px] text-xs"
                  barContainerClassName="bg-blue-200 rounded-full"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center px-12">
                <div>
                  <p className="opacity-0 text-xs">.</p>
                  <p className="mt-0">Introduction to Blockchain</p>
                </div>
                <div className="mt-0 ">
                  <p>4/7</p>
                  <p className="mt-0">00:03:23</p>
                </div>
              </div>
              <div className="w-[82%] ml-12 mt-2">
                <ProgressBar
                  completed={60}
                  completedClassName="bg-blue-600 rounded-full w-[60%] text-right h-[15px] text-xs"
                  barContainerClassName="bg-blue-200 rounded-full"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center px-12">
                <div>
                  <p className="opacity-0 text-xs">.</p>
                  <p className="mt-0">Introduction to Blockchain</p>
                </div>
                <div className="mt-0 ">
                  <p>4/7</p>
                  <p className="mt-0">00:03:23</p>
                </div>
              </div>
              <div className="w-[82%] ml-12 mt-2">
                <ProgressBar
                  completed={60}
                  completedClassName="bg-blue-600 rounded-full w-[60%] text-right h-[15px] text-xs"
                  barContainerClassName="bg-blue-200 rounded-full"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center px-12">
                <div>
                  <p className="opacity-0 text-xs">.</p>
                  <p className="mt-0">Introduction to Blockchain</p>
                </div>
                <div className="mt-0 ">
                  <p>4/7</p>
                  <p className="mt-0">00:03:23</p>
                </div>
              </div>
              <div className="w-[82%] ml-12 mt-2">
                <ProgressBar
                  completed={60}
                  completedClassName="bg-blue-600 rounded-full w-[60%] text-right h-[15px] text-xs"
                  barContainerClassName="bg-blue-200 rounded-full"
                />
              </div>
            </div>

            <div className="mt-2 mr-7 text-blue-600">
              <h4 className="text-right text-xl">
                <FaAnglesRight className="text-right inline-block" /> See more
              </h4>
            </div>
          </div>
          <div className="w-[33rem] h-[29.5rem] bg-gray-200 rounded-3xl -ml-4">
            <h3 className="text-center font-bold text-3xl mt-6">
              You Excel at These Lessons
            </h3>
            <div>
              <div className="flex justify-between items-center px-12">
                <div>
                  <p className="opacity-0 text-xs">.</p>
                  <p className="mt-0">Introduction to Blockchain</p>
                </div>
                <div className="mt-0 ">
                  <p>4/7</p>
                  <p className="mt-0">00:03:23</p>
                </div>
              </div>
              <div className="w-[82%] ml-12 mt-2">
                <ProgressBar
                  completed={60}
                  completedClassName="bg-blue-600 rounded-full w-[60%] text-right h-[15px] text-xs"
                  barContainerClassName="bg-blue-200 rounded-full"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center px-12">
                <div>
                  <p className="opacity-0 text-xs">.</p>
                  <p className="mt-0">Introduction to Blockchain</p>
                </div>
                <div className="mt-0 ">
                  <p>4/7</p>
                  <p className="mt-0">00:03:23</p>
                </div>
              </div>
              <div className="w-[82%] ml-12 mt-2">
                <ProgressBar
                  completed={60}
                  completedClassName="bg-blue-600 rounded-full w-[60%] text-right h-[15px] text-xs"
                  barContainerClassName="bg-blue-200 rounded-full"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center px-12">
                <div>
                  <p className="opacity-0 text-xs">.</p>
                  <p className="mt-0">Introduction to Blockchain</p>
                </div>
                <div className="mt-0 ">
                  <p>4/7</p>
                  <p className="mt-0">00:03:23</p>
                </div>
              </div>
              <div className="w-[82%] ml-12 mt-2">
                <ProgressBar
                  completed={60}
                  completedClassName="bg-blue-600 rounded-full w-[60%] text-right h-[15px] text-xs"
                  barContainerClassName="bg-blue-200 rounded-full"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center px-12">
                <div>
                  <p className="opacity-0 text-xs">.</p>
                  <p className="mt-0">Introduction to Blockchain</p>
                </div>
                <div className="mt-0 ">
                  <p>4/7</p>
                  <p className="mt-0">00:03:23</p>
                </div>
              </div>
              <div className="w-[82%] ml-12 mt-2">
                <ProgressBar
                  completed={60}
                  completedClassName="bg-blue-600 rounded-full w-[60%] text-right h-[15px] text-xs"
                  barContainerClassName="bg-blue-200 rounded-full"
                />
              </div>
            </div>

            <div className="mt-2 mr-7 text-blue-600">
              <h4 className="text-right text-xl">
                <FaAnglesRight className="text-right inline-block" /> See more
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
