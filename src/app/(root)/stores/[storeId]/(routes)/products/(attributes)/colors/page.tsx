import React from "react";
import ProductsWrapper from "../../_components/products-wrapper";
import ProductsClient from "../../_components/products-client";

function ColorsPage() {

  return (
    <div className="min-h-screen overflow-y-auto flex flex-col">
      <ProductsWrapper
        title="Colors"
        description="Colors and variants of each product"
        isAction
        actionName="Add Colors"
        slug="colors"
      >
        <ProductsClient />
      </ProductsWrapper>
    </div>
  );
}

export default ColorsPage;
