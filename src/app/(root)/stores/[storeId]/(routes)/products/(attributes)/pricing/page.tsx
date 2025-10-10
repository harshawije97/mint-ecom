import React from "react";
import ProductsWrapper from "../../_components/products-wrapper";
import ProductsClient from "../../_components/products-client";

function PricingPage() {
  return (
    <div className="min-h-screen overflow-y-auto flex flex-col">
      <ProductsWrapper
        title="Products Pricing"
        description="Browse product pricing details"
        isAction
        actionName="Add Product Pricing"
        slug="pricing"
      >
        <ProductsClient />
      </ProductsWrapper>
    </div>
  );
}

export default PricingPage;
