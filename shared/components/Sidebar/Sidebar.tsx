import ListOrganizations from './ListOrganizations/ListOrganizations'
import AddNewBoardButton from './AddNewBoardButton/AddNewBoardButton'

const Sidebar = () => {
  return (
    <div className="fixed z-[1] left-0 bg-blue-950 h-full w-[60px] flex p-3 flex-col gap-y-4 text-white">
      <ListOrganizations />
      <AddNewBoardButton />
    </div>
  )
}

export default Sidebar
