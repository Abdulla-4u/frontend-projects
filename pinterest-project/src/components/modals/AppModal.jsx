import { Modal, ModalBody } from "flowbite-react";

const AppModal = ({
  open,
  onClose,
  size = "lg",
  dismissible = true,
  children,
}) => {
  return (
    <Modal
      show={open}
      size={size}
      dismissible={dismissible}
      onClose={onClose}
     
    >
      <ModalBody className="p-0">
        {children}
      </ModalBody>
    </Modal>
  );
};

export default AppModal;
