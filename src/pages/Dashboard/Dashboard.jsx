import ProgressBar from '@ramonak/react-progress-bar'
import RadialBarAnalytics from '../../components/RadialBarAnalytics/RadialBarAnalytics'

export default function Dashboard() {
  return (
    <div className="mt-20 ml-8 w-auto h-full overflow-x-hidden gap-x-0">
      <h1 className="mt-4 text-red-900 font-bold text-4xl  mb-2 tracking-wider ">
        User Data Analytics
      </h1>
      <div className="w-[92%] h-[2px] border border-red-900 mt-3 mb-7"></div>

      <div className="w-full h-full flex flex-wrap gap-20 ml-6 relative mb-20">
        <div className="w-[650px] h-[500px] bg-gray-200 rounded-3xl">
          <h3 className="text-center font-bold text-3xl mt-6">
            Completed Lessons Summary
          </h3>
          <div className="relative left-32">
            <RadialBarAnalytics completed={10} notComplete={35} />
          </div>
          <div className="w-full h-[2px] bg-black"></div>
          <div className="absolute w-[0.1rem] h-[11%] bg-black left-80"></div>
          <div className="w-full h-auto flex gap-3 justify-around mt-12 ">
            <div className="text-center -mt-6">
              <h3 className="text-xl font-bold">Completed</h3>
              <h4 className="text-4xl">10</h4>
            </div>
            <div className="text-center -mt-6">
              <h3 className="text-xl font-bold">Not Completed</h3>
              <h4 className="text-4xl">35</h4>
            </div>
          </div>
        </div>
        <div className="w-[650px] h-[500px] bg-gray-200 rounded-3xl">
          <h3 className="text-center font-bold text-3xl mt-6">
            Time Spent & Quiz Scores
          </h3>
          <div>
            <div className="flex justify-between items-center px-12">
              <div>
                <p className="opacity-0">.</p>
                <p className="mt-0">Introduction to Blockchain</p>
              </div>
              <div className="mt-0">
                <p>4/7</p>
                <p className="mt-0">00:03:23</p>
              </div>
            </div>
            <div className="w-[84%] ml-12 mt-2">
              <ProgressBar
                completed={60}
                completedClassName="bg-blue-600 rounded-full w-[60%] text-right h-[20px] text-sm"
                barContainerClassName="bg-blue-200 rounded-full"
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center px-12">
              <div>
                <p className="opacity-0">.</p>
                <p className="mt-0">Introduction to Blockchain</p>
              </div>
              <div className="mt-0">
                <p>4/7</p>
                <p className="mt-0">00:03:23</p>
              </div>
            </div>
            <div className="w-[84%] ml-12 mt-2">
              <ProgressBar
                completed={60}
                completedClassName="bg-blue-600 rounded-full w-[60%] text-right h-[20px] text-sm"
                barContainerClassName="bg-blue-200 rounded-full"
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center px-12">
              <div>
                <p className="opacity-0">.</p>
                <p className="mt-0">Introduction to Blockchain</p>
              </div>
              <div className="mt-0">
                <p>4/7</p>
                <p className="mt-0">00:03:23</p>
              </div>
            </div>
            <div className="w-[84%] ml-12 mt-2">
              <ProgressBar
                completed={60}
                completedClassName="bg-blue-600 rounded-full w-[60%] text-right h-[20px] text-sm"
                barContainerClassName="bg-blue-200 rounded-full"
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center px-12">
              <div>
                <p className="opacity-0">.</p>
                <p className="mt-0">Introduction to Blockchain</p>
              </div>
              <div className="mt-0">
                <p>4/7</p>
                <p className="mt-0">00:03:23</p>
              </div>
            </div>
            <div className="w-[84%] ml-12 mt-2">
              <ProgressBar
                completed={60}
                completedClassName="bg-blue-600 rounded-full w-[60%] text-right h-[20px] text-sm"
                barContainerClassName="bg-blue-200 rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="w-[650px] h-[500px] bg-gray-200 rounded-3xl">
          <h3 className="text-left font-bold text-3xl mt-6 ml-8">
            Struggling with these lessons
          </h3>
          <div>
            <div className="flex justify-between items-center px-12">
              <div>
                <p className="opacity-0">.</p>
                <p className="mt-0">Introduction to Blockchain</p>
              </div>
              <div className="mt-0">
                <p>4/7</p>
                <p className="mt-0">00:03:23</p>
              </div>
            </div>
            <div className="w-[84%] ml-12 mt-2">
              <ProgressBar
                completed={60}
                completedClassName="bg-blue-600 rounded-full w-[60%] text-right h-[20px] text-sm"
                barContainerClassName="bg-blue-200 rounded-full"
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center px-12">
              <div>
                <p className="opacity-0">.</p>
                <p className="mt-0">Introduction to Blockchain</p>
              </div>
              <div className="mt-0">
                <p>4/7</p>
                <p className="mt-0">00:03:23</p>
              </div>
            </div>
            <div className="w-[84%] ml-12 mt-2">
              <ProgressBar
                completed={60}
                completedClassName="bg-blue-600 rounded-full w-[60%] text-right h-[20px] text-sm"
                barContainerClassName="bg-blue-200 rounded-full"
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center px-12">
              <div>
                <p className="opacity-0">.</p>
                <p className="mt-0">Introduction to Blockchain</p>
              </div>
              <div className="mt-0">
                <p>4/7</p>
                <p className="mt-0">00:03:23</p>
              </div>
            </div>
            <div className="w-[84%] ml-12 mt-2">
              <ProgressBar
                completed={60}
                completedClassName="bg-blue-600 rounded-full w-[60%] text-right h-[20px] text-sm"
                barContainerClassName="bg-blue-200 rounded-full"
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center px-12">
              <div>
                <p className="opacity-0">.</p>
                <p className="mt-0">Introduction to Blockchain</p>
              </div>
              <div className="mt-0">
                <p>4/7</p>
                <p className="mt-0">00:03:23</p>
              </div>
            </div>
            <div className="w-[84%] ml-12 mt-2">
              <ProgressBar
                completed={60}
                completedClassName="bg-blue-600 rounded-full w-[60%] text-right h-[20px] text-sm"
                barContainerClassName="bg-blue-200 rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="w-[650px] h-[500px] bg-gray-200 rounded-3xl">
          <h3 className="text-left font-bold text-3xl mt-6 ml-8">
            Excelling with these lesson
          </h3>
          <div>
            <div className="flex justify-between items-center px-12">
              <div>
                <p className="opacity-0">.</p>
                <p className="mt-0">Introduction to Blockchain</p>
              </div>
              <div className="mt-0">
                <p>4/7</p>
                <p className="mt-0">00:03:23</p>
              </div>
            </div>
            <div className="w-[84%] ml-12 mt-2">
              <ProgressBar
                completed={60}
                completedClassName="bg-blue-600 rounded-full w-[60%] text-right h-[20px] text-sm"
                barContainerClassName="bg-blue-200 rounded-full"
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center px-12">
              <div>
                <p className="opacity-0">.</p>
                <p className="mt-0">Introduction to Blockchain</p>
              </div>
              <div className="mt-0">
                <p>4/7</p>
                <p className="mt-0">00:03:23</p>
              </div>
            </div>
            <div className="w-[84%] ml-12 mt-2">
              <ProgressBar
                completed={60}
                completedClassName="bg-blue-600 rounded-full w-[60%] text-right h-[20px] text-sm"
                barContainerClassName="bg-blue-200 rounded-full"
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center px-12">
              <div>
                <p className="opacity-0">.</p>
                <p className="mt-0">Introduction to Blockchain</p>
              </div>
              <div className="mt-0">
                <p>4/7</p>
                <p className="mt-0">00:03:23</p>
              </div>
            </div>
            <div className="w-[84%] ml-12 mt-2">
              <ProgressBar
                completed={60}
                completedClassName="bg-blue-600 rounded-full w-[60%] text-right h-[20px] text-sm"
                barContainerClassName="bg-blue-200 rounded-full"
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center px-12">
              <div>
                <p className="opacity-0">.</p>
                <p className="mt-0">Introduction to Blockchain</p>
              </div>
              <div className="mt-0">
                <p>4/7</p>
                <p className="mt-0">00:03:23</p>
              </div>
            </div>
            <div className="w-[84%] ml-12 mt-2">
              <ProgressBar
                completed={60}
                completedClassName="bg-blue-600 rounded-full w-[60%] text-right h-[20px] text-sm"
                barContainerClassName="bg-blue-200 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
