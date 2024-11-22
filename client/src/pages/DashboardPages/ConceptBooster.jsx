import ProgressBar from '@ramonak/react-progress-bar'
import {
  FaArrowRight,
  FaBookOpen,
  FaClipboardList,
  FaClock,
  FaLightbulb,
  FaMedal,
} from 'react-icons/fa'
import { FaCircleExclamation } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import DashboardSidebar from '../../components/DashboardSidebar/DashboardSidebar'

const multiplier = ['', '', '', '']

export default function ConceptBooster() {
  const navigate = useNavigate()
  return (
    <div className="mt-20 ml-8 w-auto h-full  gap-x-0">
      <h1 className="mt-4 text-red-900 font-bold text-4xl  mb-2 tracking-wider ">
        User Data Analytics
      </h1>
      <div className="w-[94%] h-[2px] border border-red-900 mt-3 mb-7"></div>
      <div className="flex h-auto w-auto">
        <DashboardSidebar />
        <div className="w-full h-full ml-10 mb-20">
          <h2 className="text-3xl font-bold text-blue-600">Concept Booster</h2>
          <div className="ml-6 mt-8">
            <h3 className=" text-blue-600 text-xl">
              Introduction to Blockchain
            </h3>
            <div className="w-[60rem] h-[2px] bg-blue-600 mt-2"></div>
            <h4 className="font-bold text-md mt-3 ml-4 text-blue-600">
              Reading Materials
            </h4>

            <div className="flex items-center gap-5 mt-10 pl-8">
              {multiplier.map((_, index) => (
                <div
                  key={index}
                  className="w-[20%] h-[10%] flex flex-col gap-5 border-2 border-blue-500 rounded-lg p-3"
                >
                  <div className="w-full h-10 bg-blue-400 text-center pt-2 rounded-t-lg">
                    <h3 className="font-bold">Hatdog Buns</h3>
                  </div>
                  <div className="flex flex-row gap-2 items-center flex-wrap m-0">
                    <div className="w-auto h-auto border-2 rounded-lg p-0.5 border-gray-400  text-[10px] flex-wrap">
                      Hatdog
                    </div>
                    <div className="w-auto h-auto border-2 rounded-lg p-0.5 border-gray-400  text-[10px] flex-wrap">
                      Hatdog
                    </div>
                    <div className="w-auto h-auto border-2 rounded-lg p-0.5 border-gray-400  text-[10px] flex-wrap">
                      Hatdog
                    </div>
                    <div className="w-auto h-auto border-2 rounded-lg p-0.5 border-gray-400  text-[10px] flex-wrap">
                      Hatdog
                    </div>
                  </div>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                    itaque suscipit adipisci tempora eum! Nisi?
                  </p>
                  <button
                    className="text-left bg-blue-500 w-32 p-2 rounded-lg text-xs text-white flex items-center gap-2 pl-3 hover:animate-bounce active:animate-ping font-bold"
                    onClick={() => navigate(`/modules`)}
                  >
                    Dive Into Topic
                    <FaLightbulb />
                  </button>
                </div>
              ))}
            </div>
            <h4 className="font-bold text-md mt-12 ml-4 text-blue-600">
              Video Materials
            </h4>
            <div className="flex items-center gap-5 mt-10 pl-8">
              {multiplier.map((_, index) => (
                <div
                  className="w-[20%] h-[10%] flex flex-col  border-2 border-blue-500 rounded-lg p-3"
                  key={index}
                >
                  <h3 className="font-bold text-blue-500">Footlong</h3>
                  <p className="mb-0 -mt-1">11/3/2024</p>
                  <p className="text-sm -mt-0 mb-3">10mins</p>
                  <img
                    className=""
                    src={`${process.env.PUBLIC_URL}/images/blockchain-demo-video.jpg`}
                    alt=""
                  />
                  <p className="text-sm mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos accusamus assumenda maiores labore quidem!
                  </p>
                  <button
                    className="text-left bg-blue-500 w-36   p-2 rounded-lg text-md text-white flex items-center gap-2 pl-3 hover:animate-bounce active:animate-ping"
                    onClick={() => navigate(`/demos/`)}
                  >
                    Watch video
                    <FaArrowRight />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
