"use client";

import React from "react";
import ProductsWrapper from "../../_components/products-wrapper";
import NewProductForm from "./new-product-form";

function NewProductWrapper() {
  return (
    <>
      <ProductsWrapper title="New Product" description="">
        <NewProductForm />
      </ProductsWrapper>
    </>
  );
}

export default NewProductWrapper;
