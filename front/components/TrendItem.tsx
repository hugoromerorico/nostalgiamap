'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ThumbsUp, ThumbsDown } from 'lucide-react'

interface TrendItemProps {
  id: string;
  name: string;
  image: string;
  upvotes: number;
  downvotes: number;
  onVote: (id: string, isUpvote: boolean) => void;
}

export default function TrendItem({ 
  id, 
  name, 
  image, 
  upvotes, 
  downvotes, 
  onVote 
}: TrendItemProps) {
  const [isHovered, setIsHovered] = useState(false)
  const totalScore = upvotes - downvotes

  return (
    <div 
      className="relative group aspect-square w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full">
        <Image 
          src={image} 
          alt={name} 
          fill
          className="object-cover rounded-lg shadow-md"
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
        <div className="text-white text-center">
          <h3 className="text-xl font-bold mb-2">{name}</h3>
          <p className="text-lg mb-4">Score: {totalScore}</p>
          {isHovered && (
            <div className="flex justify-center space-x-4">
              <button 
                onClick={() => onVote(id, true)} 
                className="p-2 bg-white rounded-full"
              >
                <ThumbsUp className="h-6 w-6 text-blue-500" />
                <span className="text-xs text-black">{upvotes}</span>
              </button>
              <button 
                onClick={() => onVote(id, false)} 
                className="p-2 bg-white rounded-full"
              >
                <ThumbsDown className="h-6 w-6 text-red-500" />
                <span className="text-xs text-black">{downvotes}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
