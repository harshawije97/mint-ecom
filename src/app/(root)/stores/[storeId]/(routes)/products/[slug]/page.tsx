/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

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

  return <div>ProductSlugPage</div>;
}

export default ProductSlugPage;
