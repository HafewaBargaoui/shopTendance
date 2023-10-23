import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addProduit, getProduits } from "../actions/produit.action";

const AddProductFormModal = ({ visible, onClose }) => {
  const form = useRef();
  const dispatch = useDispatch();
  const handleForm = async (e) => {
    e.preventDefault();
    console.log(form);
    const produitData = {
      title: form.current[0].value,
      basePrice: form.current[1].value,
      salePrice: form.current[2].value,
      categories: form.current[3].value,
      imageUrl: form.current[4].value,
      description: form.current[5].value,
      //title: form.current[6].value,

      // test : form.current
    };
    await dispatch(addProduit(produitData));
    dispatch(getProduits());
    form.current.reset();
  };
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className=" z-40 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-white p-2 rounded py-8 w-1/2">
        <h1 className="text-center text-gray-700 font-bold">
          Ajouter un produit
        </h1>

        <form
          ref={form}
          onSubmit={(e) => handleForm(e)}
          className="flex flex-col gap-4"
        >
          <input
            className="p-2 mt-8 rounded-xl border"
            type="text"
            placeholder="titre produit"
          />
          <input
            className="p-2 mt-8 rounded-xl border"
            type="number"
            placeholder="prix de base"
          />
          <input
            className="p-2 mt-8 rounded-xl border"
            type="number"
            placeholder="prix soldé"
          />
          <input
            className="p-2 mt-8 rounded-xl border"
            type="text"
            placeholder="catégorie"
          />
          <input
            className="p-2 mt-8 rounded-xl border"
            type="text"
            placeholder="image"
          />
          <textarea
            className="p-2 mt-8 rounded-xl border"
            placeholder="description "
          ></textarea>

          <div className="grid grid-flow-col gap-12">
            <button
              type="submit"
              className="rounded-xl  bg-green-400 text-white py-2"
            >
              Ajouter
            </button>
            <button
              className="rounded-xl bg-red-400 text-white py-2"
              onClick={onClose}
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductFormModal;
