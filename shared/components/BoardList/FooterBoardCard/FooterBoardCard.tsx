import React, { FC } from 'react'
import { FooterBoardCardProps } from './FooterBoardCard.types'
import { Button } from '../..'
import { Star } from 'lucide-react'
import { cn } from '@/shared/lib/utils'

const FooterBoardCard: FC<FooterBoardCardProps> = ({
  isFavorite,
  title,
  createdAtLabel,
  authorLabel,
  onClick,
  disabled,
}) => {
  return (
    <div className="relative bg-white p-3">
      <p className="text-[13px] truncate max-w-[calc(100%-20px)]">
        {title}
      </p>
      <p className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px] text-muted-foreground truncate">
        {authorLabel}, {createdAtLabel}
      </p>
      <Button
        variant={'icon'}
        size={'icon_custom'}
        disabled={disabled}
        onClick={onClick}
        className={cn(
          'opacity-0 group-hover:opacity-100 transition-opacity absolute top-3 right-3 text-muted-foreground hover:text-blue-600',
          disabled && 'cursor-not-allowed opacity-75'
        )}
      >
        <Star
          className={cn(
            'h-4 w-4',
            isFavorite && 'fill-blue-600 text-blue-600'
          )}
        />
      </Button>
    </div>
  )
}

export default FooterBoardCard
