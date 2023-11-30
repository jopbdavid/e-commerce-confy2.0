import React, { useState } from "react";
import ProductsList from "./ProductsList";
import { useLoaderData } from "react-router-dom";
import ProductsGrid from "./ProductsGrid";
import { BsFillGridFill, BsList } from "react-icons/bs";

const ProductsContainer = () => {
  const {
    metaData: { categories, companies, pagination },
  } = useLoaderData();
  const total = pagination.total;
  const [layout, setLayout] = useState("list");

  const setActiveStyles = (display) => {
    return `text-xl btn btn-circle btn-sm ${
      layout === display
        ? "btn-primary text-primary-content"
        : "btn-ghost text-base-content"
    }`;
  };

  return (
    <div>
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium text-md">
          {total} {total > 1 ? "Products" : "Product"} found
        </h4>
        <div className="flex gap-x-2">
          <button
            className={setActiveStyles("grid")}
            onClick={() => setLayout("grid")}
          >
            <BsFillGridFill />
          </button>
          <button
            className={setActiveStyles("list")}
            onClick={() => setLayout("list")}
          >
            <BsList />
          </button>
        </div>
      </div>
      <div>
        {total > 1 ? (
          layout === "grid" ? (
            <ProductsGrid />
          ) : (
            <ProductsList />
          )
        ) : (
          <h5 className="text-2xl mt-16">No products matched your search...</h5>
        )}
      </div>
    </div>
  );
};

export default ProductsContainer;
