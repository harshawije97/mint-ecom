/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import VariantClient from "../../_components/variant-client";

async function ProductVariantSlugPage({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
  const param = await params;
  const search = await searchParams;

  return (
    <div className="min-h-screen overflow-y-auto flex flex-col">
      <VariantClient
        storeId={param.storeId}
        type={search.variant}
        productId={search.productId}
      />
    </div>
  );
}

export default ProductVariantSlugPage;
