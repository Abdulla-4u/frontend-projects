import { Tooltip } from "flowbite-react";
import { useSelector } from "react-redux";
import { useSidebarAction } from "./useSidebarAction";

const SidebarItem = ({ item }) => {
  const { activeSidebarTab } = useSelector((state) => state.sidebar);
  const { handleSidebarAction } = useSidebarAction();

  const Icon = activeSidebarTab === item.label ? item.activeIcon : item.icon;

  return (
    <Tooltip content={item.label} placement="right">
      <div
        onClick={() => handleSidebarAction(item)}
        className="flex items-center justify-center w-10 h-10 rounded-lg cursor-pointer
                   hover:bg-[#F6F6F3] transition-colors"
      >
        <Icon size={28} />
      </div>
    </Tooltip>
  );
};

export default SidebarItem;
