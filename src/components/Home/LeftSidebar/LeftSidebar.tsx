import MenuList from "../../Shared/MenuList/MenuList";
import SidebarGeneralList from "../../Shared/SidebarGeneralList/SidebarGeneralList";
import SidebarLogo from "../../Shared/SidebarLogo/SidebarLogo";
import SidebarPlayList from "../../Shared/SidebarPlayList/SidebarPlayList";

const LeftSidebar = () => {
  return (
    <aside className="flex flex-col w-[20%] border-r border-lineColor px-5 py-9 justify-between">
      <div>
        <SidebarLogo />
        <MenuList />
        <SidebarPlayList />
      </div>
      <SidebarGeneralList />
    </aside>
  );
};

export default LeftSidebar;
