import { FC } from 'react'
import { ActionsProps } from '../model/boadr.types'
import {
  Button,
  ConfirmDiaolog,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/components/ui'
import { Link2, Pencil, Trash2 } from 'lucide-react'
import { toast } from 'sonner'
import { useApiMutation } from '@/shared/hooks/useApiMutation'
import { api } from '@/convex/_generated/api'
import { useRenameModal } from '@/shared/store/useRenameModal'

const BoardAction: FC<ActionsProps> = ({
  children,
  side,
  sideOffset,
  id,
  title,
}) => {
  const { onOpen, onClose } = useRenameModal()
  const { mutate, pending } = useApiMutation(api.board.removeBoard)

  const onCopyLink = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}/board/${id}`)
      .then(() => toast.success('Board link copied to clipboard'))
      .catch(() => toast.error('Failed to copy board link'))
  }

  const handleDeleteBoard = () => {
    mutate({ id })
      .then(() => {
        toast.success('Board deleted successfully!')
        // TODO: Redirect to boards page
      })
      .catch((error) => {
        toast.error(`Failed to delete board: ${error.message}`)
        console.error('Error deleting board:', error)
      })
  }

  return (
    <div className="absolute z-50 top-1 right-1">
      {/* <h2>{title}</h2> */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
        <DropdownMenuContent
          onClick={(e) => e.stopPropagation()}
          side={side}
          sideOffset={sideOffset}
          className="w-60 "
        >
          <DropdownMenuItem className="p-3 cursor-pointer" onClick={onCopyLink}>
            <Link2 className="h-4 w-2 mr-2" />
            Copy board link
          </DropdownMenuItem>
          <DropdownMenuItem
            className="p-3 cursor-pointer"
            onClick={() => onOpen(id, title)}
          >
            <Pencil className="h-4 w-2 mr-2" />
            Rename
          </DropdownMenuItem>
          <ConfirmDiaolog
            header="Delete board"
            description="This will delete the board and all of contents."
            disabled={pending}
            onConfirm={handleDeleteBoard}
          >
            <Button
              variant={'ghost'}
              className="p-3 cursor-pointer text-sm w-full justify-start"
            >
              <Trash2 className="h-4 w-2 mr-2" />
              Delete
            </Button>
          </ConfirmDiaolog>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default BoardAction
