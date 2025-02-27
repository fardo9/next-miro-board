'use client'

import BoardList from '@/shared/components/BoardList/BoardList'
import { EmptyOrganization } from '@/shared/components/Empty'
import { useOrganization } from '@clerk/nextjs'
import { useSearchParams } from 'next/navigation'

export default function Dashboard({}) {
  const { organization } = useOrganization()

  return (
    <div className="flex-1 h-[calc(100vh-80px)] p-6 bg-slate-400">
      {organization ? (
        <BoardList
          orgId={organization.id}
        />
      ) : (
        <EmptyOrganization />
      )}
    </div>
  )
}
