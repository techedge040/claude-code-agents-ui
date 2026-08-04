import { providerRegistry } from '../../utils/providers/registry'

/**
 * GET /api/providers/session-model?sessionId=...
 * Returns the per-session model preference (B2), or null if none is set.
 */
export default defineEventHandler((event) => {
  const query = getQuery(event)
  const sessionId = String(query.sessionId || '')
  if (!sessionId) {
    return { model: null }
  }
  const provider = providerRegistry.getDefault()
  const model = provider?.getSessionModel?.(sessionId) ?? null
  return { model }
})
