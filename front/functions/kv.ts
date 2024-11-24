import { Router } from 'itty-router'
import type { ExecutionContext, KVNamespace } from '@cloudflare/workers-types'

// Add the Env interface definition
interface Env {
  MY_KV: KVNamespace
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const router = Router()

  // GET handler
  router.get('/api/kv', async (request) => {
    const url = new URL(request.url)
    const key = url.searchParams.get('key')

    if (!key) {
      return new Response('Key is required', { status: 400 })
    }

    try {
      const value = await context.env.MY_KV.get(key)
      if (value === null) {
        return new Response(JSON.stringify({ upvotes: 0, downvotes: 0 }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        })
      }
      return new Response(value, { status: 200 })
    } catch (error) {
      return new Response('Failed to fetch data', { status: 500 })
    }
  })

  // POST handler
  router.post('/api/kv', async (request) => {
    try {
      const body = await request.json() as { key: string; value: string }
      const { key, value } = body

      if (!key || !value) {
        return new Response('Key and value are required', { status: 400 })
      }

      await context.env.MY_KV.put(key, value)
      return new Response('Success', { status: 200 })
    } catch (error) {
      return new Response('Failed to set data', { status: 500 })
    }
  })

  return router.handle(context.request)
}