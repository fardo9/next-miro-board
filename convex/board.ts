import { v } from 'convex/values'
import { MutationCtx, mutation } from './_generated/server'

const images = [
  '/placeholders/01.svg',
  '/placeholders/02.svg',
  '/placeholders/03.svg',
  '/placeholders/04.svg',
  '/placeholders/05.svg',
  '/placeholders/06.svg',
  '/placeholders/07.svg',
  '/placeholders/08.svg',
  '/placeholders/09.svg',
  '/placeholders/10.svg',
]

export const createBoard = mutation({
  args: { orgId: v.string(), title: v.string() },
  handler: async (
    ctx: MutationCtx,
    args: { orgId: string; title: string }
  ) => {
    const identity = await ctx.auth.getUserIdentity()

    if (!identity) throw new Error('Unauthorized')

    const randomImages =
      images[Math.floor(Math.random() * images.length)]

    const board = await ctx.db.insert('boards', {
      title: args.title,
      orgId: args.orgId,
      authorId: identity.subject,
      authorName: identity.name!,
      imageUrl: randomImages,
    })

    return board
  },
})
