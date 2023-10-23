import React, { useState } from "react";
import AddProductFormModal from "../components/AddProductFormModal";
function MenuBar() {
  const [showModal, setShowModal] = useState(false);
  const handleOnClose = () => setShowModal(false);
  return (
    <div className="mt-6 ml-28">
      <button
        onClick={() => setShowModal(true)}
        type="button"
        className="px-4 py-3 bg-green-600 hover:bg-green-800 rounded-md text-white outline-none focus:ring-4 shadow-lg transform transition-transform flex"
      >
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />

          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
            />{" "}
            <path
              d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
            />{" "}
          </g>
        </svg>
        <span className="ml-2">Ajouter</span>
      </button>
      <AddProductFormModal visible={showModal} onClose={handleOnClose} />
    </div>
  );
}

export default MenuBar;
