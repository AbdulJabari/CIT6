import { useContext, useState } from 'react'
import './modal.css'
import { GlobalContext } from '../../context/GlobalState'

const AddingNewLesson = ({ onClose }) => {
  const [title, setTitle] = useState('')
  const [keywords, setKeywords] = useState('')
  const [description, setDescription] = useState('')
  const { handleAddNewModule } = useContext(GlobalContext)

  function handleSubmit(e) {
    e.preventDefault()
    let keywords_split = keywords.split(',')

    handleAddNewModule(title, keywords_split, description)
  }

  return (
    <div className="fixed z-100 p-[150px] left-0 top-0 w-full h-full modal overflow-hidden">
      <div className="relative bg-white m-auto p-8  border-red-800 rounded-lg border-2 w-[60%] modal-content">
        <span
          onClick={onClose}
          className="cursor-pointer text-4xl font-bold ml-[690px]"
        >
          &times;
        </span>
        <form className="flex flex-col mt-6" action="">
          <label className="text-2xl font-bold mb-8" htmlFor="title">
            Please enter the title of the new module to be added:
            <input
              className="w-full text-xl border-2 border-gray-400 rounded-md pl-4 p-2"
              id="title"
              name="title"
              type="text"
              placeholder="e.g. Types of Blockchain"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label className="text-2xl font-bold mb-8" htmlFor="keywords">
            Please enter the keywords and separate them by comma:
            <input
              className="w-full text-xl border-2 border-gray-400 rounded-md pl-4 p-2"
              id="keywords"
              name="keywords"
              type="text"
              placeholder="e.g. proof of work, decentralization, cryptography"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
            />
          </label>
          <label className="text-2xl font-bold " htmlFor="description">
            Enter atleast 1 sentence or short description about the new module:
            <input
              className="w-full text-xl border-2 border-gray-400 rounded-md pl-4 p-2"
              id="description"
              name="description"
              type="text"
              placeholder="e.g. There are 4 types of blockchain namely private,public....."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <button
            type="submit"
            className="rounded-lg border-x-green-700 border-2 p-3 px-8 bg-green-700 mt-7 text-white font-bold text-lg block mx-auto"
            onClick={(e) => {
              handleSubmit(e)
              onClose()
            }}
          >
            Add new module
          </button>
        </form>
      </div>
    </div>
  )
}
export default AddingNewLesson
