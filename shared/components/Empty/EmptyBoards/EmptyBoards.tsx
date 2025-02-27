'use client'

import { api } from '@convex/_generated/api'
import { useOrganization } from '@clerk/nextjs'

import { useApiMutation } from '@/shared/hooks/use-api-mutation'
import { Button } from '@/shared/components/ui/button'
import { toast } from 'sonner'

const EmptyBoards = () => {
  const { organization } = useOrganization()
  const { mutate, pending } = useApiMutation(
    api.board.createBoard
  )

  const handleCreateBoard = async () => {
    if (!organization) return

    await mutate({
      orgId: organization.id,
      title: 'New Board',
    })
      .then((id) => {
        toast.success('Board created successfully!')
        // TODO: Redirect to board page /boad/{id}
      })
      .catch((error) => {
        toast.error(
          'Failed to create board: ',
          error.message
        )
        // TODO: Handle error appropriately
      })
  }

  return (
    <div className="center-flex flex-col h-full">
      <h2 className="text-2xl font-semibold mt-6">
        Create your first board!
      </h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start by creating a new board and adding tasks.
      </p>
      <Button
        className="mt-6"
        size={'lg'}
        onClick={handleCreateBoard}
        disabled={pending}
      >
        Create board
      </Button>
    </div>
  )
}

export default EmptyBoards
