import React from "react";
import ProductsWrapper from "../_components/products-wrapper";
import NewProductForm from "../(attributes)/_components/new-product-form";

async function NewProductPage({ params }: { params: { storeId: string } }) {
  const { storeId } = await params;

  return (
    <div className="min-h-screen overflow-y-auto flex flex-col">
      <ProductsWrapper title="New Product" description="add a new product">
        <NewProductForm store={storeId} />
      </ProductsWrapper>
    </div>
  );
}

export default NewProductPage;
