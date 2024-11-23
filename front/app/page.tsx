'use client'

import { useState } from 'react'
import Layout from '@/components/Layout'
import YearSelector from '@/components/YearSelector'
import TrendDisplay from '@/components/TrendDisplay'

export default function Home() {
  const [selectedYear, setSelectedYear] = useState(2000)

  return (
    <Layout>
      <YearSelector onYearChange={setSelectedYear} />
      <TrendDisplay selectedYear={selectedYear} />
    </Layout>
  )
}
