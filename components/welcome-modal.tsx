import { useEffect, useState } from "react";

import WelcomeForm from "./welcome-form";
import { getFromLocalStorage } from "@/utils/localStorage";

function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const username = getFromLocalStorage("username");
    const processGoal = getFromLocalStorage("processGoal");

    if (!username || !processGoal) {
      setIsModalOpen(true);
    }
  }, []);

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
