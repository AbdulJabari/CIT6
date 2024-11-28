const OpenAI = require('openai')

const openai = new OpenAI({})

const getAiResponse = async (req, res) => {
  const { wrongAnswers } = req.body

  // console.log(
  //   'These are the wrongAnswers: ',
  //   JSON.stringify(wrongAnswers, null, 2)
  // )

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: 'You are a helpful assistant',
      },
      {
        role: 'user',
        content: `In the wrongAnswers property why do you think that the answer in each question is not the right answer. Store your explanation in this array by putting an explanation property in each object and kindly answer it in 2 or 3 sentences. Kindly store it in this array by putting an "explanation" property and the value of it your answer or explanation to each question ${JSON.stringify(
          wrongAnswers,
          null,
          2
        )}`,
      },
    ],
    model: 'gpt-4o',
  })
  const apiResponse = completion.choices[0].message.content

  console.log('This is the apiResponse: ', apiResponse)

  const cleanedJsonString = apiResponse.match(/\[.*\]/s)?.[0]

  if (cleanedJsonString) {
    try {
      const jsonArray = JSON.parse(cleanedJsonString)
      res.json(jsonArray)
    } catch (error) {
      console.error('Invalid JSON after cleaning:', error)
    }
  } else {
    console.error('No JSON array found in the response.')
  }
}

module.exports = {
  getAiResponse,
}
