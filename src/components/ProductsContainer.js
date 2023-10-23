import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import { isEmpty } from "../utils/Utils";
import BackToTopButton from "./BackToTopButton";
function ProductsContainer() {
  const products = useSelector((state) => state.productReducer);
  console.log(products);
  return (
    <>
      <div className="mx-24 my-16 relative grid grid-cols-1 lg:grid-cols-3 gap-20 pt-4">
        {!isEmpty(products) &&
          products.map((product, index) => (
            <div
              key={index}
              className="border shadow-lg rounded-lg hover:shadow-2xl  duration-300"
            >
              <Product product={product} key={index} />
            </div>
          ))}
      </div>
      <BackToTopButton />
    </>
  );
}

export default ProductsContainer;
