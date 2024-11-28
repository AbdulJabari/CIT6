const mongoose = require('mongoose')
const Schema = mongoose.Schema

const answerSchema = new Schema({
  questionNum: {
    type: Number,
  },
  answer: {
    type: String,
  },
})

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
  answersList: {
    type: [answerSchema],
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
        answersList: [
          {
            questionNum: 1,
            answer: '',
          },
          {
            questionNum: 2,
            answer: '',
          },
          {
            questionNum: 3,
            answer: '',
          },
          {
            questionNum: 4,
            answer: '',
          },
          {
            questionNum: 5,
            answer: '',
          },
          {
            questionNum: 6,
            answer: '',
          },
          {
            questionNum: 7,
            answer: '',
          },
          {
            questionNum: 8,
            answer: '',
          },
          {
            questionNum: 9,
            answer: '',
          },
          {
            questionNum: 10,
            answer: '',
          },
        ],
      },
      {
        moduleId: '2',
        moduleName: 'Core Ideas Behind Blockchain Technology',
        isFinished: false,
        timeCompleted: 0,
        quizScore: 0,
        quizLength: 10,
        answersList: [
          {
            questionNum: 1,
            answer: '',
          },
          {
            questionNum: 2,
            answer: '',
          },
          {
            questionNum: 3,
            answer: '',
          },
          {
            questionNum: 4,
            answer: '',
          },
          {
            questionNum: 5,
            answer: '',
          },
          {
            questionNum: 6,
            answer: '',
          },
          {
            questionNum: 7,
            answer: '',
          },
          {
            questionNum: 8,
            answer: '',
          },
          {
            questionNum: 9,
            answer: '',
          },
          {
            questionNum: 10,
            answer: '',
          },
        ],
      },
      {
        moduleId: '3',
        moduleName: 'Cryptography Basics',
        isFinished: false,
        timeCompleted: 0,
        quizScore: 0,
        quizLength: 10,
        answersList: [
          {
            questionNum: 1,
            answer: '',
          },
          {
            questionNum: 2,
            answer: '',
          },
          {
            questionNum: 3,
            answer: '',
          },
          {
            questionNum: 4,
            answer: '',
          },
          {
            questionNum: 5,
            answer: '',
          },
          {
            questionNum: 6,
            answer: '',
          },
          {
            questionNum: 7,
            answer: '',
          },
          {
            questionNum: 8,
            answer: '',
          },
          {
            questionNum: 9,
            answer: '',
          },
          {
            questionNum: 10,
            answer: '',
          },
        ],
      },
    ],
  },
})

module.exports = mongoose.model('Modules', moduleListSchema)
