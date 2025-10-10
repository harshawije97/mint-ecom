"use client";
import { Spinner } from "@/components/ui/spinner";
import React from "react";

interface VariantClientProps {
  storeId: string;
  type: string;
  productId: string;
}

function VariantClient({ storeId, type, productId }: VariantClientProps) {
  console.log({ storeId, type, productId });

  React.useEffect(() => {
    if (type === "update") {
      alert("update");
    }
  }, [type]);

  return (
    <div className="w-full">
      {/* <div className="flex h-[calc(100vh-360px)] justify-center items-center">
        <span>
          <Spinner className="size-5 text-blue-500"/>
        </span>
      </div> */}
    </div>
  );
}

export default VariantClient;
