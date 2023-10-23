import {
  ADD_PRODUIT,
  DELETE_PRODUIT,
  GET_PRODUITS,
} from "../actions/produit.action";

const initalState = {};
export default function productReducer(state = initalState, action) {
  switch (action.type) {
    case GET_PRODUITS:
      return action.payload;
    case ADD_PRODUIT:
      return [action.payload, ...state];
    case DELETE_PRODUIT:
      return state.filter((produit) => produit.id !== action.payload);
    default:
      return state;
  }
  //switch
}
