import Image from 'next/image'

import {
  useOrganization,
  useOrganizationList,
} from '@clerk/nextjs'
import { FC } from 'react'
import { cn } from '@/shared/lib/utils'
import { Hint } from '../..'

interface ActiveOrganizationProps {
  id: string
  name: string
  imageUrl: string
  key?: string | number
}

const ActiveOrganization: FC<ActiveOrganizationProps> = ({
  id,
  name,
  imageUrl,
}) => {
  const { organization } = useOrganization()
  const { setActive } = useOrganizationList()

  const isActive = organization?.id === id

  const handleActive = () => {
    if (!setActive) return

    setActive({ organization: id })
  }

  return (
    <div className="mb-4 last:mb-0">
      <Hint
        label={name}
        side="right"
        align="start"
        sideOffset={20}
      >
        <Image
          width={36}
          height={36}
          alt={name}
          src={imageUrl}
          className={cn(
            'rounded-md cursor-pointer opacity-75 hover:opacity-100 transition',
            isActive && 'opacity-100'
          )}
          onClick={handleActive}
        />
      </Hint>
    </div>
  )
}

export default ActiveOrganization
