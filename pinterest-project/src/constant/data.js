import { HiCog, HiOutlineCog } from "react-icons/hi";
import { RiLayout2Line, RiLayout2Fill } from "react-icons/ri";
import { AiOutlineMessage, AiFillMessage } from "react-icons/ai";
import { IoNotificationsOutline, IoNotificationsSharp } from "react-icons/io5";
import { HiMiniHome, HiOutlineHome } from "react-icons/hi2";
import { FaRegSquarePlus, FaSquarePlus } from "react-icons/fa6";


export const sidebarMenu = [
  {
    label: "Home",
    icon: HiOutlineHome,
    activeIcon: HiMiniHome,
    type: "route",
    path: "/",
  },
  {
    label: "Your boards",
    icon: RiLayout2Line,
    activeIcon: RiLayout2Fill,
    type: "route",
    path: "/boards",
  },
  {
    label: "Create",
    icon: FaRegSquarePlus,
    activeIcon: FaSquarePlus,
    type: "modal",
    modal: "CREATE_PIN",
  },
  {
    label: "Updates",
    icon: IoNotificationsOutline,
    activeIcon: IoNotificationsSharp,
    type: "modal",
    action: "OPEN_NOTIFICATIONS",
  },
  {
    label: "Messages",
    icon: AiOutlineMessage,
    activeIcon: AiFillMessage,
    type: "modal",
    modal: "CREATE_PIN",
  },
];

export const settingsItem = {
  label: "Settings & Support",
  icon: HiOutlineCog,
  activeIcon: HiCog,
  type: "modal",
  modal: "Open Settings",
};
