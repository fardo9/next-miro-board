import { api } from '@/convex/_generated/api'
import { useApiMutation } from '@/shared/hooks/useApiMutation'
import { useOrganization } from '@clerk/nextjs'
import { toast } from 'sonner'

export const useCreateBoard = () => {
  const { organization } = useOrganization()
  const { mutate, pending } = useApiMutation(api.board.createBoard)

  const handleCreateBoard = async () => {
    if (!organization) return

    await mutate({
      orgId: organization.id,
      title: 'New Board22',
    })
      .then((id) => {
        toast.success('Board created successfully!')
        // TODO: Redirect to board page /boad/{id}
      })
      .catch((error) => {
        toast.error('Failed to create board: ', error.message)
        // TODO: Handle error appropriately
      })
  }

  return { handleCreateBoard, pending }
}
