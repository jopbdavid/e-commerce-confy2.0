import React from "react";
import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";

const url = "/products";

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const response = await customFetch(url, { params });
  console.log(response);
  const products = response.data.data;
  const metaData = response.data.meta;

  return { products, metaData, params };
};

const Products = () => {
  const {
    products,
    metaData: { categories, companies, pagination },
  } = useLoaderData();

  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
