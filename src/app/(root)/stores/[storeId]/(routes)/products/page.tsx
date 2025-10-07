import React from "react";
import ProductsWrapper from "./_components/products-wrapper";
import ProductsClient from "./_components/products-client";

function ProductsPage() {
  return (
    <div className="min-h-screen overflow-y-auto flex flex-col">
      <ProductsWrapper
        title="Products (0)"
        description="Manage your products"
        isAction
      >
        <ProductsClient />
      </ProductsWrapper>
    </div>
  );
}

export default ProductsPage;
