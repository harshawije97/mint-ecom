import React from "react";
import ProductsWrapper from "../../_components/products-wrapper";
import ProductsClient from "../../_components/products-client";

function SizesPage() {
  return (
    <div className="min-h-screen overflow-y-auto flex flex-col">
      <ProductsWrapper
        title="Sizes"
        description="Browse product sizes details"
        isAction
        actionName="Add Product Sizes"
        slug="sizes"
      >
        <ProductsClient />
      </ProductsWrapper>
    </div>
  );
}

export default SizesPage;
