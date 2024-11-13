'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

interface UserPointsContextType {
  points: number
  usePoints: (amount: number) => boolean
  resetPoints: () => void
}

const UserPointsContext = createContext<UserPointsContextType | undefined>(undefined)

export const UserPointsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [points, setPoints] = useState(10)

  useEffect(() => {
    const lastResetDate = localStorage.getItem('lastResetDate')
    const today = new Date().toDateString()

    if (lastResetDate !== today) {
      setPoints(10)
      localStorage.setItem('lastResetDate', today)
    } else {
      const savedPoints = localStorage.getItem('userPoints')
      if (savedPoints) setPoints(parseInt(savedPoints, 10))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('userPoints', points.toString())
  }, [points])

  const usePoints = (amount: number): boolean => {
    if (points >= amount) {
      setPoints(prevPoints => prevPoints - amount)
      return true
    }
    return false
  }

  const resetPoints = () => {
    setPoints(10)
    localStorage.setItem('lastResetDate', new Date().toDateString())
  }

  return (
    <UserPointsContext.Provider value={{ points, usePoints, resetPoints }}>
      {children}
    </UserPointsContext.Provider>
  )
}

export const useUserPoints = () => {
  const context = useContext(UserPointsContext)
  if (context === undefined) {
    throw new Error('useUserPoints must be used within a UserPointsProvider')
  }
  return context
}