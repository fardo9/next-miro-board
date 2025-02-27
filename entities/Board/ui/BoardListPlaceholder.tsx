import React, { FC } from 'react'

import useBoardList from '@/shared/hooks/useBoardList'
import { BoardListPlaceholderProps } from '../model/boadr.types'
import AddNewBoardButton from '@/features/AddNewBoard/ui/AddNewBoardButton'
import EmptySearch from '@/widget/EmptyState/ui/EmptySearch'
import EmptyFavorites from '@/widget/EmptyState/ui/EmptyFavorites'
import EmptyBoards from '@/widget/EmptyState/ui/EmptyBoards'
import BoadrCardSkeleton from './BoadrCardSkeleton'

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
            .map((_, index) => (
              <BoadrCardSkeleton key={index} />
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
