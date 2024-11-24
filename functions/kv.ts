import { Router } from 'itty-router'

// Initialize the router
const router = Router()

// GET handler to fetch votes
router.get('/api/kv', async (request) => {
  const url = new URL(request.url)
  const key = url.searchParams.get('key')

  if (!key) {
    return new Response('Key is required', { status: 400 })
  }

  try {
    const value = await MY_KV.get(key)
    if (value === null) {
      return new Response(JSON.stringify({ upvotes: 0, downvotes: 0 }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      })
    }
    return new Response(value, { status: 200 })
  } catch (error) {
    console.error('Failed to fetch data:', error)
    return new Response('Failed to fetch data', { status: 500 })
  }
})

// POST handler to update votes
router.post('/api/kv', async (request) => {
  try {
    const body = await request.json()
    const { key, value } = body

    if (!key || !value) {
      return new Response('Key and value are required', { status: 400 })
    }

    await MY_KV.put(key, value)
    return new Response('Success', { status: 200 })
  } catch (error) {
    console.error('Failed to set data:', error)
    return new Response('Failed to set data', { status: 500 })
  }
})

// Fallback handler
router.all('*', () => new Response('Not Found', { status: 404 }))

// Export the Worker
addEventListener('fetch', (event) => {
  event.respondWith(router.handle(event.request))
})
