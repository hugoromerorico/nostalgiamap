'use client'

import { useState } from 'react'
import YearSelector from '@/components/YearSelector'
import Map from '@/components/Map'
import TrendDisplay from '@/components/TrendDisplay'

export default function Home() {
  const [selectedYear, setSelectedYear] = useState(2000)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <h1 className="text-5xl font-bold mb-8 text-center">inmy10s</h1>
      <YearSelector onYearChange={setSelectedYear} />
      <Map />
      <TrendDisplay selectedYear={selectedYear} />
    </main>
  )
}
