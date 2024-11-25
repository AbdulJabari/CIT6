const express = require('express')
const topicRouter = express.Router()
const {
  fetchListOfTopics,
  addNewTopic,
  deleteATopic,
  generateComponent,
} = require('../controller/topic-controller')

topicRouter.get('/', fetchListOfTopics)
topicRouter.post('/add', addNewTopic)
topicRouter.delete('/delete/:id', deleteATopic)
topicRouter.post('/generate-component', generateComponent)

module.exports = topicRouter
