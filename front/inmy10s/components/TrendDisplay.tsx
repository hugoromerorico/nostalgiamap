'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { yearData, TrendItem } from '@/data/yearData'
import { Button } from '@/components/ui/button'
import { ThumbsUp, ThumbsDown } from 'lucide-react'

interface TrendWithVotes extends TrendItem {
  votes: number;
}

export default function TrendDisplay({ selectedYear }: { selectedYear: number }) {
  const [trends, setTrends] = useState<TrendWithVotes[]>([])

  useEffect(() => {
    const yearTrends = yearData[selectedYear] || []
    const newTrends = yearTrends.map(trend => ({ ...trend, votes: 0 }))
    setTrends(newTrends)
  }, [selectedYear])

  const handleVote = (index: number, increment: number) => {
    setTrends(prevTrends =>
      prevTrends.map((trend, i) =>
        i === index ? { ...trend, votes: trend.votes + increment } : trend
      )
    )
  }

  if (!trends.length) {
    return <div>No trends found for {selectedYear}</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {trends.sort((a, b) => b.votes - a.votes).map((trend, index) => (
        <div key={`${trend.name}-${selectedYear}`} className="bg-card text-card-foreground p-6 rounded-lg shadow-md retro-shadow">
          <Image src={trend.image} alt={trend.name} width={200} height={200} className="mb-4 rounded mx-auto" />
          <h3 className="text-xl mb-2 text-center">{trend.name}</h3>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">Votes: {trend.votes}</span>
            <div className="space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleVote(index, 1)}
                className="bg-green-500 text-white hover:bg-green-600"
              >
                <ThumbsUp className="h-4 w-4 mr-1" />
                Up
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleVote(index, -1)}
                className="bg-red-500 text-white hover:bg-red-600"
              >
                <ThumbsDown className="h-4 w-4 mr-1" />
                Down
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
