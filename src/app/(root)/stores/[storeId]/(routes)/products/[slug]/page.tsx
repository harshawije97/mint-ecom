/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ProductPricingWrapper from "./_components/product-pricing-wrapper";
import PricingMultiForm from "./_components/product-multi-form";
import ProductsWrapper from "../_components/products-wrapper";
import ProductsClient from "../_components/products-client";
import NewProductWrapper from "./_components/new-product-wrapper";

async function ProductSlugPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: any;
}) {
  const { slug } = await params;
  const { productID } = await searchParams;

  console.log("Slug:", slug);
  console.log("productId", productID);

  return (
    <div className="min-h-screen overflow-y-auto flex flex-col">
      {slug === "new" && <NewProductWrapper />}
      {slug === "colors" && (
        <ProductsWrapper
          title="Colors (0)"
          description="Colors and variants of each product"
          isAction
          actionName="Add Colors"
        >
          <ProductsClient />
        </ProductsWrapper>
      )}
      {slug === "sizes" && (
        <ProductsWrapper
          title="Sizes (0)"
          description="Sizes and variants of each product"
          isAction
          actionName="Add Sizes"
        >
          <ProductsClient />
        </ProductsWrapper>
      )}
      {slug === "pricing" && (
        <ProductPricingWrapper
          title="Product Pricing"
          description=""
          productID={productID}
        >
          <PricingMultiForm />
        </ProductPricingWrapper>
      )}
    </div>
  );
}

export default ProductSlugPage;
