import { FaBookOpen, FaClipboardList, FaClock, FaMedal } from 'react-icons/fa'
import { FaCircleExclamation } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

const DashboardSidebar = () => {
  const navigate = useNavigate()
  return (
    <div className=" w-[25%] h-[96vh] bg-gray-200 rounded-lg flex flex-col gap-y-6  item-start text-lg font-bold sticky top-8">
      <h3
        className=" ml-6 mt-14 flex items-center gap-1 hover:text-blue-600 cursor-pointer"
        onClick={() => navigate('/dashboard')}
      >
        <FaClipboardList /> Summary
      </h3>
      <h3
        className=" ml-6 flex items-center gap-1 hover:text-blue-600 cursor-pointer"
        onClick={() => navigate('/dashboard/timespentandquizscore')}
      >
        <FaClock /> Time Spent & Quiz Scores
      </h3>
      <h3
        className=" ml-6 flex items-center gap-1  hover:text-blue-600 cursor-pointer"
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
  )
}
export default DashboardSidebar
