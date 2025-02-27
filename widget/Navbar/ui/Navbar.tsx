'use client'

import { UserButton, useOrganization } from '@clerk/nextjs'
import OrganizeSwitcherButton from '@/features/OrganizeSidebar/ui/OrganizeSwitcherButton'
import InviteMemberButton from '@/features/InviteMember/ui/InviteMemberButton'
import { SearchInput } from '@/shared/components/ui'
import { useSearch } from '@/features/Search/lib/useSearch'

const Navbar = () => {
  const { organization } = useOrganization()
  const { value, handleChange } = useSearch()

  return (
    <nav className="flex items-center gap-x-4 p-5">
      {/* Desktop search */}
      <div className="hidden lg:flex lg:flex-1">
        <SearchInput value={value} onChange={handleChange} />
      </div>

      {/* Mobile sidebar switcher */}
      <div className="block lg:hidden flex-1">
        <OrganizeSwitcherButton />
      </div>

      {/* Invite button (visible only when organization exists) */}
      {organization && <InviteMemberButton />}

      {/* User profile button */}
      <UserButton aria-label="User Menu" />
    </nav>
  )
}

export default Navbar
