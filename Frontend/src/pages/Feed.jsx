import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const Feed = () => {

  const navigate = useNavigate()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/posts')
    .then(response => {
      console.log('Fetched posts:', response.data)
      setPosts(response.data.posts)
    })
    .catch(error => {
      console.error('Error fetching posts:', error)
    })
  },[])

  return (
    <div className="min-h-screen bg-cyan-200 py-8 ">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-white bg-blue-900 rounded-3xl text-center mb-8">Feed</h1>
        {
          posts.length > 0 ? (
            <div className="space-y-6">
              {posts.map((post) => (
                <div key={post._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <img src={post.image} alt={post.caption} className="w-full h-64 object-cover" />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-900">{post.caption}</h2>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-16 text-lg">No posts to display</p>
          )
        }
      </div>

      <div className="text-center mt-8">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded transition duration-200"
          onClick={() => navigate('/create-post')}
        >
          Navigate to Create Post
        </button>
      </div>
    </div>
  )
}

export default Feed