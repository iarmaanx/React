import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="bg-gray-900 rounded-lg shadow-lg p-8 max-w-sm text-center">
        <img 
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-700" 
          src={data.avatar_url} 
          alt={`${data.name}'s avatar`} 
        />
        <h1 className="text-2xl font-semibold text-white">{data.name || 'No Name'}</h1>
        <p className="text-gray-400">@{data.login}</p>
        <p className="text-gray-400 mt-2">{data.bio || 'No bio available'}</p>

        <div className="flex justify-center mt-4 space-x-6">
          <div className="text-center">
            <h2 className="text-white text-xl font-bold">{data.followers}</h2>
            <p className="text-gray-400">Followers</p>
          </div>
          <div className="text-center">
            <h2 className="text-white text-xl font-bold">{data.following}</h2>
            <p className="text-gray-400">Following</p>
          </div>
          <div className="text-center">
            <h2 className="text-white text-xl font-bold">{data.public_repos}</h2>
            <p className="text-gray-400">Repos</p>
          </div>
        </div>

        <a 
          href={data.html_url} 
          className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          target="_blank" 
          rel="noopener noreferrer"
        >
          View GitHub Profile
        </a>
      </div>
    </div>
  )
}

export default Github

export const githubLoader = async () => {
  const response = await fetch('https://api.github.com/users/iarmaanx')
  return response.json()
}
