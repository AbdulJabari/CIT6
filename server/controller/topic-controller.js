const mongoose = require('mongoose')
const Topics = require('../model/Topics')
const { beginnerModules } = require('./beginnerModules')

const fs = require('fs')
const path = require('path')
// ../../client/src/pages/Topics/
const generateComponent = (req, res) => {
  const { componentName, id } = req.body
  if (!componentName) {
    return res.status(400).send('Component name is required')
  }

  const dirPath = path.resolve('../client/src/pages/Topics/Beginner')
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }

  const filePath = path.join(dirPath, `${componentName}.jsx`)
  const componentContent = `
import React from 'react';

const ${componentName} = () => {
    return (
        <div>
            <h1>Hello, ${componentName}!</h1>
        </div>
    );
};

export default ${componentName};
`

  fs.writeFile(filePath, componentContent, (err) => {
    if (err) {
      return res.status(500).send('Error creating file')
    }
    res.send('Component created successfully')
  })

  // Path to the file
  const filePath2 = path.join('../client/src/', 'App.js')

  // New code to append
  const newRoute = `
      <Route path="/modules/${id}" element={<${componentName} />} />
`
  // Import statement to add
  const importStatement = `import ${componentName} from './pages/Topics/Beginner/${componentName}';\n`

  try {
    // Read the file content
    let fileContent = fs.readFileSync(filePath2, 'utf8')

    // Step 1: Add the import statement at the top of the file
    if (!fileContent.includes(importStatement)) {
      const firstImportIndex = fileContent.indexOf('import ')
      const nextLineIndex = fileContent.indexOf('\n', firstImportIndex)
      fileContent = `${fileContent.slice(
        0,
        nextLineIndex + 1
      )}${importStatement}${fileContent.slice(nextLineIndex + 1)}`
      console.log('Import statement added.')
    } else {
      console.log('Import statement already exists.')
    }

    // Step 2: Add the new route under the `<Routes>` tag
    const routesTag = '<Routes>'
    if (fileContent.includes(routesTag)) {
      fileContent = fileContent.replace(routesTag, `${routesTag}\n${newRoute}`)
      console.log('New route added under <Routes>.')
    } else {
      console.log('The <Routes> tag was not found in the file.')
    }

    // Write the updated content back to the file
    fs.writeFileSync(filePath2, fileContent, 'utf8')
    console.log('App.js updated successfully!')
  } catch (error) {
    console.error('An error occurred:', error.message)
  }
}

const seedModules = async () => {
  try {
    // Check if modules already exist
    const existingModules = await Topics.find()
    if (existingModules.length > 0) {
      console.log('Modules already seeded. No action needed.')
      return
    }

    // Insert modules
    await Topics.insertMany(beginnerModules)
    console.log('Modules seeded successfully!')
  } catch (error) {
    console.error('Error seeding modules:', error)
  }
}

const fetchListOfTopics = async (req, res) => {
  console.log('fetchListOfTopics executed')
  let topicList
  try {
    topicList = await Topics.find()
  } catch (e) {
    console.log(e)
  }

  if (!topicList) {
    return res.status(404).json({ message: 'No Topics Found' })
  }
  return res.status(200).json({ topicList })
}

const addNewTopic = async (req, res) => {
  console.log('addNewTopic executed')
  const { id, name, keywords, desc, passingScore, duration } = req.body

  const newlyCreatedTopic = new Topics({
    id,
    name,
    keywords,
    desc,
    passingScore,
    duration,
  })
  try {
    await newlyCreatedTopic.save()
  } catch (e) {
    console.log(e)
  }

  try {
    const session = await mongoose.startSession()
    session.startTransaction()
    await newlyCreatedTopic.save(session)
    session.commitTransaction()
  } catch (e) {
    console.log(e)
  }

  return res.status(200).json({ newlyCreatedTopic })
}

const deleteATopic = async (req, res) => {
  console.log('Delete A Topic executed!!')
  const id = req.params.id
  const moduleId = req.query.moduleId

  try {
    const findCurrentTopic = await Topics.findByIdAndDelete(id)
    if (!findCurrentTopic) {
      return res.status(404).json({ message: 'Blog not found' })
    }

    //Removing the import and export of the Topic to be deleted
    // Path to the file
    const filePath = path.join('../client/src/', 'App.js')

    // Define the patterns or text to identify lines to delete
    const patternToDelete =
      "import Topic4 from './pages/Topics/Beginner/Topic4'"
    const patternToDelete2 = `<Route path="/modules/${moduleId}" element={<Topic${moduleId} />} />`

    try {
      // Step 1: Read the file content
      const fileContent = fs.readFileSync(filePath, 'utf8')

      // Step 2: Split content into lines and filter out lines matching the first pattern
      let updatedContent = fileContent
        .split('\n') // Split into lines
        .filter((line) => !line.includes(patternToDelete)) // Remove matching lines
        .join('\n') // Rejoin the lines into a single string

      // Step 3: Further filter the updated content for the second pattern
      updatedContent = updatedContent
        .split('\n') // Split into lines again
        .filter((line) => !line.includes(patternToDelete2)) // Remove matching lines
        .join('\n') // Rejoin the lines into a single string

      // Step 4: Write the updated content back to the file
      fs.writeFileSync(filePath, updatedContent, 'utf8')
      console.log('Lines matching the patterns were deleted successfully!')
    } catch (error) {
      console.error('An error occurred:', error)
    }

    fs.unlinkSync(`../client/src/pages/Topics/Beginner/Topic${moduleId}.jsx`)
    return res.status(200).json({ message: 'Successfully Deleted' })
  } catch (e) {
    console.log(e)
    return res
      .status(500)
      .json({ message: 'Unable to delete ! Please try again' })
  }
}

module.exports = {
  seedModules,
  fetchListOfTopics,
  addNewTopic,
  deleteATopic,
  generateComponent,
}
