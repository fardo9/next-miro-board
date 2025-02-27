import ListOrganizations from '@/entities/SidebarOrganization/ui/ListOrganizations'
import SidebarNewBoardButton from '@/features/OrganizeSidebar/ui/SidebarCreateOrganizationButton'

const Sidebar = () => {
  return (
    <div className="fixed z-[1] left-0 bg-blue-950 h-full w-[60px] flex p-3 flex-col gap-y-4 text-white">
      <ListOrganizations />
      <SidebarNewBoardButton />
    </div>
  )
}

export default Sidebar
