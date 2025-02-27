'use client'

import { UserButton, useOrganization } from '@clerk/nextjs'
import React from 'react'
import SearchInput from '../SearchInput/SearchInput'
import OrganizeSwitcherButton from '../Sidebar/OrganizeSidebar/OrganizeSwitcherButton/OrganizeSwitcherButton'
import InviteButton from './InviteButton/InviteButton'

const Navbar = () => {
  const { organization: isOrganization } = useOrganization()

  return (
    <div className="flex items-center gap-x-4 p-5">
      <div className="hidden lg:flex lg:flex-1">
        <SearchInput />
      </div>
      <div className="block lg:hidden flex-1">
        <OrganizeSwitcherButton />
      </div>

      {isOrganization && <InviteButton />}
      <UserButton />
    </div>
  )
}

export default Navbar
