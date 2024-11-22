import axios from 'axios'

export default function Home() {
  async function handleSaveModuleToDatabase() {
    const response = await axios.post('http://localhost:5000/api/modules/add', {
      name: 'rosa',
    })
    const result = await response.data
    console.log(result)
  }

  return (
    <div>
      <h1>Home</h1>
      <button
        className="p-8 bg-black text-white mt-10"
        onClick={handleSaveModuleToDatabase}
      >
        Add User
      </button>
    </div>
  )
}
