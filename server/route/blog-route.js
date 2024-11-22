const express = require('express')
const moduleRouter = express.Router()

const {
  fetchListOfModules,
  addNewModule,
  updateAModule,
} = require('../controller/module-controller')

moduleRouter.get('/', fetchListOfModules)
moduleRouter.post('/add', addNewModule)
moduleRouter.put('/update/:id', updateAModule)

module.exports = moduleRouter
