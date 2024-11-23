'use client'

import { useState, useEffect } from 'react'
import { yearData, TrendItem as TrendItemType } from '@/data/yearData'
import TrendItem from './TrendItem'
import { useVotes } from '@/hooks/useVotes'

interface TrendWithVotes extends TrendItemType {
  upvotes: number;
  downvotes: number;
}

export default function TrendDisplay({ selectedYear }: { selectedYear: number }) {
  const [trends, setTrends] = useState<TrendWithVotes[]>([])
  const { getVotes, updateVote } = useVotes()

  useEffect(() => {
    const loadTrendsWithVotes = async () => {
      const yearTrends = yearData[selectedYear] || []
      const trendsWithVotes = await Promise.all(
        yearTrends.map(async (trend) => {
          const votes = await getVotes(trend.id)
          return { ...trend, ...votes }
        })
      )
      setTrends(trendsWithVotes)
    }

    loadTrendsWithVotes()
  }, [selectedYear])

  const handleVote = async (id: string, isUpvote: boolean) => {
    const newVotes = await updateVote(id, isUpvote)
    setTrends(prevTrends =>
      prevTrends.map(trend =>
        trend.id === id ? { ...trend, ...newVotes } : trend
      )
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {trends
        .sort((a, b) => (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes))
        .map((trend) => (
          <TrendItem
            key={trend.id}
            id={trend.id}
            name={trend.name}
            image={trend.image}
            upvotes={trend.upvotes}
            downvotes={trend.downvotes}
            onVote={handleVote}
          />
        ))}
    </div>
  )
}
