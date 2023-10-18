import { useState } from "react";

import { Button } from "@/components/ui/button";

import WelcomeForm from "./welcome-form";

function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* <Button onClick={openModal}>Open Modal</Button> */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <WelcomeForm /> {/* Embed your form here */}
            {/* <Button onClick={closeModal}>Close Modal</Button> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
