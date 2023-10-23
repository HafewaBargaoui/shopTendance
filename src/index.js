import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//REDUX
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers"; // il sait qu'il va chercher reducers/index.js
import { getProduits } from "./actions/produit.action";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
store.dispatch(getProduits());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
