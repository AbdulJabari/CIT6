const express = require('express')
const utilsRouter = express.Router()
const { getAiResponse } = require('../controller/utils-controller')

utilsRouter.post('/', getAiResponse)

module.exports = utilsRouter
