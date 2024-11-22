const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

mongoose
  .connect(
    'mongodb+srv://reacharddeter:V0jdjQxagoeNxRx3@cluster0.tzc3p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(() => console.log('Mongodb is successfully connected'))
  .catch((e) => console.log(e))

// 'mongodb+srv://reacharddeter:V0jdjQxagoeNxRx3@cluster0.tzc3p.mongodb.net/'
