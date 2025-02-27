'use client'

import { useOrganizationList } from '@clerk/nextjs'
import ActiveOrganization from '../ActiveOrganization/ActiveOrganization'

const ListOrganizations = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  })

  if (!userMemberships.data?.length) return null

  return (
    <ul className="center-flex flex-col">
      {userMemberships.data.map(
        ({ organization: { id, name, imageUrl } }) => (
          <ActiveOrganization
            key={id}
            id={id}
            name={name}
            imageUrl={imageUrl}
          />
        )
      )}
    </ul>
  )
}

export default ListOrganizations
