'use client'

import { useState } from 'react'

const countries = ['Spain', 'France', 'Germany', 'Italy', 'UK']

export default function Map() {
  const [selectedCountry, setSelectedCountry] = useState('')

  return (
    <div className="mb-8">
      <h2 className="text-2xl mb-4">Select a Country</h2>
      <div className="flex flex-wrap gap-2">
        {countries.map(country => (
          <button
            key={country}
            onClick={() => setSelectedCountry(country)}
            className={`px-4 py-2 rounded ${
              selectedCountry === country ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
            }`}
          >
            {country}
          </button>
        ))}
      </div>
    </div>
  )
}
