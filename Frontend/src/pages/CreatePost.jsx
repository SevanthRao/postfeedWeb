import axios from "axios"
import { useNavigate } from "react-router-dom"

const CreatePost = () => {

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

      const formData = new FormData(e.target) 

      axios.post('http://localhost:3000/create-post', formData)
      .then(response =>{
        navigate('/feed')
      })
      .catch(error => {
        console.error('Error creating post:', error)
      })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-300">
      <section className="bg-white shadow-md rounded-4xl p-6 max-w-md w-full">
        <h1 className="text-4xl font-bold text-center mb-4">Create Post</h1>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="mb-2 font-semibold">Upload Image</label>
          <input type="file" name="image" className="mb-4 border border-gray-300 rounded p-2" />

          <label className="mb-2 font-semibold">Caption</label>
          <input type="text" name="caption" placeholder='Enter your caption...' className="mb-4 border border-gray-300 rounded p-2" />

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded transition duration-200">
            Submit
          </button>
        </form>
      </section>

      <div className="text-center mt-8">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded transition duration-200"
          onClick={() => navigate('/feed')}
        >
          Navigate to Feed
        </button>
      </div>
    </div>
  )
}

export default CreatePost