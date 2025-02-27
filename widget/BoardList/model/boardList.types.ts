export interface BoardListProps {
  orgId: string
}

export interface BoardListContentProps {
  data: Array<{
    _id: string
    title: string
    imageUrl: string
    authorId: string
    authorName: string
    _creationTime: number
    orgId: string
    isFavorite: boolean
  }>
  hasFavorites: boolean
  orgId: string
}
