import { api } from '@/convex/_generated/api'
import { useQuery } from 'convex/react'
import { useSearchParams } from 'next/navigation'

const useBoardList = (orgId: string) => {
  const searchParams = useSearchParams()

  const query = {
    search: searchParams.get('search'),
    favorites: searchParams.get('favorites'),
  }

  const data = useQuery(api.boards.getBoards, { orgId })

  const isEmpty = data?.length === 0
  const isDataUndefined = data === undefined
  const hasSearch = Boolean(query?.search)
  const hasFavorites = Boolean(query?.favorites)

  return {
    data,
    isEmpty,
    isDataUndefined,
    hasSearch,
    hasFavorites,
  }
}

export default useBoardList
