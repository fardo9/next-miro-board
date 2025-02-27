import { DropdownMenuContentProps } from '@radix-ui/react-dropdown-menu'

export interface BoadrCardProps {
  id: string
  title: string
  imageUrl: string
  authorId: string
  authorName: string
  createdAt: number
  orgId: string
  isFavorite: boolean
}

export interface BoardListPlaceholderProps {
  isLoading: boolean
  isEmpty: boolean
  hasSearch: boolean
  hasFavorites: boolean
  orgId: string
}

export interface ActionsProps {
  children: React.ReactNode
  side?: DropdownMenuContentProps['side']
  sideOffset?: DropdownMenuContentProps['sideOffset']
  id: string
  title: string
}
