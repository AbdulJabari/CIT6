const mongoose = require('mongoose')
const Schema = mongoose.Schema

const moduleSchema = new Schema({
  moduleId: {
    type: String,
  },
  moduleName: {
    type: String,
  },
  isFinished: {
    type: Boolean,
    default: false,
  },
  timeCompleted: {
    type: Number,
  },
  quizScore: {
    type: Number,
  },
  quizLength: {
    type: Number,
  },
})

const moduleListSchema = new Schema({
  name: {
    type: String,
  },
  modules: {
    type: [moduleSchema],
    default: [
      {
        moduleId: '1',
        moduleName: 'Introduction to Blockchain',
        isFinished: false,
        timeCompleted: 0,
        quizScore: 0,
        quizLength: 10,
      },
      {
        moduleId: '2',
        moduleName: 'Blockchain Architecture',
        isFinished: false,
        timeCompleted: 0,
        quizScore: 0,
        quizLength: 10,
      },
      {
        moduleId: '3',
        moduleName: 'Introduction to Blockchain',
        isFinished: false,
        timeCompleted: 0,
        quizScore: 0,
        quizLength: 10,
      },
      {
        moduleId: '4',
        moduleName: 'Blockchain Architecture',
        isFinished: false,
        timeCompleted: 0,
        quizScore: 0,
        quizLength: 10,
      },
      {
        moduleId: '5',
        moduleName: 'Blockchain Architecture',
        isFinished: false,
        timeCompleted: 0,
        quizScore: 0,
        quizLength: 10,
      },
      {
        moduleId: '6',
        moduleName: 'Blockchain Architecture',
        isFinished: false,
        timeCompleted: 0,
        quizScore: 0,
        quizLength: 10,
      },
      {
        moduleId: '7',
        moduleName: 'Blockchain Architecture',
        isFinished: false,
        timeCompleted: 0,
        quizScore: 0,
        quizLength: 10,
      },
      {
        moduleId: '8',
        moduleName: 'Blockchain Architecture',
        isFinished: false,
        timeCompleted: 0,
        quizScore: 0,
        quizLength: 10,
      },
    ],
  },
})

module.exports = mongoose.model('Modules', moduleListSchema)
