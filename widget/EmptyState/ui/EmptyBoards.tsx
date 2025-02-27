'use client'

import { CreateBoardButton } from '@/features/CreateBoard/ui/CreateBoardButton'

const EmptyBoards = () => {
  return (
    <div className="center-flex flex-col h-full">
      <h2 className="text-2xl font-semibold mt-6">
        Create your first board!
      </h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start by creating a new board and adding tasks.
      </p>
      <CreateBoardButton />
    </div>
  )
}

export default EmptyBoards
