import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Demos from './pages/Demos'
import Home from './pages/Home'
import Modules from './pages/Modules'
import Topic1 from './pages/Topics/Beginner/Topic1'
import { beginnerModules } from './modules'
import Topic2 from './pages/Topics/Beginner/Topic2'
import { beginnerDemos } from './demoVideos'
import DemoVideo1 from './pages/DemoVideos/DemoVideo1'
import Dashboard from './pages/Dashboard/Dashboard'
import TimeAndScore from './pages/DashboardPages/TimeAndScore'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/demos" element={<Demos />} />
        <Route
          path={`/demos/${beginnerDemos[0].id}`}
          element={<DemoVideo1 />}
        />
        <Route path="/modules" element={<Modules />} />
        <Route
          path={`/modules/${beginnerModules[0].id}`}
          element={<Topic1 />}
        />
        <Route
          path={`/modules/${beginnerModules[1].id}`}
          element={<Topic2 />}
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/dashboard/timespentandquizscore"
          element={<TimeAndScore />}
        />
      </Routes>
    </div>
  )
}

export default App
