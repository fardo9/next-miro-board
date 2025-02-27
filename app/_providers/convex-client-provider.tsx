'use client'

import { ClerkProvider, useAuth } from '@clerk/nextjs'
import { ConvexProviderWithClerk } from 'convex/react-clerk'
import { AuthLoading, Authenticated, ConvexReactClient } from 'convex/react'
import GlobalLoading from '../../shared/components/ui/custom/GlobalLoading'

interface ConvexClientProviderProps {
  children: React.ReactNode
}

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!)

export default function ConvexClientProvider({
  children,
}: ConvexClientProviderProps) {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <Authenticated>
          <div>{children}</div>
        </Authenticated>

        <AuthLoading>
          <GlobalLoading />
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  )
}
