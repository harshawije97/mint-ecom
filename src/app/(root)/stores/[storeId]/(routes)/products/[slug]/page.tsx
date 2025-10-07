/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ProductsWrapper from "../_components/products-wrapper";
import NewProductForm from "./_components/new-product-form";

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
      <ProductsWrapper title="New Product" description="">
        <NewProductForm />
      </ProductsWrapper>
    </div>
  );
}

export default ProductSlugPage;
