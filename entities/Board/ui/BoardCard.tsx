'use client'

import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { formatDistanceToNow } from 'date-fns'
import { useAuth } from '@clerk/nextjs'

import { BoadrCardProps } from '../model/boadr.types'
import { MoreHorizontal } from 'lucide-react'
import Overlay from '@/shared/components/ui/custom/Overlay'
import FooterBoardCard from '@/features/FooterBoard/ui/FooterBoardCard'
import BoardAction from './BoardAction'

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

  const authorLabel = userId === authorId ? 'You' : authorName
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
            fill
            style={{ objectFit: 'cover' }}
          />
          <Overlay />
          <BoardAction side="right" sideOffset={10} id={id} title={title}>
            <button className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 px-3 py-2 outline-none">
              <MoreHorizontal className="text-white opacity-75 hover:opacity-100 transition-opacity" />
            </button>
          </BoardAction>
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
