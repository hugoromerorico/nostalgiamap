import { useKV } from './useKV'

interface VoteData {
  upvotes: number;
  downvotes: number;
}

export function useVotes() {
  const { getData, setData } = useKV()

  const getVotes = async (trendId: string): Promise<VoteData> => {
    try {
      const data = await getData(`votes:${trendId}`)
      return data ? JSON.parse(data) : { upvotes: 0, downvotes: 0 }
    } catch (error) {
      console.error('Failed to get votes:', error)
      return { upvotes: 0, downvotes: 0 }
    }
  }

  const updateVote = async (trendId: string, isUpvote: boolean) => {
    try {
      const currentVotes = await getVotes(trendId)
      const newVotes = {
        upvotes: currentVotes.upvotes + (isUpvote ? 1 : 0),
        downvotes: currentVotes.downvotes + (isUpvote ? 0 : 1),
      }
      await setData(`votes:${trendId}`, JSON.stringify(newVotes))
      return newVotes
    } catch (error) {
      console.error('Failed to update vote:', error)
      throw error
    }
  }

  return { getVotes, updateVote }
}