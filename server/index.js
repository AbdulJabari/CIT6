const express = require('express')
const cors = require('cors')
const moduleRouter = require('./route/blog-route')

require('./db')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/modules/', moduleRouter)

app.use('/api', (req, res) => {
  res.send('Hello World')
})

app.listen(5000, () => console.log('App is Running at 5000'))
