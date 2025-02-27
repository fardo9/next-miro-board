import React from 'react'
import { PlusIcon } from 'lucide-react'
import { CreateOrganization } from '@clerk/nextjs'

import Hint from '@/shared/components/ui/custom/Hint'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/shared/components/ui/shadcn/dialog'

const SidebarCreateOrganizationButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Hint
          label={'Create Organization'}
          side="right"
          align="center"
          sideOffset={20}
        >
          <button className="bg-white/25 h-[36px] w-[36px] rounded-md items-center flex justify-center opacity-60 hover:opacity-100 transition">
            <PlusIcon />
          </button>
        </Hint>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  )
}

export default SidebarCreateOrganizationButton
