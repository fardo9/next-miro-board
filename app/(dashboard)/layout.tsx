import type { Metadata } from 'next';
import Sidebar from '../../shared/components/Sidebar/Sidebar';
import OrganizeSidebar from '@/shared/components/Sidebar/OrganizeSidebar/OrganizeSidebar';
import Navbar from '@/shared/components/Navbar/Navbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
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
  );
}
