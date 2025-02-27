import React, { FC } from 'react'
import { BoardListPlaceholderProps } from './BoardListPlaceholder.types'
import {
  AddNewBoardButton,
  BoadrCardSkeleton,
  EmptyBoards,
  EmptyFavorites,
  EmptySearch,
} from '../..'
import useBoardList from '@/shared/hooks/use-board-list'
import { api } from '@/convex/_generated/api'

const BoardListPlaceholder: FC<BoardListPlaceholderProps> = ({
  isLoading,
  isEmpty,
  hasSearch,
  hasFavorites,
  orgId,
}) => {
  const { data } = useBoardList(orgId)

  if (isLoading) {
    return (
      <div className="flex flex-col w-full">
        <h2 className="text-3xl">
          {hasFavorites ? 'Favorites Boards' : 'Team Bords'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
          <AddNewBoardButton orgId={orgId} disabled />
          {Array(data?.length)
            .fill(null)
            .map((_) => (
              <BoadrCardSkeleton />
            ))}
        </div>
      </div>
    )
  }
  if (isEmpty) {
    if (hasSearch) return <EmptySearch />
    if (hasFavorites) return <EmptyFavorites />
    return <EmptyBoards />
  }
}

export default BoardListPlaceholder
