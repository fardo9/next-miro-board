import { v } from 'convex/values'
import { MutationCtx, mutation } from './_generated/server'
import { getRandomImage, requireAuth } from '@/shared/lib'
import { Id } from './_generated/dataModel'

export const createBoard = mutation({
  args: { orgId: v.string(), title: v.string() },
  handler: async (
    ctx: MutationCtx,
    { orgId, title }: { orgId: string; title: string }
  ) => {
    const identity = await requireAuth(ctx)

    const board = await ctx.db.insert('boards', {
      title: title,
      orgId: orgId,
      authorId: identity.subject,
      authorName: identity.name!,
      imageUrl: getRandomImage(),
    })

    return board
  },
})

export const removeBoard = mutation({
  args: { id: v.id('boards') },
  handler: async (ctx: MutationCtx, { id }: { id: Id<'boards'> }) => {
    await requireAuth(ctx)

    //TODO: later check if favorite relation delete as well
    const board = await ctx.db.get(id)
    if (!board) throw new Error('Board not found')

    await ctx.db.delete(id)
    return { success: true }
  },
})

export const updateBoard = mutation({
  args: { id: v.id('boards'), title: v.string() },
  handler: async (
    ctx: MutationCtx,
    { id, title }: { id: Id<'boards'>; title: string }
  ) => {
    await requireAuth(ctx)
    const title2 = title.trim()

    if (!title2) throw new Error('Title is required')
    if (title2.length > 60)
      throw new Error('Title should not exceed 60 characters')

    const board = await ctx.db.get(id)
    if (!board) throw new Error('Board not found')

    await ctx.db.patch(id, {
      title: title,
    })

    return board
  },
})

export const favoriteBoard = mutation({
  args: { id: v.id('boards'), orgId: v.string() },
  handler: async (
    ctx: MutationCtx,
    { id, orgId }: { id: Id<'boards'>; orgId: string }
  ) => {
    const identity = await requireAuth(ctx)

    const board = await ctx.db.get(id)
    if (!board) throw new Error('Board not found')

    const userID = identity.subject
    const existingFavorite = await ctx.db
      .query('userFavorites')
      .withIndex('by_user_board_org', (q) =>
        q.eq('userId', userID).eq('boardId', id).eq('orgId', orgId)
      )
      .unique()

    if (existingFavorite) throw new Error('Board is already in your favorites')

    await ctx.db.insert('userFavorites', {
      userId: userID,
      boardId: board._id,
      orgId: orgId,
    })
    console.log('Successfully inserted favorite')

    return board
  },
})

export const unFavoriteBoard = mutation({
  args: { id: v.id('boards') },
  handler: async (ctx: MutationCtx, { id }: { id: Id<'boards'> }) => {
    const identity = await requireAuth(ctx)

    const board = await ctx.db.get(id)
    if (!board) throw new Error('Board not found')

    const userID = identity.subject
    const existingFavorite = await ctx.db
      .query('userFavorites')
      .withIndex('by_user_board', (q) =>
        q.eq('userId', userID).eq('boardId', id)
      )
      .unique()

    if (!existingFavorite) throw new Error('Favorite board not found. ')
    await ctx.db.delete(existingFavorite._id)

    return board
  },
})
