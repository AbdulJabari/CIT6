import ProgressBar from '@ramonak/react-progress-bar'

const StatsBar = ({ stat }) => {
  const { title, quizScore, quizLength, timeCompleted, moduleName } = stat
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
          <p className="mt-0">{timeCompleted}</p>
        </div>
      </div>
      <div className="w-[82%] ml-12 mt-2">
        <ProgressBar
          completed={`${quizProgress}%`}
          completedClassName={`bg-blue-600 rounded-full w-[${quizProgress}%] text-right h-[15px] text-xs`}
          barContainerClassName="bg-blue-200 rounded-full"
        />
      </div>
    </div>
  )
}
export default StatsBar
//[Math.floor((completed / stats.length) * 100).toFixed(2)]
