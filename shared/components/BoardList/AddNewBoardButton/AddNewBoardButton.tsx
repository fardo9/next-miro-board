import React, { FC } from 'react'
import { cn } from '@/shared/lib/utils'
import { Plus } from 'lucide-react'
import { useApiMutation } from '@/shared/hooks/use-api-mutation'
import { api } from '@/convex/_generated/api'
import { toast } from 'sonner'
import { useOrganization } from '@clerk/nextjs'

interface AddNewBoardButtonProps {
  orgId: string
  disabled: boolean
}

const AddNewBoardButton: FC<AddNewBoardButtonProps> = ({
  orgId,
  disabled,
}) => {
  const { organization } = useOrganization()

  const { mutate, pending } = useApiMutation(api.board.createBoard)
  const handleCreateBoard = async () => {
    if (!organization) return

    await mutate({ orgId, title: 'New Board 1' })
      .then((id) => {
        toast.success('Board created successfully!')
        // TODO: Redirect to board page /boad/{id}
      })
      .catch((error) => {
        toast.error('Failed to create board: ', error.message)
        console.error('Error creating board:', error)
      })
  }
  return (
    <button
      disabled={disabled}
      onClick={handleCreateBoard}
      className={cn(
        'col-span-1 aspect-[100/127] bg-blue-600 hover:bg-blue-800 flex-col center-flex py-6 rounded-lg',
        (pending || disabled) &&
          'opacity-75 cursor-not-allowed hover:bg-blue-600'
      )}
    >
      <div />
      <Plus className="h-12 w-12 text-white stroke-1" />
      <p className="text-sm text-white font-light">New board</p>
    </button>
  )
}

export default AddNewBoardButton
