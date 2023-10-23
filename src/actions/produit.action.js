import axios from "axios";
export const GET_PRODUITS = "GET_PRODUITS";
export const ADD_PRODUIT = "ADD_PRODUIT";
export const DELETE_PRODUIT = "DELETE_PRODUIT";
export const getProduits = () => {
  return (dispatch) => {
    return axios.get("http://localhost:3000/products").then((res) => {
      dispatch({ type: GET_PRODUITS, payload: res.data });
    });
  };
};

export const addProduit = (data) => {
  return (dispatch) => {
    return axios.post("http://localhost:3000/products", data).then((res) => {
      dispatch({ type: ADD_PRODUIT, payload: data });
    });
  };
};

export const deleteProduit = (produitId) => {
  return (dispatch) => {
    return axios
      .delete(`http://localhost:3000/products/${produitId}`)
      .then((res) => {
        dispatch({ type: DELETE_PRODUIT, payload: produitId });
      });
  };
};
