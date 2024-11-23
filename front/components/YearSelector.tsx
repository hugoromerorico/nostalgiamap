'use client'

import { useState, useEffect, useRef } from 'react'
import { yearData } from '@/data/yearData'
import { ChevronUp, ChevronDown } from 'lucide-react'

const ITEM_HEIGHT = 60 // Height of each year item in pixels

export default function YearSelector({ onYearChange }: { onYearChange: (year: number) => void }) {
  const years = Object.keys(yearData).map(Number).sort((a, b) => a - b)
  const [selectedIndex, setSelectedIndex] = useState(Math.floor(years.length / 2))
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    onYearChange(years[selectedIndex])
  }, [selectedIndex, onYearChange, years])

  const handleScroll = (direction: 'up' | 'down') => {
    setSelectedIndex(prevIndex => {
      const newIndex = direction === 'up' ? prevIndex - 1 : prevIndex + 1
      return Math.max(1, Math.min(newIndex, years.length - 2))
    })
  }

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transform = `translateY(${-selectedIndex * ITEM_HEIGHT + ITEM_HEIGHT}px)`
    }
  }, [selectedIndex])

  return (
    <div className="relative w-40 h-[180px] mx-auto overflow-hidden">
      <button
        className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-white via-white to-transparent h-[60px] flex items-center justify-center"
        onClick={() => handleScroll('up')}
      >
        <ChevronUp className="h-6 w-6 text-gray-600" />
      </button>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-[60px] w-full border-t border-b border-gray-300"></div>
      </div>
      <div
        ref={containerRef}
        className="absolute left-0 right-0 transition-transform duration-300"
        style={{ top: `-${ITEM_HEIGHT}px` }}
      >
        {years.map((year, index) => (
          <div
            key={year}
            className={`h-[${ITEM_HEIGHT}px] flex items-center justify-center text-2xl font-bold ${
              index === selectedIndex ? 'text-blue-600' : 'text-gray-400'
            }`}
          >
            {year}
          </div>
        ))}
      </div>
      <button
        className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-white via-white to-transparent h-[60px] flex items-center justify-center"
        onClick={() => handleScroll('down')}
      >
        <ChevronDown className="h-6 w-6 text-gray-600" />
      </button>
    </div>
  )
}
