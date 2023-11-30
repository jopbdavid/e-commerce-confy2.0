import React from "react";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import { Form } from "react-router-dom";

import { useLoaderData, Link } from "react-router-dom";
import FormCheckbox from "./FormCheckbox";

const handleInput = (e) => {
  const value = e.target.value;
};

const Filters = () => {
  const { metaData, params } = useLoaderData();
  const { search, company, category, shipping, order, price } = params;

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <FormInput
        type="search"
        label="search product:"
        name="search"
        defaultValue={search}
        size="input-sm"
      />
      <FormSelect
        label="select category"
        name="category"
        list={metaData.categories}
        size="select-sm"
        defaultValue={category}
      />
      <FormSelect
        label="select company"
        name="company"
        list={metaData.companies}
        size="select-sm"
        defaultValue={company}
      />
      <FormSelect
        label="sort by"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
        defaultValue={order}
      />
      <FormRange
        label="select price"
        name="price"
        size="range-sm"
        defaultValue={price}
      />
      <FormCheckbox
        label="free shipping"
        name="shipping"
        size="checkbox-sm"
        defaultValue={shipping}
      />
      <button type="submit" className="btn btn-primary btn-sm ">
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  );
};

export default Filters;
