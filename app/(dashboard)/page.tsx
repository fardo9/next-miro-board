'use client'

import BoardList from '@/widget/BoardList/ui/BoardList'
import EmptyOrganization from '@/widget/EmptyState/ui/EmptyOrganization'
import { useOrganization } from '@clerk/nextjs'

export default function Dashboard({}) {
  const { organization } = useOrganization()

  return (
    <div className="flex-1 h-[calc(100vh-80px)] p-6 bg-slate-400">
      {organization ? (
        <BoardList orgId={organization.id} />
      ) : (
        <EmptyOrganization />
      )}
    </div>
  )
}
