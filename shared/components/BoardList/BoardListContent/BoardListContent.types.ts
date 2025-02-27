export interface BoardListContentProps {
  data: Array<{
    _id: string
    title: string
    imageUrl: string
    authorId: string
    authorName: string
    _creationTime: number
    orgId: string
  }>
  hasFavorites: boolean
  orgId: string
}
