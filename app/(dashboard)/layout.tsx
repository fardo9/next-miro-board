import Sidebar from '../../widget/Sidebar/ui/Sidebar'
import OrganizeSidebar from '@/features/OrganizeSidebar/ui/OrganizeSidebar'
import { Navbar } from '@/shared/components/ui'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="h-full">
      <Sidebar />
      <div className="pl-[60px] h-full">
        <div className="flex h-full gap-x-3">
          <OrganizeSidebar />
          <div className="h-full flex-1">
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </main>
  )
}
