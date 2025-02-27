import { Dialog } from '@radix-ui/react-dialog'
import {
  Button,
  DialogContent,
  DialogTrigger,
} from '../../ui'
import { CreateOrganization } from '@clerk/nextjs'

const EmptyOrganization = () => {
  return (
    <div className="center-flex h-hull flex-col">
      <h2 className=" text-2xl font-semibold mt-6">
        Empty Organization
      </h2>
      <p>
        You don't have any boards yet. Click the "Add a new
        board" button to start creating your organization.
      </p>
      <div className="mt-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Create organization</Button>
          </DialogTrigger>
          <DialogContent className="p-0 bg-transparent border-none ">
            <CreateOrganization />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export default EmptyOrganization
