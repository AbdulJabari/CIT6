import { useNavigate } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { beginnerDemos } from '../../demoVideos'

export default function Demos() {
  console.log(beginnerDemos)
  const navigate = useNavigate()
  return (
    <div className="font-sans mt-12 w-[95vw] h-[100vh]  flex-col p-3 pl-10 ">
      <h1 className="mt-4 text-green-600 font-bold text-3xl  mb-2 tracking-wider">
        Beginner Demos
      </h1>
      <div className="w-[90%] h-[2px] border border-green-600"></div>
      <div className="flex items-center gap-5 mt-10 pl-8">
        {beginnerDemos.map((demo) => {
          return (
            <div
              className="w-[20%] h-[10%] flex flex-col  border-2 border-green-600 rounded-lg p-3"
              key={demo.id}
            >
              <h3 className="font-bold text-green-600">{demo.title}</h3>
              <p className="mb-0 -mt-1">11/3/2024</p>
              <p className="text-sm -mt-0 mb-3">{demo.duration}</p>
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
                className="text-left bg-green-600 w-36   p-2 rounded-lg text-md text-white flex items-center gap-2 pl-3 hover:animate-bounce active:animate-ping"
                onClick={() =>
                  navigate(`/demos/${demo.id}`, { state: { demo } })
                }
              >
                Watch video
                <FaArrowRight />
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
