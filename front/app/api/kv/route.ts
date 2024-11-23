import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const key = searchParams.get('key')

  if (!key) {
    return new Response('Key is required', { status: 400 })
  }

  try {
    const value = await MY_KV.get(key)
    if (value === null) {
      return new Response(JSON.stringify({ upvotes: 0, downvotes: 0 }))
    }
    return new Response(value)
  } catch (error) {
    return new Response('Failed to fetch data', { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  const { key, value } = await request.json()

  if (!key || !value) {
    return new Response('Key and value are required', { status: 400 })
  }

  try {
    await MY_KV.put(key, value)
    return new Response('Success', { status: 200 })
  } catch (error) {
    return new Response('Failed to set data', { status: 500 })
  }
}
