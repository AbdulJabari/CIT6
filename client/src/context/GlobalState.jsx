import { createContext, useEffect, useState } from 'react'
// import { stats } from '../stats'
import { beginnerModules } from '../modules'
import axios from 'axios'

export const GlobalContext = createContext(null)

export default function GlobalState({ children }) {
  const [stats, setStats] = useState([])
  const [userId, setUserId] = useState(null)
  const [loading, setLoading] = useState(false)
  function computeStrugglingLessons() {
    const strugglingLessons = []
    beginnerModules.map((module, index) => {
      if (stats[index].timeCompleted > module.duration) {
        return strugglingLessons.push(stats[index])
      }
    })
    console.log(strugglingLessons)
    return strugglingLessons
  }

  function computeExcellingLessons() {
    const excellingLessons = []
    beginnerModules.map((module, index) => {
      if (stats[index].timeCompleted < module.duration) {
        return excellingLessons.push(stats[index])
      }
    })

    return excellingLessons
  }

  function timeFormat(time) {
    let hours = Math.floor((time / 60 / 60) % 24)
    let minutes = Math.floor((time / 60) % 60)
    let seconds = Math.floor(time % 60)

    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds
    return hours + ':' + minutes + ':' + seconds
  }

  async function fetchListOfModules() {
    setLoading(true)
    const response = await axios.get('http://localhost:5000/api/modules')
    const result = await response.data
    // console.log('These is the result: ', result.moduleList[0].modules)
    if (result && result.moduleList[0] && result.moduleList[0].modules.length) {
      setStats(result.moduleList[0].modules)
      setUserId(result.moduleList[0]._id)
      setLoading(false)
    }
  }

  function handleUpdateTimeFinished(getCurrentId, timeFinished) {
    console.log('Current Id: ', getCurrentId)
    console.log('Current Time: ', timeFinished)
    console.log('These is the stats from DB', stats)
    let cpyStats = [...stats]
    const currentModule = cpyStats.find(
      (stat) => stat.moduleId === getCurrentId
    )
    console.log('This is the current Module we are getting: ', currentModule)
    currentModule.timeCompleted = timeFinished
    currentModule.isFinished = true
    console.log('These is the update Array of Stats', cpyStats)
    console.log('User Id: ', userId)
    handleUpdateAModule(cpyStats)
  }

  function handleUpdateQuizScore(getCurrentId, quizScore) {
    console.log('Current Id: ', getCurrentId)
    console.log('Current Score: ', quizScore)
    console.log('These is the stats from DB', stats)
    let cpyStats = [...stats]
    const currentModule = cpyStats.find(
      (stat) => stat.moduleId === getCurrentId
    )
    console.log('This is the current Module we are getting: ', currentModule)
    currentModule.quizScore = quizScore
    console.log('These is the update Array of Stats', cpyStats)
    handleUpdateAModule(cpyStats)
  }

  async function handleUpdateAModule(modulesUpdated) {
    const response = await axios.put(
      `http://localhost:5000/api/modules/update/${userId}`,
      {
        modules: modulesUpdated,
      }
    )
    const result = await response.data
    console.log(result)
  }

  const completedLessonsCounter =
    stats?.length > 0
      ? stats.reduce((acc, cur) => {
          if (cur.isFinished === true) {
            return acc + 1
          }
          return acc
        }, 0)
      : null

  const strugglingLessons =
    stats?.length > 0 ? computeStrugglingLessons() : null

  const excellingLessons = stats?.length > 0 ? computeExcellingLessons() : null

  useEffect(() => {
    fetchListOfModules()
  }, [])

  console.log('These are the stats: ', stats)

  return (
    <GlobalContext.Provider
      value={{
        strugglingLessons,
        excellingLessons,
        stats,
        loading,
        completedLessonsCounter,
        timeFormat,
        handleUpdateTimeFinished,
        handleUpdateQuizScore,
        fetchListOfModules,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
