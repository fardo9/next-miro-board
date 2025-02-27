'use client'

import { Poppins } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/shared/lib/utils'
import { OrganizationSwitcher } from '@clerk/nextjs'
import { Button } from '../../ui'
import { LayoutDashboard, Star } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import OrganizeSwitcherButton from './OrganizeSwitcherButton/OrganizeSwitcherButton'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600'],
})

const OrganizeSidebar = () => {
  const searchParams = useSearchParams()
  const favorites = searchParams.get('favorites')
  console.log('favorites', favorites)
  return (
    <div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5">
      <Link href="/" className="">
        <div className="flex items-center gap-x-2">
          <Image
            src="logo.svg"
            width={60}
            height={60}
            alt="Home"
          />
          <span
            className={cn(
              'font-semibold text-2xl ',
              poppins.className
            )}
          >
            Board
          </span>
        </div>
      </Link>

      <OrganizeSwitcherButton />

      <div className="space-y-1 w-full">
        <Button
          asChild
          size="lg"
          variant={favorites ? 'ghost' : 'secondary'}
          className="font-normal justify-start px-2 w-full"
        >
          <Link href="/" className="w-full">
            <LayoutDashboard className="h-4 w-4 " />
            Team Boards
          </Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant={favorites ? 'secondary' : 'ghost'}
          className="font-normal justify-start px-2 w-full"
        >
          <Link
            href={{
              pathname: '/',
              query: { favorites: true },
            }}
            className="w-full"
          >
            <Star className="h-4 w-4 " />
            Favorite boards
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default OrganizeSidebar
