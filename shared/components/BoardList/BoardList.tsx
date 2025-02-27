'use client'

import React, { FC } from 'react'
import useBoardList from '@/shared/hooks/use-board-list'
import BoardListPlaceholder from './BoardListPlaceholder/BoardListPlaceholder'
import BoardListContent from './BoardListContent/BoardListContent'
import { BoardListProps } from './BoardList.types'

const BoardList: FC<BoardListProps> = ({ orgId }) => {
  const { data, isEmpty, isDataUndefined, hasSearch, hasFavorites } =
    useBoardList(orgId)

  return (
    <div className="flex justify-center items-center">
      <BoardListPlaceholder
        orgId={orgId}
        isLoading={isDataUndefined}
        isEmpty={isEmpty}
        hasSearch={hasSearch}
        hasFavorites={hasFavorites}
      />
      {!isEmpty && data && (
        <BoardListContent
          data={data}
          orgId={orgId}
          hasFavorites={hasFavorites}
        />
      )}
    </div>
  )
}

export default BoardList
