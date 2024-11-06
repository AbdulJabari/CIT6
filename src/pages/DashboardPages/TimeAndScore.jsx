import { FaBookOpen, FaClock, FaMedal } from 'react-icons/fa'
import { FaCircleExclamation } from 'react-icons/fa6'

export default function TimeAndScore() {
  return (
    <div className="mt-20 ml-8 w-auto h-full overflow-x-hidden gap-x-0">
      <h1 className="mt-4 text-red-900 font-bold text-4xl  mb-2 tracking-wider ">
        User Data Analytics
      </h1>
      <div className="w-[94%] h-[2px] border border-red-900 mt-3 mb-7"></div>
      <div className="flex relative">
        <div className=" w-[20%] h-[120vh] bg-gray-200 rounded-lg flex flex-col gap-y-6  item-start text-lg font-bold sticky top-0">
          <h3 className=" ml-6 mt-7 flex items-center gap-1 text-blue-600">
            <FaClock /> Time Spent & Quiz Scores
          </h3>
          <h3 className=" ml-6 flex items-center gap-1">
            <FaMedal /> Lessons of Excellence
          </h3>
          <h3 className=" ml-6 flex items-center gap-1">
            <FaCircleExclamation /> Areas of Difficulty
          </h3>
          <h3 className=" ml-6 flex items-center gap-1">
            <FaBookOpen />
            Concept Booster
          </h3>
        </div>
        <div className="w-full h-full ml-10 mb-20">
          <h2>Time Spent And Quiz Scores</h2>
        </div>
      </div>
    </div>
  )
}
