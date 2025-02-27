'use client'

import { OrganizationSwitcher } from '@clerk/nextjs'

const OrganizeSwitcherButton = () => {
  return (
    <OrganizationSwitcher
      hidePersonal
      appearance={{
        elements: {
          rootBox:
            'flex justify-center items-center w-full lg:max-w-none lg:max-w-[300px]',
          organizationSwitcherTrigger:
            'flex items-center justify-between px-4 py-2 rounded-lg border border-gray-300 bg-white text-black cursor-pointer transition-colors duration-200 w-full',
        },
      }}
    />
  )
}

export default OrganizeSwitcherButton
