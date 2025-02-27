import { v } from 'convex/values'
import { MutationCtx, mutation } from './_generated/server'
import { getRandomImage, requireAuth } from '@/shared/lib'

export const createBoard = mutation({
  args: { orgId: v.string(), title: v.string() },
  handler: async (ctx: MutationCtx, args: { orgId: string; title: string }) => {
    const identity = await requireAuth(ctx)

    const board = await ctx.db.insert('boards', {
      title: args.title,
      orgId: args.orgId,
      authorId: identity.subject,
      authorName: identity.name!,
      imageUrl: getRandomImage(),
    })

    return board
  },
})

export const removeBoard = mutation({
  args: { id: v.id('boards') },
  handler: async (ctx: MutationCtx, args: any) => {
    await requireAuth(ctx)

    //TODO: later check if favorite relation delete as well

    await ctx.db.delete(args.id)
  },
})
