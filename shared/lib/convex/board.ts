import { Id } from '@/convex/_generated/dataModel'
import { MutationCtx } from '@/convex/_generated/server'

/**
 * Get a board by its ID or throw new Errors.
 */

export const getBoardOrThrow = async (
  ctx: MutationCtx,
  { id }: { id: Id<'boards'> }
) => {
  const board = await ctx.db.get(id)
  if (!board) throw new Error('Board not found')
  return board
}

export const updateBoardTitle = async (
  ctx: MutationCtx,
  { id, title }: { id: { id: Id<'boards'> }; title: string }
) => {
  if (!title.trim()) throw new Error('Title is required')
  if (title.length > 60)
    throw new Error('Title should not exceed 60 characters')

  await getBoardOrThrow(ctx, id)
  await ctx.db.patch(id, {
    title: title,
  })
}

export const deleteBoardById = async (ctx: MutationCtx, id: Id<'boards'>) => {
  await getBoardOrThrow(ctx, id)
  await ctx.db.delete(id)
  return { success: true }
}
