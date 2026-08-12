import { toast as sonnerToast } from "sonner";
import ToastBase from "./ToastBase";

export const showToast = ({ title, description, action, photo }) => {
  return sonnerToast.custom((id) => (
    <ToastBase
      id={id}
      title={title}
      description={description}
      action={action}
      photo={photo}
    />
  ));
};
