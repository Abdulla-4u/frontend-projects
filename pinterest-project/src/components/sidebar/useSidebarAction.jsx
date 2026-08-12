import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {setActiveSidebarTab} from "../../store/features/SidebarSlice"

export const useSidebarAction = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSidebarAction = (item) => {
    dispatch(setActiveSidebarTab(item.label));

    switch (item.type) {
      case "route":
        navigate(item.path);
        break;

      case "modal":
        console.log("Open Modal:", item.modal);
        break;

      case "action":
        console.log("Custom Action:", item.action);
        break;

      default:
        break;
    }
  };

  return { handleSidebarAction };
};
