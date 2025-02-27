import React from 'react'
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from '../shadcn/alert-dialog'

interface ConfirmDialogProps {
  children: React.ReactNode
  onConfirm: () => void
  disabled?: boolean
  header: string
  description?: string
}

const ConfirmDiaolog = ({
  children,
  onConfirm,
  disabled = false,
  header = 'Confirm Action',
  description,
}: ConfirmDialogProps) => {
  const handleRemove = () => {
    onConfirm()
    // Hide the dialog
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{header}</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>{description}</AlertDialogDescription>

        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => {}}>Cancel</AlertDialogCancel>
          <AlertDialogAction disabled={disabled} onClick={handleRemove}>
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ConfirmDiaolog
