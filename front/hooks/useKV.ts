export function useKV() {
    const getData = async (key: string) => {
      const response = await fetch(`/api/kv?key=${key}`)
      if (!response.ok) throw new Error('Failed to fetch data')
      return response.text()
    }
  
    const setData = async (key: string, value: string) => {
      const response = await fetch('/api/kv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ key, value }),
      })
      if (!response.ok) throw new Error('Failed to set data')
    }
  
    return { getData, setData }
}
