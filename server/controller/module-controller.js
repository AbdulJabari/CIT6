const mongoose = require('mongoose')
const Modules = require('../model/Modules')

const fetchListOfModules = async (req, res) => {
  let moduleList
  try {
    moduleList = await Modules.find()
  } catch (e) {
    console.log(e)
  }

  if (!moduleList) {
    return res.status(404).json({ message: 'No Modules Found' })
  }
  return res.status(200).json({ moduleList })
}

const addNewModule = async (req, res) => {
  const { modules, name } = req.body

  const newlyCreatedModule = new Modules({
    name,
    modules,
  })
  try {
    await newlyCreatedModule.save()
  } catch (e) {
    console.log(e)
  }

  try {
    const session = await mongoose.startSession()
    session.startTransaction()
    await newlyCreatedModule.save(session)
    session.commitTransaction()
  } catch (e) {
    console.log(e)
  }

  return res.status(200).json({ newlyCreatedModule })
}

const updateAModule = async (req, res) => {
  const id = req.params.id
  const { modules } = req.body
  let currentModuleToUpdate

  try {
    currentModuleToUpdate = await Modules.findByIdAndUpdate(id, {
      modules,
    })
  } catch (e) {
    console.log(e)

    return res.status(500).json({
      message: 'Something went wrong while updating! Please try again',
    })
  }

  if (!currentModuleToUpdate) {
    return res.status(500).json({ message: 'Unable to Update' })
  }

  return res.status(200).json({ currentModuleToUpdate })
}

module.exports = { fetchListOfModules, updateAModule, addNewModule }
