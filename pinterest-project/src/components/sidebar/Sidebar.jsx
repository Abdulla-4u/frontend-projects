import { Tooltip } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import SidebarItem from "./SidebarItem";
import { settingsItem, sidebarMenu } from "../../constant/data";
import { useSidebarAction } from "./useSidebarAction";
import { createBoard } from "../../store/features/BoardSlice";

const Sidebar = () => {
  const { activeSidebarTab } = useSelector((state) => state.sidebar);
  const { handleSidebarAction } = useSidebarAction();
  const dispatch = useDispatch(); 
   
  return (
    <aside className="h-screen w-18 py-5 px-2 flex flex-col items-center bg-(--white) border-r border-r-[#E5E5E0]">
      {/* Logo */}
      <div onClick={()=> dispatch(createBoard({name: "Man's Fashion", isPrivate: false}))} className="w-8 h-8 rounded-lg cursor-pointer hover:bg-[#F6F6F3] transition-colors">
        <img
          className="w-full h-full object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8fogr4zkGEuzFdhIFmvfhiS7WYr6NVunFCw&s"
          alt="Pinterest logo"
        />
      </div>

      {/* Main menu */}
      <div className="pt-6 space-y-5 flex flex-col items-center">
        {sidebarMenu.map((item) => (
          <SidebarItem key={item.label} item={item} />
        ))}
      </div>

      {/* Bottom settings */}
      <div className="mt-auto">
        <Tooltip content={settingsItem.label} placement="right">
          <div
            onClick={() => handleSidebarAction(settingsItem)}
            className="flex items-center justify-center w-10 h-10 rounded-lg cursor-pointer hover:bg-[#F6F6F3] transition-colors"
          >
            {activeSidebarTab === settingsItem.label ? (
              <settingsItem.activeIcon size={28} />
            ) : (
              <settingsItem.icon size={28} />
            )}
          </div>
        </Tooltip>
      </div>
      
    </aside>
  );
};

export default Sidebar;






