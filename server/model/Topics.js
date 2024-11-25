const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuestionSchema = new Schema({
  question: { type: String },
  choices: { type: [String] },
  answer: { type: String },
})

const TopicListSchema = new Schema({
  id: { type: String, default: 0, unique: true },
  name: { type: String, required: true },
  keywords: { type: [String], required: true },
  desc: { type: String, required: true },
  passingScore: { type: Number, default: 0 },
  duration: { type: Number, required: true },
  questions: {
    type: [QuestionSchema],
    default: [{ question: '', choices: [''], answer: '' }],
  },
})

module.exports = mongoose.model('Topics', TopicListSchema)
