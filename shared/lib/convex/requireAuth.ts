import { MutationCtx } from '@/convex/_generated/server'

/**
 * Check if the current user is authenticated.
 */
export const requireAuth = async (ctx: MutationCtx) => {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) throw new Error('Unauthorized')
  return identity
}
