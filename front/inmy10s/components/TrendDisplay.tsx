'use client'

import { useState } from 'react'
import Image from 'next/image'

const mockTrends = [
  { id: 1, name: 'PlayStation 3', image: '/placeholder.svg?height=200&width=200', votes: 0 },
  { id: 2, name: 'Tamagotchi', image: '/placeholder.svg?height=200&width=200', votes: 0 },
  { id: 3, name: 'Beyblades', image: '/placeholder.svg?height=200&width=200', votes: 0 },
]

export default function TrendDisplay() {
  const [trends, setTrends] = useState(mockTrends)

  const handleVote = (id: number, increment: number) => {
    setTrends(prevTrends =>
      prevTrends.map(trend =>
        trend.id === id ? { ...trend, votes: trend.votes + increment } : trend
      )
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {trends.sort((a, b) => b.votes - a.votes).map(trend => (
        <div key={trend.id} className="bg-card text-card-foreground p-4 rounded-lg shadow-md">
          <Image src={trend.image} alt={trend.name} width={200} height={200} className="mb-4 rounded" />
          <h3 className="text-xl mb-2">{trend.name}</h3>
          <div className="flex justify-between items-center">
            <span>Votes: {trend.votes}</span>
            <div>
              <button
                onClick={() => handleVote(trend.id, 1)}
                className="bg-green-500 text-white px-2 py-1 rounded mr-2"
              >
                👍
              </button>
              <button
                onClick={() => handleVote(trend.id, -1)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                👎
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
