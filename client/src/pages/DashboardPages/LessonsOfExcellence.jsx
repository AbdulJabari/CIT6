import ProgressBar from '@ramonak/react-progress-bar'
import { useContext } from 'react'
import { FaBookOpen, FaClipboardList, FaClock, FaMedal } from 'react-icons/fa'
import { FaAnglesRight, FaCircleExclamation } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalState'
import StatsBar from '../../components/StatsBar/StatsBar'
import DashboardSidebar from '../../components/DashboardSidebar/DashboardSidebar'

export default function LessonsOfExcellence() {
  const navigate = useNavigate()
  const { excellingLessons } = useContext(GlobalContext)
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
              You Excel At These Lessons
            </h3>
            {excellingLessons && excellingLessons?.length > 0
              ? excellingLessons.map((lesson) => {
                  if (lesson.isFinished) {
                    return (
                      <StatsBar
                        stat={lesson}
                        color={'#E53935'}
                        size={'large'}
                      />
                    )
                  }
                })
              : null}

            {excellingLessons?.length >= 4 ? (
              <div className="mt-2 mr-7 text-blue-600">
                <h4 className="text-right text-xl">
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
