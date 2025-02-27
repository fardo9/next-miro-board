'use client'

import { Button } from '@/shared/components/ui'
import { useCreateBoard } from '../model/useCreateBoard'

export const CreateBoardButton = () => {
  const { handleCreateBoard, pending } = useCreateBoard()

  return (
    <Button
      className="mt-6"
      size={'lg'}
      onClick={handleCreateBoard}
      disabled={pending}
    >
      Create board
    </Button>
  )
}
