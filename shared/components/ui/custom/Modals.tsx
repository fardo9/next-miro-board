'use client'
import React, { FormEventHandler, useEffect, useState } from 'react'
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Input,
} from '..'
import { useRenameModal } from '@/shared/store/useRenameModal'
import { useApiMutation } from '@/shared/hooks/useApiMutation'
import { api } from '@/convex/_generated/api'
import { toast } from 'sonner'

const Modals = () => {
  const { isOpen, onClose, initialValues } = useRenameModal()
  const [title, setTitle] = useState(initialValues.title)

  const { mutate, pending } = useApiMutation(api.board.updateBoard)

  useEffect(() => {
    setTitle(initialValues.title)
  }, [initialValues.title])

  const handleChange = (e: any) => {
    setTitle(e.target.value)
  }
  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    mutate({ id: initialValues.id, title })
      .then(() => {
        toast.success('Board title updated successfully!')
        onClose()
      })
      .catch((error) => {
        toast.error(`Failed to update board title: ${error.message}`)
        console.error('Error updating board title:', error)
      })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rename Board</DialogTitle>
        </DialogHeader>
        <DialogDescription>Enter a new title for this board</DialogDescription>

        <form onSubmit={onSubmit} className="space-y-4">
          <Input
            required
            disabled={pending}
            value={title}
            maxLength={60}
            onChange={handleChange}
            placeholder="Boar Title"
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
            </DialogClose>
            <Button disabled={pending } variant="outline" type={'submit'}>
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default Modals
