import React from "react";
import { deleteProduit } from "../actions/produit.action";
import { useDispatch } from "react-redux";
const ModalConfirmDelete = ({ visible, onClose, produit }) => {
  const dispatch = useDispatch();
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed z-50 inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-white p-2 rounded py-8 w-1/2">
        <h1 className="text-sm text-center sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-xl">
          Etes vous sure de vouloir supprimer ce produit ?
        </h1>

        <div className="grid grid-flow-col gap-12 mt-6">
          <button
            className="rounded-xl bg-red-400 text-white py-2 text-xs text-center sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-xl"
            onClick={() => dispatch(deleteProduit(produit.id))}
          >
            Confirmer
          </button>
          <button
            onClick={onClose}
            className="rounded-xl bg-green-400 text-white py-2 text-xs text-center sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-xl"
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmDelete;
