export interface BoadrCardProps {
    id: string
    title: string
    imageUrl: string
    authorId: string
    authorName: string
    createdAt: number
    orgId: string
    isFavorite: boolean // TODO: Add isFavorite prop type and logic for favorite state management in the component.
  }