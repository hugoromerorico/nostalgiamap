'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { yearData, TrendItem } from '@/data/yearData'
import { Button } from '@/components/ui/button'
import { ThumbsUp, ThumbsDown, Plus } from 'lucide-react'
import { useUserPoints } from '@/contexts/UserPointsContext'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface TrendWithVotes extends TrendItem {
  votes: number;
}

export default function TrendDisplay({ selectedYear }: { selectedYear: number }) {
  const [trends, setTrends] = useState<TrendWithVotes[]>([])
  const { points, usePoints } = useUserPoints()
  const [newItemName, setNewItemName] = useState('')
  const [newItemImage, setNewItemImage] = useState('')

  useEffect(() => {
    const yearTrends = yearData[selectedYear] || []
    setTrends(yearTrends.map(trend => ({ ...trend, votes: 0 })))
  }, [selectedYear])

  const handleVote = (index: number, increment: number) => {
    if (usePoints(1)) {
      setTrends(prevTrends =>
        prevTrends.map((trend, i) =>
          i === index ? { ...trend, votes: trend.votes + increment } : trend
        )
      )
    } else {
      alert("You don't have enough points to vote!")
    }
  }

  const handleAddNewItem = () => {
    if (usePoints(10)) {
      const newItem: TrendWithVotes = {
        name: newItemName,
        image: newItemImage || '/placeholder.svg?height=200&width=200',
        votes: 1
      }
      setTrends(prevTrends => [...prevTrends, newItem])
      setNewItemName('')
      setNewItemImage('')
    } else {
      alert("You don't have enough points to add a new item!")
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Trends for {selectedYear}</h2>
        <div className="flex items-center space-x-4">
          <span className="text-lg font-semibold">Points: {points}</span>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Plus className="mr-2 h-4 w-4" /> Add New Item
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Item (10 points)</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={newItemName}
                    onChange={(e) => setNewItemName(e.target.value)}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="image" className="text-right">
                    Image URL
                  </Label>
                  <Input
                    id="image"
                    value={newItemImage}
                    onChange={(e) => setNewItemImage(e.target.value)}
                    className="col-span-3"
                  />
                </div>
              </div>
              <Button onClick={handleAddNewItem}>Add Item</Button>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trends.sort((a, b) => b.votes - a.votes).map((trend, index) => (
          <div key={trend.name} className="bg-card text-card-foreground p-6 rounded-lg shadow-md retro-shadow">
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
                  Up (1 pt)
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleVote(index, -1)}
                  className="bg-red-500 text-white hover:bg-red-600"
                >
                  <ThumbsDown className="h-4 w-4 mr-1" />
                  Down (1 pt)
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}