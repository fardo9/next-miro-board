import React from 'react'
import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
} from '../../../shared/components/ui'
import { Plus } from 'lucide-react'
import { OrganizationProfile } from '@clerk/nextjs'

const InviteMemberButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="" variant={'outline'}>
          <Plus className="h-4 w-4 mr-2" />
          Invite members
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-none max-w-[880px]">
        <OrganizationProfile />
      </DialogContent>
    </Dialog>
  )
}

export default InviteMemberButton
