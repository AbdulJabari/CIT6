import ProgressBar from '@ramonak/react-progress-bar'
import { FaBookOpen, FaClipboardList, FaClock, FaMedal } from 'react-icons/fa'
import { FaCircleExclamation } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

export default function LessonsOfExcellence() {
  const navigate = useNavigate()
  return (
    <div className="mt-20 ml-8 w-auto h-full  gap-x-0">
      <h1 className="mt-4 text-red-900 font-bold text-4xl  mb-2 tracking-wider ">
        User Data Analytics
      </h1>
      <div className="w-[94%] h-[2px] border border-red-900 mt-3 mb-7"></div>
      <div className="flex h-auto w-auto">
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
          <h3 className=" ml-6 flex items-center gap-1  text-blue-600">
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
        <div className="w-full h-full ml-10 mb-20">
          <div className="w-[70rem] h-full bg-gray-200 rounded-3xl -ml-4 pb-12">
            <h3 className="text-center font-bold text-3xl pt-8">
              You Excel At These Lessons
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
              <div className="w-[91%] ml-12 mt-2">
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
              <div className="w-[91%] ml-12 mt-2">
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
              <div className="w-[91%] ml-12 mt-2">
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
              <div className="w-[91%] ml-12 mt-2">
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
              <div className="w-[91%] ml-12 mt-2">
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
              <div className="w-[91%] ml-12 mt-2">
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
              <div className="w-[91%] ml-12 mt-2">
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
              <div className="w-[91%] ml-12 mt-2">
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
              <div className="w-[91%] ml-12 mt-2">
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
              <div className="w-[91%] ml-12 mt-2">
                <ProgressBar
                  completed={60}
                  completedClassName="bg-blue-600 rounded-full w-[60%] text-right h-[15px] text-xs"
                  barContainerClassName="bg-blue-200 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
