import React from 'react'
import { PlusIcon } from 'lucide-react'
import { CreateOrganization } from '@clerk/nextjs'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '../../ui'
import { Hint } from '../..'

const AddNewBoardButton = () => {
  return (
    <div className="center-flex">
      <Dialog>
        <DialogTrigger>
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
    </div>
  )
}

export default AddNewBoardButton
