'use client'

import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { formatDistanceToNow } from 'date-fns'
import { useAuth } from '@clerk/nextjs'
import { FooterBoardCard, Overlay, Skeleton } from '../..'
import { BoadrCardProps } from './BoadrCard.types'

const BoadrCard: FC<BoadrCardProps> = ({
  id,
  title,
  imageUrl,
  authorId,
  authorName,
  createdAt,
  orgId,
  isFavorite,
}) => {
  const { userId } = useAuth()

  const authorLabel =
    userId === authorId ? 'You' : authorName
  const createdAtLabel = formatDistanceToNow(createdAt, {
    addSuffix: true,
  })

  return (
    <Link href={`/board/${id}`}>
      <div className="flex-col group aspect-[100/127] border rounded-lg flex justify-between overflow-hidden">
        <div className="relative w-full h-full bg-amber-200">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
          <Overlay />
        </div>

        <FooterBoardCard
          isFavorite={isFavorite}
          title={title}
          createdAtLabel={createdAtLabel}
          authorLabel={authorLabel}
          onClick={() => {}}
          disabled={false}
        />
      </div>
    </Link>
  )
}

export default BoadrCard
