import ProgressBar from '@ramonak/react-progress-bar'
import { GlobalContext } from '../../context/GlobalState'
import { useContext } from 'react'

// import ProgressBar from '../ProgressBar/ProgressBar'

const StatsBar = ({ stat, color, size }) => {
  const { timeFormat } = useContext(GlobalContext)
  const { quizScore, quizLength, timeCompleted, moduleName } = stat
  const quizProgress = Math.floor((quizScore / quizLength) * 100).toFixed(0)
  return (
    <div>
      <div className="flex justify-between items-center px-12">
        <div>
          <p className="opacity-0 text-xs">.</p>
          <p className="mt-0">{moduleName}</p>
        </div>
        <div className="mt-0 ">
          <p>{`${quizScore}/${quizLength}`}</p>
          <p className="mt-0">{timeFormat(timeCompleted)}</p>
        </div>
      </div>
      <div className={`w-[82%] ml-12 mt-2`}>
        <ProgressBar
          completed={`${quizProgress}`}
          maxCompleted={'100'}
          customLabel={`${quizProgress}%`}
          width={size === 'small' ? '100%' : '111%'}
          bgColor={`${color}`}
          animateOnRender
          // completedClassName={`bg-blue-600 rounded-full w-[${quizProgress}%] text-right h-[15px] text-xs`}
          // barContainerClassName={`bg-gray-300 rounded-full`}
        />
        {/* <ProgressBar
          bgColor={`${}`}
          progress={`${quizProgress}`}
          height={20}
        /> */}
      </div>
    </div>
  )
}
export default StatsBar
//[Math.floor((completed / stats.length) * 100).toFixed(2)]
