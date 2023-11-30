import React from "react";
import { Form, redirect } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";

export const action =
  (store) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const response = await customFetch(url, { params });

    const products = response.data.data;
    const metaData = response.data.meta;

    return { products, metaData, params };
  };

const CheckoutForm = () => {
  return <div>CheckoutForm</div>;
};

export default CheckoutForm;
