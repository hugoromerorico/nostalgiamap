'use client'

import YearSelector from '@/components/YearSelector'
import Map from '@/components/Map'
import TrendDisplay from '@/components/TrendDisplay'

export function BlockPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">inmy10s</h1>
      <YearSelector />
      <Map />
      <TrendDisplay />
    </main>
  )
}