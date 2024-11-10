'use client'

import { useState } from 'react'

export default function YearSelector() {
  const [selectedYear, setSelectedYear] = useState(2010)
  const years = Array.from({length: 24}, (_, i) => 2000 + i)

  return (
    <div className="mb-8">
      <h2 className="text-2xl mb-4">Select a Year</h2>
      <div className="flex flex-wrap gap-2">
        {years.map(year => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`px-4 py-2 rounded ${
              selectedYear === year ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
            }`}
          >
            {year}
          </button>
        ))}
      </div>
    </div>
  )
}
