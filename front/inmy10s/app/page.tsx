'use client'

import { useState } from 'react'
import YearSelector from '@/components/YearSelector'
import Map from '@/components/Map'
import TrendDisplay from '@/components/TrendDisplay'
import { useUserPoints } from '@/contexts/UserPointsContext'

export default function Home() {
  const [selectedYear, setSelectedYear] = useState(2000)
  const { points, resetPoints } = useUserPoints()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-5xl font-bold">inmy10s</h1>
          <div className="flex items-center space-x-4">
            <span className="text-lg font-semibold">Points: {points}</span>
            <button
              onClick={resetPoints}
              className="px-4 py-2 bg-secondary text-secondary-foreground rounded hover:bg-secondary/80"
            >
              Reset Points
            </button>
          </div>
        </div>
        <YearSelector onYearChange={setSelectedYear} />
        <Map />
        <TrendDisplay selectedYear={selectedYear} />
      </div>
    </main>
  )
}
