import React from 'react'
import BoardCard from '../../../entities/Board/ui/BoardCard'
import { BoardListContentProps } from '../model/boardList.types'
import AddNewBoardButton from '@/features/AddNewBoard/ui/AddNewBoardButton'

const BoardListContent = ({
  data,
  orgId,
  hasFavorites,
}: BoardListContentProps) => {
  return (
    <div className="flex flex-col w-full">
      <h2 className="text-3xl">
        {hasFavorites ? 'Favorite Boards' : 'Team Boards'}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
        <AddNewBoardButton disabled={false} orgId={orgId} />

        {data.map((board) => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            imageUrl={board.imageUrl}
            authorId={board.authorId}
            authorName={board.authorName}
            createdAt={board._creationTime}
            orgId={board.orgId}
            isFavorite={board.isFavorite}
          />
        ))}
      </div>
    </div>
  )
}

export default BoardListContent
