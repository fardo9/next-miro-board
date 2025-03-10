import { v } from 'convex/values'
import { QueryCtx, query } from './_generated/server'

export const getBoards = query({
  args: { orgId: v.string() },
  handler: async (ctx: QueryCtx, args: { orgId: string }) => {
    const identity = await ctx.auth.getUserIdentity()

    if (!identity) throw new Error('Unauthorized')

    const boards = await ctx.db
      .query('boards')
      .withIndex('by_org', (q) => q.eq('orgId', args.orgId))
      .order('desc')
      .collect()

    const boardsWithFavoriteRelation = boards.map((board) => {
      return ctx.db
        .query('userFavorites')
        .withIndex('by_user_board_org', (q) =>
          q.eq('userId', identity.subject).eq('boardId', board._id)
        )
        .unique()
        .then((favorite) => ({
          ...board,
          isFavorite: !!favorite,
        }))
    })

    const boardsWithFavoritesBoolean = await Promise.all(
      boardsWithFavoriteRelation
    )

    return boardsWithFavoritesBoolean
  },
})
