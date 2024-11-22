import ReactPlayer from 'react-player'
import { beginnerDemos } from '../../demoVideos'
import { useLocation } from 'react-router-dom'

export default function DemoVideo1() {
  const location = useLocation()
  const { demo } = location.state

  return (
    <div className="pl-20 pt-24 flex">
      <div className="w-[69%]">
        <ReactPlayer url={demo.link} width="1000px" height="540px" controls />
        <h2 className="mt-4 font-bold text-2xl">Introduction to blockchain</h2>
        <p className="mt-0">11/04/2024</p>
        <p className="w-[95%] mb-8">{demo.description}</p>
      </div>
      <div>
        <ul>
          <h2 className="text-green-600">Beginner Demos</h2>
          <div className="w-[90%] h-[2px] border border-green-600 mb-3"></div>

          <li className="flex mb-2">
            <img
              className="w-[11rem] h-[6rem] rounded-lg"
              src={`${process.env.PUBLIC_URL}/images/blockchain.jpg`}
              alt="blockchain"
            />
            <h4 className="ml-2">Title</h4>
            <p className="text-black -ml-7">Date</p>
          </li>
          <li className="flex mb-2">
            <img
              className="w-[11rem] h-[6rem] rounded-lg"
              src={`${process.env.PUBLIC_URL}/images/blockchain.jpg`}
              alt="blockchain"
            />
            <h4 className="ml-2">Title</h4>
            <p className="text-black -ml-7">Date</p>
          </li>
          <h2 className="text-yellow-600">Intermediate Demos</h2>
          <div className="w-[90%] h-[2px] border border-yellow-600 mb-3"></div>
          <li className="flex mb-2">
            <img
              className="w-[11rem] h-[6rem] rounded-lg"
              src={`${process.env.PUBLIC_URL}/images/blockchain.jpg`}
              alt="blockchain"
            />
            <h4 className="ml-2">Title</h4>
            <p className="text-black -ml-7">Date</p>
          </li>
          <li className="flex mb-2">
            <img
              className="w-[11rem] h-[6rem] rounded-lg"
              src={`${process.env.PUBLIC_URL}/images/blockchain.jpg`}
              alt="blockchain"
            />
            <h4 className="ml-2">Title</h4>
            <p className="text-black -ml-7">Date</p>
          </li>
          <li className="flex mb-2">
            <img
              className="w-[11rem] h-[6rem] rounded-lg"
              src={`${process.env.PUBLIC_URL}/images/blockchain.jpg`}
              alt="blockchain"
            />
            <h4 className="ml-2">Title</h4>
            <p className="text-black -ml-7">Date</p>
          </li>
          <li className="flex mb-2">
            <img
              className="w-[11rem] h-[6rem] rounded-lg"
              src={`${process.env.PUBLIC_URL}/images/blockchain.jpg`}
              alt="blockchain"
            />
            <h4 className="ml-2">Title</h4>
            <p className="text-black -ml-7">Date</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
