'use client'

import { useState, useRef, useEffect } from 'react'
import { yearData } from '@/data/yearData'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function YearSelector({ onYearChange }: { onYearChange: (year: number) => void }) {
  const [selectedYear, setSelectedYear] = useState(2000)
  const years = Object.keys(yearData).map(Number)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleYearClick = (year: number) => {
    setSelectedYear(year)
    onYearChange(year)
    scrollToYear(year)
  }

  const scrollToYear = (year: number) => {
    const container = scrollContainerRef.current
    const yearElement = container?.querySelector(`[data-year="${year}"]`)
    if (container && yearElement) {
      container.scrollTo({
        left: yearElement.offsetLeft - container.offsetWidth / 2 + (yearElement as HTMLElement).offsetWidth / 2,
        behavior: 'smooth'
      })
    }
  }

  const handleScroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current
    if (container) {
      const scrollAmount = direction === 'left' ? -200 : 200
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    scrollToYear(selectedYear)
  }, [])

  return (
    <div className="mb-8 w-full max-w-3xl">
      <h2 className="text-2xl mb-4 text-center">Select a Year</h2>
      <div className="relative">
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
          onClick={() => handleScroll('left')}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide space-x-4 py-4 px-12"
        >
          {years.map(year => (
            <button
              key={year}
              data-year={year}
              onClick={() => handleYearClick(year)}
              className={`flex-shrink-0 px-6 py-3 rounded-full text-lg font-bold transition-all duration-300 ${
                selectedYear === year
                  ? 'bg-primary text-primary-foreground scale-110'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {year}
            </button>
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
          onClick={() => handleScroll('right')}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
